import { Reducer } from 'redux';

import {
  FeatureAction,
  IProjectsState,
  loadProjectsActionTypes,
  updateProjectActionTypes,
  updateProjectByIdActionTypes,
  loadProjectOwnerActionTypes,
} from '../types';
import cloneClassInstance from 'utils/cloneClassInstance';

const initial: IProjectsState['data'] = {
  projects: null,
};

const dataReducer: Reducer<IProjectsState['data'], FeatureAction> = (
  state = initial,
  action
) => {
  switch (action.type) {
    case loadProjectsActionTypes.SUCCESS: {
      return { ...state, projects: action.payload };
    }
    case updateProjectActionTypes.UPDATE_PROJECT_STATE: {
      return { ...state, projects: [...action.payload] };
    }
    case updateProjectByIdActionTypes.UPDATE_PROJECT: {
      return {
        ...state,
        projects: (state.projects || []).map(p =>
          p.id === action.payload.id ? action.payload : p
        ),
      };
    }
    case loadProjectOwnerActionTypes.SUCCESS: {
      const updatedProject = state.projects!.map(project => {
        if (project.id === action.payload.projectId) {
          const updatedProject = cloneClassInstance(project);
          updatedProject.Author = action.payload.user;
          return updatedProject;
        } else {
          return project;
        }
      });
      return {
        ...state,
        projects: updatedProject,
      };
    }
    default:
      return state;
  }
};

export default dataReducer;
