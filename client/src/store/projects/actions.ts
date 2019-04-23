import { action } from 'typesafe-actions';

import { IFilterData } from 'models/Filters';
import { Project } from 'models/Project';
import { ActionResult } from 'store/store';

import {
  ILoadProjectOwnerActions,
  ILoadProjectsActions,
  IUpdateProjectByIdAction,
  loadProjectOwnerActionTypes,
  loadProjectsActionTypes,
  updateProjectByIdActionTypes,
} from './types';

export const fetchProjects = (
  filters?: IFilterData[]
): ActionResult<void, ILoadProjectsActions> => async (
  dispatch,
  _,
  { ServiceFactory }
) => {
  dispatch(action(loadProjectsActionTypes.REQUEST));

  await ServiceFactory.getProjectsService()
    .getProjects(filters)
    .then(res => {
      dispatch(action(loadProjectsActionTypes.SUCCESS, res.data));
    })
    .catch(err => {
      dispatch(action(loadProjectsActionTypes.FAILURE, err as string));
    });
};

export const fetchProjectOwner = (
  project: Project
): ActionResult<void, ILoadProjectOwnerActions> => async (
  dispatch,
  _,
  { ServiceFactory }
) => {
  dispatch(action(loadProjectOwnerActionTypes.REQUEST, project.id));

  await ServiceFactory.getProjectsService()
    .loadProjectOwner(project.authorId)
    .then(res => {
      dispatch(
        action(loadProjectOwnerActionTypes.SUCCESS, {
          projectId: project.id,
          user: res.data,
        })
      );
    })
    .catch(err => {
      dispatch(
        action(loadProjectOwnerActionTypes.FAILURE, {
          projectId: project.id,
          error: err,
        })
      );
    });
};

export const updateProjectById = (
  project: Project
): IUpdateProjectByIdAction => ({
  type: updateProjectByIdActionTypes.UPDATE_PROJECT,
  payload: project,
});
