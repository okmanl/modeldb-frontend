import * as R from 'ramda';
import { AnyAction } from 'redux';

import { ICommunicationActionTypes } from 'utils/redux/communication';

const checkSuccessfullCommunication = (
  actionTypes: ICommunicationActionTypes<any, any, any>,
  dispatchSpy: jest.Mock
) => {
  const actions: AnyAction[] = R.flatten(dispatchSpy.mock.calls) as any;
  const res = [actionTypes.REQUEST, actionTypes.SUCCESS].every(actionType =>
    actions.some(a => a.type === actionType)
  );
  expect(res).toBeTruthy();
};

export default checkSuccessfullCommunication;
