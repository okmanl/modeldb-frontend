import { Project } from 'models/Project';
import User from 'models/User';
import {
  ICommunication,
  MakeCommunicationActions,
  makeCommunicationActionTypes,
} from 'utils/redux/communication';

export interface IProjectsState {
  data: {
    projects: Project[] | null;
  };
  communications: {
    loadingProjects: ICommunication;
    loadingProjectOwner: Record<string, ICommunication>;
  };
}

export const loadProjectsActionTypes = makeCommunicationActionTypes({
  REQUEST: '@@projects/LOAD_PROJECTS_REQUEST',
  SUCCESS: '@@projects/LOAD_PROJECTS_SUCСESS',
  FAILURE: '@@projects/LOAD_PROJECTS_FAILURE',
});
export type ILoadProjectsActions = MakeCommunicationActions<
  typeof loadProjectsActionTypes,
  { success: Project[] }
>;

export const loadProjectOwnerActionTypes = makeCommunicationActionTypes({
  REQUEST: '@@projects/LOAD_PROJECT_OWNER_REQUEST',
  SUCCESS: '@@projects/LOAD_PROJECT_OWNER_SUCСESS',
  FAILURE: '@@projects/LOAD_PROJECT_OWNER_FAILURE',
});
type ProjectId = string;
export type ILoadProjectOwnerActions = MakeCommunicationActions<
  typeof loadProjectOwnerActionTypes,
  {
    request: ProjectId;
    success: { projectId: string; user: User };
    failure: { projectId: string; error: string };
  }
>;

export enum updateProjectActionTypes {
  UPDATE_PROJECT_STATE = '@@projects/UPDATE_PROJECT_STATE',
}
export interface IUpdateProjectAction {
  type: updateProjectActionTypes.UPDATE_PROJECT_STATE;
  payload: Project[];
}

export enum updateProjectByIdActionTypes {
  UPDATE_PROJECT = '@@projects/UPDATE_PROJECT',
}
export interface IUpdateProjectByIdAction {
  type: updateProjectByIdActionTypes.UPDATE_PROJECT;
  payload: Project;
}

export type FeatureAction =
  | ILoadProjectsActions
  | IUpdateProjectAction
  | IUpdateProjectByIdAction
  | ILoadProjectOwnerActions;
