import { ShallowWrapper } from 'enzyme';

import ModelRecord from 'models/ModelRecord';
import routes from 'routes';
import { expRunsMocks } from 'services/mocks/expRunsMock';
import { makeRouterMockProps } from 'utils/tests/mocks/routeComponentProps';
import { makeShallowRenderer } from 'utils/tests/react/helpers';

import { IModelRecordProps, ModelRecordView } from '../ModelRecord';
import styles from '../ModelRecord.module.css';

const mockModelRecord: ModelRecord = {
  id: '123',
  ...expRunsMocks[0],
} as any;

const findRecord = (
  recordClass: string,
  component: ShallowWrapper<any, any, any>
) => {
  return component.findWhere(
    n => n.props().additionalContainerClassName === recordClass
  );
};

const makeShallowComponent = (props: Partial<IModelRecordProps> = {}) => {
  const routerMockProps = makeRouterMockProps(
    { projectId: '123', modelRecordId: mockModelRecord.id },
    {},
    {
      history: {
        location: {
          pathname: routes.modelRecord.getRedirectPath({
            projectId: '123',
            modelRecordId: mockModelRecord.id,
          }),
        },
      },
    }
  );

  const actionSpies = {
    fetchModelRecord: jest.fn(),
    checkDeployStatusUntilDeployed: jest.fn(),
    getDataStatistics: jest.fn(),
    getServiceStatistics: jest.fn(),
  };
  const defaultProps: IModelRecordProps = {
    ...routerMockProps,
    ...actionSpies,
    data: mockModelRecord,
    loadingModelRecord: false,
  };
  return {
    actionSpies,
    component: makeShallowRenderer<IModelRecordProps>(
      ModelRecordView,
      defaultProps
    )(props),
  };
};

describe('(components/ModelRecord)', () => {
  describe('on mount', () => {
    it('should load model record when there is not model record', () => {
      const { actionSpies } = makeShallowComponent({ data: null });

      expect(actionSpies.fetchModelRecord).toHaveBeenCalled();
    });
  });

  it('should render summary', () => {
    const { component } = makeShallowComponent({ data: mockModelRecord });

    expect(component.find(`.${styles.record_summary}`)).toMatchSnapshot();
  });

  [
    { name: 'hyperparameters', className: styles.record_hyperparameters },
    { name: 'metrics', className: styles.record_metrics },
    { name: 'artifacts', className: styles.record_artifacts },
    { name: 'datasets', className: styles.record_datasets },
  ].forEach(({ name, className }) => {
    it(`should render ${name} record`, () => {
      const { component } = makeShallowComponent({ data: mockModelRecord });

      expect(findRecord(className, component)).toMatchSnapshot();
    });
  });
});
