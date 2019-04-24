import axios from 'axios';
import { bind } from 'decko';

import { CurrentUser } from 'models/User';
import { convertServerCurrentUser } from 'services/converters/user';

import { IAuthenticationService } from './IAuthenticationService';

export default class Auth0AuthenticationService
  implements IAuthenticationService {
  @bind
  public login(): void {
    window.location.replace('/api/auth/login');
  }

  @bind
  public async loadUser(): Promise<CurrentUser> {
    const res = await axios.get<any>('/api/auth/getUser');
    return convertServerCurrentUser(res.data);
  }

  @bind
  public async logout() {
    try {
      await axios.get('auth/logout');
    } catch {}
  }
}
