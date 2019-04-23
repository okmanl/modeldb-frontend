import AnonymousLayout from 'components/AnonymousLayout/AnonymousLayout';
import AuthorizedLayout from 'components/AuthorizedLayout/AuthorizedLayout';
import GlobalPreloader from 'components/shared/GlobalPreloader/GlobalPreloader';
import { makeShallowRenderer } from 'utils/tests/react/helpers';

import { App, IAppProps } from '../App';

const makeShallowComponent = (props: Partial<IAppProps> = {}) => {
  const actionSpies: Partial<IAppProps> = {
    checkUserAuthentication: jest.fn(),
  };
  const defaultProps: IAppProps = {
    ...(actionSpies as any),
    isCheckingUserAuthentication: false,
    isUserAuthenticated: false,
  };
  const component = makeShallowRenderer(App, defaultProps)(props);
  return { actionSpies, component };
};

describe('(App) App', () => {
  it('should check user auth on mount', () => {
    const { actionSpies } = makeShallowComponent();

    expect(actionSpies.checkUserAuthentication).toHaveBeenCalled();
  });

  it('should return preloader while checking user auth', () => {
    const { component } = makeShallowComponent({
      isCheckingUserAuthentication: true,
    });

    expect(component.find(GlobalPreloader)).toHaveLength(1);
  });

  it('should render page with authorized layout when user is authorized', () => {
    const { component } = makeShallowComponent({
      isUserAuthenticated: true,
      isCheckingUserAuthentication: false,
    });

    expect(component.find(AuthorizedLayout)).toHaveLength(1);
  });

  it('should render page with unauthorized layout when user is unauthorized', () => {
    const { component } = makeShallowComponent({
      isUserAuthenticated: false,
      isCheckingUserAuthentication: false,
    });

    expect(component.find(AnonymousLayout)).toHaveLength(1);
  });
});
