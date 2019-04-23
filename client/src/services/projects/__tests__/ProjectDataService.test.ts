import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { IFilterData, IStringFilterData, PropertyType } from 'models/Filters';
import { projectsMock } from 'services/mocks/projectsMock';

import ProjectDataService from '../ProjectDataService';

describe('(services/projects) ProjectDataService', () => {
  describe('(method) getExperimentRuns', () => {
    const makeProjectDataService = (): ProjectDataService => {
      return new ProjectDataService();
    };

    beforeEach(() => {
      const mock = new MockAdapter(axios);
      mock
        .onGet('/v1/modeldb/project/getProjects')
        .reply(200, { projects: projectsMock });
    });

    it('should return all projects if there are not filters', async () => {
      const { data } = await makeProjectDataService().getProjects([]);

      expect(data).toHaveLength(projectsMock.length);
    });

    it('should filter project by name', async () => {
      const filters: IFilterData[] = [
        {
          name: 'name',
          value: 'MNIST',
          type: PropertyType.STRING,
        } as IStringFilterData,
      ];

      const { data } = await makeProjectDataService().getProjects(filters);

      expect(data).not.toHaveLength(0);
      expect(
        data.every(p => p.name.includes(filters[0].value as string))
      ).toBeTruthy();
    });

    it('should filter project by tag', async () => {
      const filters: IFilterData[] = [
        {
          name: 'tag',
          value: 'demo',
          type: PropertyType.STRING,
        } as IStringFilterData,
      ];

      const { data } = await makeProjectDataService().getProjects(filters);

      expect(data).not.toHaveLength(0);
      expect(
        data.every(p => p.tags.includes(filters[0].value as string))
      ).toBeTruthy();
    });

    it('should return all projects which satisfy all filters', async () => {
      const filters: IFilterData[] = [
        {
          name: 'tag',
          value: 'demo',
          type: PropertyType.STRING,
        } as IStringFilterData,
        {
          name: 'name',
          value: 'MNIST',
          type: PropertyType.STRING,
        } as IStringFilterData,
      ];

      const { data } = await makeProjectDataService().getProjects(filters);

      expect(data).not.toHaveLength(0);
      expect(
        data.every(
          p =>
            p.tags.includes(filters[0].value as string) &&
            p.name.includes(filters[1].value as string)
        )
      ).toBeTruthy();
    });
  });
});

export default undefined;
