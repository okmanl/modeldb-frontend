import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { action } from 'typesafe-actions';

import App from 'App/App';
import { projectsMock } from 'services/mocks/projectsMock';
import { mockServerUser } from 'services/mocks/user';
import {
  applyFilters,
  IManageFiltersAction,
  manageFiltersTypes,
} from 'store/filter';
import { loadProjectsActionTypes, selectProjects } from 'store/projects';
import checkSuccessfullCommunication from 'utils/tests/integrations/checkSuccessfullCommunication';
import { flushAllPromisesFor } from 'utils/tests/integrations/flushAllPromisesFor';
import makeMountComponentForIntegratingTest from 'utils/tests/integrations/makeMountComponentForIntegratingTest';

import ProjectWidget from '../ProjectWidget/ProjectWidget';

const mountApp = makeMountComponentForIntegratingTest(App);

describe('integration: (component/Projects) Projects', () => {
  const mock = new MockAdapter(axios);

  mock.onGet('/api/auth/getUser').reply(_ => [200, mockServerUser]);
  mock
    .onGet('/v1/modeldb/project/getProjects')
    .reply(_ => [200, { projects: projectsMock }]);

  it('should render all projects when there are not filters', async () => {
    const { wrapper, store, dispatchSpy } = mountApp();

    await flushAllPromisesFor(wrapper);

    checkSuccessfullCommunication(loadProjectsActionTypes, dispatchSpy);

    const state = store.getState();
    expect(selectProjects(state)).toHaveLength(projectsMock.length);

    expect(wrapper.find(ProjectWidget)).toHaveLength(projectsMock.length);
  });

  it('should filter projects when there are filters', async () => {
    const { wrapper, store } = mountApp();

    await flushAllPromisesFor(wrapper);

    const addFilterAction: Extract<
      IManageFiltersAction,
      { type: manageFiltersTypes.ADD_FILTER }
    > = action(manageFiltersTypes.ADD_FILTER, {
      filter: {
        name: 'Tag',
        type: 1,
        invert: false,
        value: 'demo',
      },
      ctx: 'Project',
    });
    store.dispatch(addFilterAction);
    store.dispatch(applyFilters(addFilterAction.payload.ctx, [
      addFilterAction.payload.filter,
    ]) as any);

    await flushAllPromisesFor(wrapper);

    expect(wrapper.find(ProjectWidget)).toHaveLength(
      projectsMock.filter(p =>
        p.tags.includes(addFilterAction.payload.filter.value as string)
      ).length
    );
  });
});
