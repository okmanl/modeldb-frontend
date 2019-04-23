import { IAuthenticationService } from './auth/IAuthenticationService';
import MockAuthenticationService from './auth/MockAuthenticationService';
import { ISearchAndFilterService } from './filter/ISearchAndFilterService';
import MockSFService from './filter/MockSFService';
import ExperimentRunsDataService from './experimentRuns/ExperimentRunsDataService';
import { IExperimentRunsDataService } from './experimentRuns/IExperimentRunsDataService';
import MockExperimentRunsDataService from './experimentRuns/MockExperimentRunsDataService';
import { IProjectDataService } from './projects/IProjectDataService';
import MockProjectDataService from './projects/MockProjectDataService';
import ProjectDataService from './projects/ProjectDataService';

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
