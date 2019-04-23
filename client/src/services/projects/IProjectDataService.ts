import { AxiosPromise } from 'axios';

import { IFilterData } from 'models/Filters';
import { Project } from 'models/Project';
import User from 'models/User';

export interface IProjectDataService {
  getProjects(filter?: IFilterData[]): AxiosPromise<Project[]>;
  loadProjectOwner(userId: string): AxiosPromise<User>;
}
