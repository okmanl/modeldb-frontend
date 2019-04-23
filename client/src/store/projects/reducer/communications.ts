import { combineReducers, Reducer } from 'redux';

import { makeCommunicationReducerFromEnum } from 'utils/redux/communication';

import {
  ILoadProjectOwnerActions,
  IProjectsState,
  loadProjectOwnerActionTypes,
  loadProjectsActionTypes,
} from '../types';

const loadingProjectOwnerReducer: Reducer<
  IProjectsState['communications']['loadingProjectOwner'],
  ILoadProjectOwnerActions
> = (state = {}, action) => {
  switch (action.type) {
    case loadProjectOwnerActionTypes.REQUEST: {
      return {
        ...state,
        [action.payload]: {
          isSuccess: false,
          isRequesting: true,
          error: '',
        },
      };
    }
    case loadProjectOwnerActionTypes.SUCCESS: {
      return {
        ...state,
        [action.payload.projectId]: {
          isSuccess: true,
          isRequesting: false,
          error: '',
        },
      };
    }
    case loadProjectOwnerActionTypes.FAILURE: {
      return {
        ...state,
        [action.payload.projectId]: {
          error: action.payload.error,
          isSuccess: false,
          isRequesting: false,
        },
      };
    }
    default:
      return state;
  }
};

export default combineReducers<IProjectsState['communications']>({
  loadingProjectOwner: loadingProjectOwnerReducer,
  loadingProjects: makeCommunicationReducerFromEnum(loadProjectsActionTypes),
});
