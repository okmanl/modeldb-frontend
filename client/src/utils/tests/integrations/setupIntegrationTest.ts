import { createBrowserHistory } from 'history';
import { Store } from 'redux';

import configureStore from 'store/configureStore/configureStore.development';
import { createRootReducer, IApplicationState } from 'store/store';

export interface ISetupIntegrationTestSettings {
  initialState?: IApplicationState;
  pathname?: string;
}

const setupIntegrationTest = (settings?: ISetupIntegrationTestSettings) => {
  const dispatchSpy = jest.fn(() => ({}));
  const dispatchSpyMiddleware = (store: any) => (next: any) => (
    action: any
  ) => {
    (dispatchSpy as any)(action);
    return next(action);
  };
  const reducerSpy = (state: any, action: any) => (dispatchSpy as any)(action);

  const history = createBrowserHistory();
  if (settings && settings.pathname) {
    history.push(settings.pathname);
  }
  const emptyStore = (configureStore as any)(history, undefined, [
    dispatchSpyMiddleware,
  ]);
  const store: Store = {
    ...emptyStore,
    reducerSpy,
  };

  return { store, dispatchSpy, history };
};

export default setupIntegrationTest;
