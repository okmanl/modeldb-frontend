import { CurrentUser } from 'models/User';

import { IAuthenticationService } from './IAuthenticationService';

export default class MockAuthenticationService
  implements IAuthenticationService {
  public user: CurrentUser;

  constructor() {
    this.user = new CurrentUser({
      id: 'testid',
      email: process.env.REACT_APP_USER_EMAIL,
      name: process.env.REACT_APP_USERNAME,
      dateLastLoggedIn: new Date(),
      developerKey: '',
      picture: '',
    });
  }

  public async login(): Promise<CurrentUser> {
    return this.user!;
  }

  public logout(): void {
    window.location.replace('/');
  }

  public async loadUser(): Promise<CurrentUser> {
    return this.user!;
  }
}
