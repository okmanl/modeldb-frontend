import { action } from 'typesafe-actions';

import { IFilterData } from 'models/Filters';
import { Project } from 'models/Project';
import { ActionResult } from 'store/store';

import {
  ILoadProjectsActions,
  IUpdateProjectByIdAction,
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

export const updateProjectById = (
  project: Project
): IUpdateProjectByIdAction => ({
  type: updateProjectByIdActionTypes.UPDATE_PROJECT,
  payload: project,
});
