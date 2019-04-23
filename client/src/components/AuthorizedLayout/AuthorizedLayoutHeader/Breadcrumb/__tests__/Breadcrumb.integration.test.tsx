import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { ReactWrapper } from 'enzyme';

import App from 'App/App';
import routes from 'routes';
import { expRunsMocks } from 'services/mocks/expRunsMock';
import { projectsMock } from 'services/mocks/projectsMock';
import { mockServerUser } from 'services/mocks/user';
import { loadExperimentRunsActionTypes } from 'store/experiment-runs';
import { loadProjectsActionTypes } from 'store/projects';
import checkSuccessfullCommunication from 'utils/tests/integrations/checkSuccessfullCommunication';
import { flushAllPromisesFor } from 'utils/tests/integrations/flushAllPromisesFor';
import makeMountComponentForIntegratingTest from 'utils/tests/integrations/makeMountComponentForIntegratingTest';

import { loadModelRecordActionTypes } from 'store/model-record';
import { Breadcrumb } from '../Breadcrumb';
import styles from '../Breadcrumb.module.css';

const targetExperiment = expRunsMocks[0];
const projectsMockForCase = projectsMock;
const targetProject = projectsMock.find(
  p => p.id === targetExperiment.project_id
)!;

const mountApp = (pathname: string) =>
  makeMountComponentForIntegratingTest(App, { pathname })();

describe('integration: (components/Breadcrumb) Breadcrumb', () => {
  const mock = new MockAdapter(axios);

  mock.onGet('/api/auth/getUser').reply(_ => [200, mockServerUser]);
  mock
    .onGet('/v1/modeldb/experiment-run/getExperimentRunsInProject')
    .reply(_ => [200, { experiment_runs: expRunsMocks }]);
  mock
    .onGet('/v1/modeldb/project/getProjects')
    .reply(_ => [200, { projects: projectsMockForCase }]);

  const getBreadcrumbsNames = (wrapper: ReactWrapper) =>
    wrapper
      .find(Breadcrumb)
      .find(`.${styles.breadcrumb_item}`)
      .map(b => b.text());

  it('should render correct breadcrumbs for experiment runs page', async () => {
    const { wrapper, dispatchSpy } = mountApp(
      routes.experimentRuns.getRedirectPath({ projectId: targetProject.id })
    );

    await flushAllPromisesFor(wrapper);

    checkSuccessfullCommunication(loadProjectsActionTypes, dispatchSpy);
    checkSuccessfullCommunication(loadExperimentRunsActionTypes, dispatchSpy);

    expect(getBreadcrumbsNames(wrapper)).toEqual([
      'projects',
      targetProject.name,
    ]);

    wrapper.unmount();
  });

  it('should render correct breadcrumbs for model record page', async () => {
    const { wrapper, dispatchSpy } = mountApp(
      routes.modelRecord.getRedirectPath({
        projectId: targetProject.id,
        modelRecordId: expRunsMocks[0].id,
      })
    );

    await flushAllPromisesFor(wrapper);

    checkSuccessfullCommunication(loadProjectsActionTypes, dispatchSpy);
    checkSuccessfullCommunication(loadExperimentRunsActionTypes, dispatchSpy);
    checkSuccessfullCommunication(loadModelRecordActionTypes, dispatchSpy);

    expect(getBreadcrumbsNames(wrapper)).toEqual([
      'projects',
      targetProject.name,
      expRunsMocks[0].name,
    ]);

    wrapper.unmount();
  });
});

export default undefined;
