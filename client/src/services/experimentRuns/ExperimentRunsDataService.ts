import axios, { AxiosPromise, AxiosRequestConfig } from 'axios';
import { JsonConvert } from 'json2typescript';

import { ComparisonType, IFilterData, PropertyType } from 'models/Filters';
import ModelRecord from 'models/ModelRecord';

import { BaseDataService } from '../BaseDataService';
import { IExperimentRunsDataService } from './IExperimentRunsDataService';

export default class ExperimentRunsDataService extends BaseDataService
  implements IExperimentRunsDataService {
  constructor() {
    super();
  }

  public getExperimentRuns(
    projectId: string,
    filters: IFilterData[] = []
  ): AxiosPromise<ModelRecord[]> {
    const axiosConfig = this.responseToExperimentRunsConfig(filters);
    axiosConfig.params = { project_id: projectId };
    return axios.get<ModelRecord[]>(
      '/v1/modeldb/experiment-run/getExperimentRunsInProject',
      axiosConfig
    );
  }

  public getModelRecord(
    modelId: string,
    storeExperimentRuns: ModelRecord[]
  ): Promise<ModelRecord> {
    return new Promise<ModelRecord>(resolve => {
      let modelRecord;
      storeExperimentRuns.forEach(model => {
        if (model.id === modelId) {
          modelRecord = model;
        }
      });
      resolve(modelRecord);
    });
  }

  private responseToExperimentRunsConfig(
    filters?: IFilterData[]
  ): AxiosRequestConfig {
    return {
      transformResponse: [
        (data: any) => {
          try {
            if (!data || !data.experiment_runs) {
              return Array<ModelRecord>();
            }
            const jsonConvert = new JsonConvert();
            let experimentRuns = jsonConvert.deserializeArray(
              data.experiment_runs,
              ModelRecord
            ) as ModelRecord[];
            if (filters && filters.length > 0) {
              experimentRuns = experimentRuns.filter(model =>
                this.checkExperimentRun(model, filters)
              );
            }
            return experimentRuns;
          } catch (error) {
            return data;
          }
        },
      ],
    };
  }

  private checkExperimentRun(modelRecord: ModelRecord, filters: IFilterData[]) {
    return filters.every(filter => {
      const propName: string = filter.name.toLocaleLowerCase();

      if (propName === 'tag') {
        return modelRecord.tags.includes(filter.value.toString());
      }

      if (propName === 'name') {
        return modelRecord.name === filter.value.toString();
      }

      if (propName === 'id') {
        return modelRecord.id === filter.value.toString();
      }

      if (propName === 'ProjectId') {
        return modelRecord.projectId === filter.value.toString();
      }

      if (filter.type === PropertyType.METRIC) {
        const metricOrHyperparameter = [
          ...modelRecord.metrics,
          ...modelRecord.hyperparameters,
        ].find(x => x.key === filter.name);
        if (
          !metricOrHyperparameter ||
          !metricOrHyperparameter.value === undefined
        ) {
          return false;
        }

        const val = metricOrHyperparameter.value;

        if (filter.comparisonType === ComparisonType.LESS) {
          return filter.value > val;
        }
        if (filter.comparisonType === ComparisonType.MORE) {
          return filter.value < val;
        }
        if (filter.comparisonType === ComparisonType.EQUALS) {
          return filter.value === val;
        }
      }

      return false;
    });
  }
}
