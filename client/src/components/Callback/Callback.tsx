import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';

import GlobalPreloader from 'components/shared/GlobalPreloader/GlobalPreloader';
import { IConnectedReduxProps } from 'store/store';

type AllProps = IConnectedReduxProps & RouteComponentProps;

class Callback extends React.Component<AllProps> {
  public render() {
    return <GlobalPreloader />;
  }
}

const mapStateToProps = () => ({});

export default connect(mapStateToProps)(Callback);
