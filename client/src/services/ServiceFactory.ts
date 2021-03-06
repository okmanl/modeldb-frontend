import { IAuthenticationService } from './auth/IAuthenticationService';
import MockAuthenticationService from './auth/MockAuthenticationService';
import ExperimentRunsDataService from './ExperimentRunsDataService';
import MockSFService from './filter/MockSFService';
import { IExperimentRunsDataService } from './IExperimentRunsDataService';
import { IProjectDataService } from './IProjectDataService';
import ISearchAndFilterService from './ISearchAndFilterService';
import { MockExperimentRunsDataService } from './mocks/MockExperimentRunsDataService';
import { MockProjectDataService } from './mocks/MockProjectDataService';
import { ProjectDataService } from './ProjectDataService';

export default class ServiceFactory {
  public static getProjectsService(): IProjectDataService {
    if (JSON.parse(process.env.REACT_APP_USE_API_DATA)) {
      return new ProjectDataService();
    }
    return new MockProjectDataService();
  }

  public static getExperimentRunsService(): IExperimentRunsDataService {
    if (JSON.parse(process.env.REACT_APP_USE_API_DATA)) {
      return new ExperimentRunsDataService();
    }
    return new MockExperimentRunsDataService();
  }

  public static getAuthenticationService(): IAuthenticationService {
    return new MockAuthenticationService();
  }

  public static getSearchAndFiltersService(): ISearchAndFilterService | null {
    return new MockSFService();
  }
}
