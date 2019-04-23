import { bind } from 'decko';
import * as React from 'react';
import { connect } from 'react-redux';

import User from 'models/User';
import { IApplicationState, IConnectedReduxProps } from 'store/store';
import { authenticateUser } from 'store/user';

import logo from './images/logo.svg';
import styles from './Login.module.css';

type AllProps = IConnectedReduxProps;

class Login extends React.Component<AllProps> {
  public render() {
    return (
      <div className={styles.content}>
        <div className={styles.logo}>
          <img src={logo} height={61} width={254} />
        </div>
        <div className={styles.login_slogan}>
          Models are the new code. Let’s show them some{' '}
          <i className="fa fa-heart" style={{ opacity: 0.5 }} />
        </div>
        <div className={styles.form_login}>
          <button
            className={styles.create_button}
            onClick={this.authenticateViaGithub}
          >
            <i
              className={`fa fa-github fa-fw ${styles.github_icon}`}
              style={{ fontSize: '30px', verticalAlign: 'middle' }}
            />
            <span>Login with Github</span>
          </button>
        </div>
      </div>
    );
  }

  @bind
  private authenticateViaGithub(
    event: React.SyntheticEvent<HTMLButtonElement>
  ) {
    this.props.dispatch(authenticateUser());
  }
}

export default connect(null)(Login);
