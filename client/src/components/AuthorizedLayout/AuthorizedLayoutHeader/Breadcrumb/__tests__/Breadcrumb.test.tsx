import Preloader from 'components/shared/Preloader/Preloader';
import ModelRecord from 'models/ModelRecord';
import { Project } from 'models/Project';
import routes from 'routes';
import { expRunsMocks } from 'services/mocks/expRunsMock';
import { projectsMock } from 'services/mocks/projectsMock';
import { makeRouterMockProps } from 'utils/tests/mocks/routeComponentProps';
import { makeShallowRenderer } from 'utils/tests/react/helpers';

import { Breadcrumb, IBreadcrumbProps } from '../Breadcrumb';
import styles from '../Breadcrumb.module.css';

const makeShallowComponent = (
  props: Partial<IBreadcrumbProps> = {},
  pathname?: string
) => {
  const routerMockProps = makeRouterMockProps(
    {},
    {},
    {
      history: {
        location: {
          pathname: pathname || routes.mainPage.getRedirectPath({}),
        },
      },
    }
  );
  const defaultProps: IBreadcrumbProps = {
    ...routerMockProps,
    experimentRuns: null,
    modelRecord: null,
    projects: null,
  };
  return makeShallowRenderer<IBreadcrumbProps>(Breadcrumb, defaultProps)(props);
};

const mockProject: Project = {
  id: '123',
  ...projectsMock[0],
} as any;
const mockModelRecord: ModelRecord = {
  id: '123',
  ...expRunsMocks[0],
} as any;

describe('(components/Breadcrumb)', () => {
  it('should render preloader when data for breadcrumbs is not loaded', () => {
    const component = makeShallowComponent(
      {},
      routes.experimentRuns.getRedirectPath({ projectId: mockProject.id })
    );

    expect(component.find(Preloader).length === 1).toBeTruthy();
    expect(component.find(`.${styles.root}`).children.length).toBe(1);
  });

  it('should render "projects" breadcrumb on projects page', () => {
    const component = makeShallowComponent(
      {},
      routes.mainPage.getRedirectPath({})
    );

    expect(component).toMatchSnapshot();
  });

  it('should render "projects > ${project name}" breadcrumbs on experiment runs page', () => {
    const component = makeShallowComponent(
      {
        projects: [mockProject],
      },
      routes.experimentRuns.getRedirectPath({ projectId: mockProject.id })
    );

    expect(component).toMatchSnapshot();
  });

  it('should render "projects > ${project name}" breadcrumbs on charts page', () => {
    const component = makeShallowComponent(
      {
        projects: [mockProject],
      },
      routes.charts.getRedirectPath({ projectId: mockProject.id })
    );

    expect(component).toMatchSnapshot();
  });

  it('should render "projects > ${project name} > ${model record name}" breadcrumbs on charts page', () => {
    const component = makeShallowComponent(
      {
        projects: [mockProject],
        modelRecord: mockModelRecord,
      },
      routes.modelRecord.getRedirectPath({
        projectId: mockProject.id,
        modelRecordId: mockModelRecord.id,
      })
    );

    expect(component).toMatchSnapshot();
  });
});
