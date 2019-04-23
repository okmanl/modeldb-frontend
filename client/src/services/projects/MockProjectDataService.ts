import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { mockServerUser } from 'services/mocks/user';

import { projectsMock } from '../mocks/projectsMock';
import { IProjectDataService } from './IProjectDataService';
import ProjectDataService from './ProjectDataService';

export default class MockProjectDataService extends ProjectDataService
  implements IProjectDataService {
  public constructor() {
    super();

    const mock = new MockAdapter(axios);
    mock
      .onGet('/v1/modeldb/project/getProjects')
      .reply(200, { projects: projectsMock });
    mock.onGet('/uac-proxy/v1/uac/getUser').reply(200, mockServerUser);
  }
}
