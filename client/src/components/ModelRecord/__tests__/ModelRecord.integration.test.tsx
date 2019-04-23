import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import App from 'App/App';
import Preloader from 'components/shared/Preloader/Preloader';
import routes from 'routes';
import { expRunsMocks } from 'services/mocks/expRunsMock';
import { projectsMock } from 'services/mocks/projectsMock';
import { mockServerUser } from 'services/mocks/user';
import { loadExperimentRunsActionTypes } from 'store/experiment-runs';
import { selectModelRecord } from 'store/model-record';
import checkSuccessfullCommunication from 'utils/tests/integrations/checkSuccessfullCommunication';
import { flushAllPromisesFor } from 'utils/tests/integrations/flushAllPromisesFor';
import makeMountComponentForIntegratingTest from 'utils/tests/integrations/makeMountComponentForIntegratingTest';

import ModelRecord from '../ModelRecord';
import styles from '../ModelRecord.module.css';

const targetModelRecord = expRunsMocks[0];
const targetProject = projectsMock.find(
  p => p.id === targetModelRecord.project_id
)!;

const mountApp = makeMountComponentForIntegratingTest(App, {
  pathname: routes.modelRecord.getRedirectPath({
    modelRecordId: targetModelRecord.id,
    projectId: targetProject.id,
  }),
});

describe('integration: (components/ModelRecord) ModelRecord', () => {
  const mock = new MockAdapter(axios);

  mock.onGet('/api/auth/getUser').reply(_ => [200, mockServerUser]);
  mock
    .onGet('/v1/modeldb/experiment-run/getExperimentRunsInProject')
    .reply(_ => [200, { experiment_runs: expRunsMocks }]);
  mock
    .onGet('/v1/modeldb/project/getProjects')
    .reply(_ => [200, { projects: projectsMock }]);
  mock
    .onGet(`/v1/deployment/status/${targetModelRecord.id}`)
    .reply(_ => [200, { status: 'live' }]);

  jest.useFakeTimers();

  it('should render model record page', async () => {
    const { store, wrapper, dispatchSpy } = mountApp();

    jest.runAllTimers();

    await flushAllPromisesFor(wrapper);

    checkSuccessfullCommunication(loadExperimentRunsActionTypes, dispatchSpy);

    const state = store.getState();
    expect(selectModelRecord(state)).toBeTruthy();

    expect(
      wrapper.find(ModelRecord).find(`.${styles.model_layout}`)
    ).toHaveLength(1);

    wrapper.unmount();
  });
});
