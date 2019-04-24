import axios, { AxiosPromise, AxiosRequestConfig } from 'axios';
import { JsonConvert } from 'json2typescript';

import { IFilterData } from 'models/Filters';
import { Project } from 'models/Project';
import User from 'models/User';
import { convertServerUser } from 'services/converters/user';

import { BaseDataService } from '../BaseDataService';
import { IProjectDataService } from './IProjectDataService';

export default class ProjectDataService extends BaseDataService
  implements IProjectDataService {
  public constructor() {
    super();
  }

  public getProjects(filter: IFilterData[] = []): AxiosPromise<Project[]> {
    return axios.get<Project[]>(
      '/v1/modeldb/project/getProjects',
      this.responseToProjectConfig(filter)
    );
  }

  private responseToProjectConfig(filters?: IFilterData[]): AxiosRequestConfig {
    return {
      transformResponse: [
        (data: any) => {
          try {
            if (!data || !data.projects) {
              return Array<Project>();
            }
            const jsonConvert = new JsonConvert();
            const projects = jsonConvert.deserializeArray(
              data.projects,
              Project
            ) as Project[];
            for (const project of projects) {
              const author = new User(
                'testid',
                process.env.REACT_APP_USER_EMAIL
              );
              author.name = process.env.REACT_APP_USERNAME;
              project.Author = author;
            }

            return filters && filters.length > 0
              ? projects.filter(p => this.checkProject(p, filters))
              : projects;
          } catch (error) {
            return data;
          }
        },
      ],
    };
  }

  private checkProject(project: Project, filters: IFilterData[]) {
    return filters.every(filter => {
      const propName: string = filter.name.toLocaleLowerCase();
      const propValue: string = filter.value.toString().toLocaleLowerCase();

      if (propName === 'name') {
        return project.name.toLocaleLowerCase().includes(propValue);
      }

      if (propName === 'tag') {
        return Boolean(
          project.tags.find(
            t =>
              t.localeCompare(propValue, undefined, {
                sensitivity: 'accent',
              }) === 0
          )
        );
      }

      if (propName === 'description') {
        return (
          project.description.localeCompare(propValue, undefined, {
            sensitivity: 'accent',
          }) === 0
        );
      }

      return false;
    });
  }
}
