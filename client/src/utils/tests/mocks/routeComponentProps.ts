import * as R from 'ramda';
import { RouteComponentProps } from 'react-router';
import { DeepPartial } from 'redux';

interface IGenericParams {
  [key: string]: string;
}

export function makeRouterMockProps<
  P extends IGenericParams,
  R extends IGenericParams
>(
  params: P,
  _routeParams: R,
  defaultProps: DeepPartial<RouteComponentProps<P, R>> = {}
): RouteComponentProps<P, R> {
  const mockProps: RouteComponentProps<P, R> = R.mergeDeepRight(
    {
      location: {
        pathname: 'Pathname',
        search: 'Search',
        state: 'LocationState',
        key: 'LocationKey',
        hash: 'hash',
      },
      history: {
        listen: jest.fn(),
        location: {
          pathname: 'pathname',
          search: '',
          state: '',
          key: '',
          hash: '',
        },
      } as any,
      match: {
        params,
        isExact: false,
        url: '',
        path: '',
      },
      staticContext: {} as any,
    },
    defaultProps
  ) as any;
  return mockProps;
}
