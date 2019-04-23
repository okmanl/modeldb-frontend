import * as R from 'ramda';
import { AnyAction, Reducer } from 'redux';

import { IFilterData } from 'models/Filters';
import composeReducers from 'utils/redux/composeReducers';
import {
  changeContextActionTypes,
  FeatureAction,
  IFilterContextData,
  IFilterState,
  IManageFiltersAction,
  manageFiltersTypes,
  registerContextActionTypes,
  suggestFiltersActionTypes,
} from '../types';

const initial: IFilterState['data'] = {
  contexts: {},
};

const adjustContextFilters = (
  f: (v: IFilterData[]) => IFilterData[],
  contextName: string,
  state: IFilterState['data']
): IFilterState['data'] => {
  return {
    ...state,
    contexts: {
      ...state.contexts,
      [contextName]: {
        ...state.contexts[contextName],
        appliedFilters: f(state.contexts[contextName].appliedFilters),
      },
    },
  };
};

function checkManageFiltersAction(
  action: AnyAction
): action is IManageFiltersAction {
  return Object.values(manageFiltersTypes).includes(action.type);
}

const manageFiltersReducer: Reducer<IFilterState['data'], FeatureAction> = (
  state = initial,
  action
) => {
  if (checkManageFiltersAction(action)) {
    const ctx = action.payload.ctx;
    if (ctx === undefined || state.contexts[ctx] === undefined) {
      throw new Error('Current filters context is undefined');
    }

    switch (action.type) {
      case manageFiltersTypes.ADD_FILTER: {
        return adjustContextFilters(
          appliedFilters => appliedFilters.concat(action.payload.filter),
          action.payload.ctx,
          state
        );
      }
      case manageFiltersTypes.REMOVE_FILTER: {
        return adjustContextFilters(
          appliedFilters =>
            appliedFilters.filter(x => x !== action.payload.filter),
          action.payload.ctx,
          state
        );
      }
      case manageFiltersTypes.EDIT_FILTER: {
        if (action.payload.index !== undefined) {
          return adjustContextFilters(
            appliedFilters =>
              R.update(
                action.payload.index!,
                action.payload.filter,
                appliedFilters
              ),
            action.payload.ctx,
            state
          );
        }
      }
      default: {
        return state;
      }
    }
  }
  return state;
};

const commonReducer: Reducer<IFilterState['data'], FeatureAction> = (
  state = initial,
  action
) => {
  switch (action.type) {
    case registerContextActionTypes.SUCCESS: {
      const data: IFilterContextData[] = action.payload;

      const newMap: { [index: string]: IFilterContextData } = {};
      for (const ctxData of data) {
        newMap[ctxData.name] = ctxData;
      }

      return { ...state, contexts: newMap };
    }
    case changeContextActionTypes.CHANGE_CONTEXT: {
      return { ...state, context: action.payload };
    }
    case suggestFiltersActionTypes.SUCCESS: {
      return { ...state, foundFilters: action.payload };
    }
    default:
      return state;
  }
};

export { initial };
export default composeReducers([commonReducer, manageFiltersReducer]);
