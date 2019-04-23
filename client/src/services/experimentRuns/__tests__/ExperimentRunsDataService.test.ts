import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import {
  ComparisonType,
  IFilterData,
  IMetricFilterData,
  IStringFilterData,
  PropertyType,
} from 'models/Filters';

import { expRunsMocks, expRunsProjectIdMock } from '../../mocks/expRunsMock';
import ExperimentRunsDataService from '../ExperimentRunsDataService';

describe('(services/experimentRuns) ExperimentRunsDataService', () => {
  describe('(method) getExperimentRuns', () => {
    const makeExperimentRunsService = (): ExperimentRunsDataService => {
      return new ExperimentRunsDataService();
    };

    describe('filtering experiment runs', () => {
      beforeEach(() => {
        const mock = new MockAdapter(axios);
        mock
          .onGet('/v1/modeldb/experiment-run/getExperimentRunsInProject')
          .reply(config => {
            return [
              200,
              {
                experiment_runs: expRunsMocks.filter(
                  x => x.project_id === config.params.project_id
                ),
              },
            ];
          });
      });

      it('should return all projects if there are not filters', async () => {
        const { data } = await makeExperimentRunsService().getExperimentRuns(
          expRunsProjectIdMock,
          []
        );

        expect(data).toHaveLength(expRunsMocks.length);
      });

      it('should filter by tag', async () => {
        const filters: IFilterData[] = [
          {
            name: 'tag',
            value: 'demo',
            type: PropertyType.STRING,
          } as IStringFilterData,
        ];

        const { data } = await makeExperimentRunsService().getExperimentRuns(
          expRunsProjectIdMock,
          filters
        );

        expect(data).not.toHaveLength(0);
        expect(
          data.every(r => r.tags.includes(filters[0].value as string))
        ).toBeTruthy();
      });

      it('should filter by name', async () => {
        const filters: IFilterData[] = [
          {
            name: 'name',
            value: expRunsMocks[0].name,
            type: PropertyType.STRING,
          } as IStringFilterData,
        ];

        const { data } = await makeExperimentRunsService().getExperimentRuns(
          expRunsProjectIdMock,
          filters
        );

        expect(filters[0].value).toBe(data[0].name);
      });

      describe('when filter type metric', () => {
        it('should filter experiments by metric key and value', async () => {
          const filters: IFilterData[] = [
            {
              type: PropertyType.METRIC,
              comparisonType: ComparisonType.MORE,
              name: 'train_loss',
              value: 0,
            } as IMetricFilterData,
          ];

          const { data } = await makeExperimentRunsService().getExperimentRuns(
            expRunsProjectIdMock,
            filters
          );

          const expected = data.every(e => {
            const metric = e.metrics.find(
              metric => metric.key === filters[0].name
            );
            return Boolean(metric && metric.value > filters[0].value);
          });
          expect(data).not.toHaveLength(0);
          expect(expected).toBeTruthy();
        });

        it('should filter experiments by hyperparaments key and value', async () => {
          const filters: IFilterData[] = [
            {
              type: PropertyType.METRIC,
              comparisonType: ComparisonType.MORE,
              name: 'dropout',
              value: 0,
            } as IMetricFilterData,
          ];

          const { data } = await makeExperimentRunsService().getExperimentRuns(
            expRunsProjectIdMock,
            filters
          );

          const expected = data.every(e => {
            const hyperparametr = e.hyperparameters.find(
              hyperparametr => hyperparametr.key === filters[0].name
            );
            return Boolean(
              hyperparametr && hyperparametr.value > filters[0].value
            );
          });
          expect(data).not.toHaveLength(0);
          expect(expected).toBeTruthy();
        });
      });

      it('should return experiments which satisfy all filters', async () => {
        const filters: IFilterData[] = [
          {
            name: 'tag',
            value: 'demo',
            type: PropertyType.STRING,
          } as IStringFilterData,
          {
            name: 'name',
            value: expRunsMocks[0].name,
            type: PropertyType.STRING,
          } as IStringFilterData,
        ];

        const { data } = await makeExperimentRunsService().getExperimentRuns(
          expRunsProjectIdMock,
          filters
        );

        const expected = data.filter(e => {
          return (
            e.tags.includes(filters[0].value as string) &&
            e.name === filters[1].value
          );
        });
        expect(data).not.toHaveLength(0);
        expect(expected).toBeTruthy();
      });
    });
  });
});
