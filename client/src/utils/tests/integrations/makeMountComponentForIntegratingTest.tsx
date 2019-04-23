import { ConnectedRouter } from 'connected-react-router';
import { mount } from 'enzyme';
import * as React from 'react';
import { Provider } from 'react-redux';

import setupIntegrationTest, {
  ISetupIntegrationTestSettings,
} from './setupIntegrationTest';

const makeMountComponentForIntegratingTest = (
  Component: any,
  settings?: ISetupIntegrationTestSettings
) => () => {
  const { store, dispatchSpy, history } = setupIntegrationTest(settings);
  const wrapper = mount(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Component />
      </ConnectedRouter>
    </Provider>
  );
  return { wrapper, store, dispatchSpy };
};

export default makeMountComponentForIntegratingTest;
