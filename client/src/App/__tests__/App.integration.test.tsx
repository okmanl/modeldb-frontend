import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import AuthorizedLayout from 'components/AuthorizedLayout/AuthorizedLayout';
import Login from 'components/Login/Login';
import Projects from 'components/Projects/Projects';
import { convertServerCurrentUser } from 'services/converters/user';
import { mockServerUser } from 'services/mocks/user';
import {
  checkUserAuthenticationActionTypes,
  selectCurrentUser,
  selectIsCheckingUserAuthentication,
  selectIsUserAuthenticated,
} from 'store/user';
import checkSuccessfullCommunication from 'utils/tests/integrations/checkSuccessfullCommunication';
import { flushAllPromisesFor } from 'utils/tests/integrations/flushAllPromisesFor';
import makeMountComponentForIntegratingTest from 'utils/tests/integrations/makeMountComponentForIntegratingTest';

import App from '../App';

const mountApp = makeMountComponentForIntegratingTest(App);

describe('integration: (App) App', () => {
  const mock = new MockAdapter(axios);

  it('should render current page when user is authenticated', async () => {
    mock.onGet('/api/auth/getUser').reply(_ => [200, mockServerUser]);

    const { wrapper, store, dispatchSpy } = mountApp();
    await flushAllPromisesFor(wrapper);

    checkSuccessfullCommunication(
      checkUserAuthenticationActionTypes,
      dispatchSpy
    );

    const state = store.getState();
    expect(selectIsUserAuthenticated(state)).toBe(true);
    expect(selectIsCheckingUserAuthentication(state)).toBe(false);
    expect(selectCurrentUser(state)).toBeTruthy();

    expect(wrapper.find(AuthorizedLayout)).toHaveLength(1);
    expect(wrapper.find(Projects)).toHaveLength(1);

    wrapper.unmount();
  });

  // it('should render login page when user is not auth', async () => {
  //   mock.onGet('/api/auth/getUser').reply(_ => [401]);

  //   const { wrapper, store } = mountApp();
  //   await flushAllPromisesFor(wrapper);

  //   const state = store.getState();
  //   expect(selectIsUserAuthenticated(state)).toBe(false);
  //   expect(selectIsCheckingUserAuthentication(state)).toBe(false);
  //   expect(selectCurrentUser(state)).toBeFalsy();

  //   expect(wrapper.find(Login)).toHaveLength(1);

  //   wrapper.unmount();
  // });
});
