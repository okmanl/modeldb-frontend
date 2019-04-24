import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';
import { bindActionCreators, Dispatch } from 'redux';

import AnonymousLayout from 'components/AnonymousLayout/AnonymousLayout';
import AuthorizedLayout from 'components/AuthorizedLayout/AuthorizedLayout';
import GlobalPreloader from 'components/shared/GlobalPreloader/GlobalPreloader';
import { IApplicationState } from 'store/store';
import {
  checkUserAuthentication,
  selectIsCheckingUserAuthentication,
  selectIsUserAuthenticated,
} from 'store/user';

interface IPropsFromState {
  isUserAuthenticated: boolean;
  isCheckingUserAuthentication: boolean;
}

interface IActionProps {
  checkUserAuthentication: typeof checkUserAuthentication;
}

// Create an intersection type of the component props and our Redux props.
type AllProps = IPropsFromState & RouteComponentProps & IActionProps;

class App extends React.PureComponent<AllProps> {
  public componentDidMount() {
    // this.props.checkUserAuthentication();
  }

  public render() {
    const { isCheckingUserAuthentication, isUserAuthenticated } = this.props;
    if (isCheckingUserAuthentication) {
      return <GlobalPreloader />;
    }
    return <AuthorizedLayout />;
  }
}

const mapStateToProps = (state: IApplicationState): IPropsFromState => ({
  isUserAuthenticated: selectIsUserAuthenticated(state),
  isCheckingUserAuthentication: selectIsCheckingUserAuthentication(state),
});

const mapDispatchToProps = (dispatch: Dispatch): IActionProps =>
  bindActionCreators({ checkUserAuthentication }, dispatch);

export type IAppProps = AllProps;
export { App };
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
