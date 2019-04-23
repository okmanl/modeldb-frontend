import { ShallowWrapper } from 'enzyme';

import { IDeployedStatusInfo, IDeployStatusInfo } from 'models/Deploy';
import ModelRecord from 'models/ModelRecord';
import routes from 'routes';
import {
  mockDataStatistics,
  mockServiceStatistics,
} from 'services/mocks/deployMock';
import { expRunsMocks } from 'services/mocks/expRunsMock';
import { makeRouterMockProps } from 'utils/tests/mocks/routeComponentProps';
import { makeShallowRenderer } from 'utils/tests/react/helpers';

import { IModelRecordProps, ModelRecordView } from '../ModelRecord';
import styles from '../ModelRecord.module.css';

const mockModelRecord: ModelRecord = {
  id: '123',
  ...expRunsMocks[0],
} as any;

const deployedStatusInfo: IDeployedStatusInfo = {
  status: 'deployed',
  data: {} as any,
};

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
    dataStatistics: null,
    serviceStatistics: null,
    deployState: { status: 'unknown' },
    loadingDataStatistics: false,
    loadingModelRecord: false,
    loadingServiceStatistics: false,
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

    it('should start to check deploy status until deployed when model is not deployed', () => {
      const { actionSpies: actionSpies1 } = makeShallowComponent({
        deployState: { status: 'unknown' },
      });
      expect(actionSpies1.checkDeployStatusUntilDeployed).toHaveBeenCalled();

      const { actionSpies: actionSpies2 } = makeShallowComponent({
        deployState: deployedStatusInfo,
      });
      expect(
        actionSpies2.checkDeployStatusUntilDeployed
      ).not.toHaveBeenCalled();
    });

    it('should load deploy info when model is deployed', () => {
      const { actionSpies } = makeShallowComponent({
        deployState: deployedStatusInfo,
      });

      expect(actionSpies.getDataStatistics).toHaveBeenCalled();
      expect(actionSpies.getServiceStatistics).toHaveBeenCalled();
    });
  });

  it('should start to check deploy status until deployed when model is loaded', () => {
    const { actionSpies, component } = makeShallowComponent({ data: null });

    component.setProps({ data: mockModelRecord });

    expect(actionSpies.checkDeployStatusUntilDeployed).toHaveBeenCalled();
  });

  it('should load deploy info when model is loaded, deploy status is deployed and deploy info is not loaded early', () => {
    const {
      actionSpies: actionSpies1,
      component: component1,
    } = makeShallowComponent({ data: null });

    component1.setProps({
      data: mockModelRecord,
      deployState: deployedStatusInfo,
    });

    expect(actionSpies1.getDataStatistics).toHaveBeenCalled();
    expect(actionSpies1.getServiceStatistics).toHaveBeenCalled();

    const {
      actionSpies: actionSpies2,
      component: component2,
    } = makeShallowComponent({
      data: mockModelRecord,
      deployState: { status: 'unknown' },
    });

    component2.setProps({ deployState: { status: 'deploying' } });

    expect(actionSpies2.getDataStatistics).not.toHaveBeenCalled();
    expect(actionSpies2.getServiceStatistics).not.toHaveBeenCalled();
  });

  it('should render summary', () => {
    const { component } = makeShallowComponent({ data: mockModelRecord });

    expect(component.find(`.${styles.record_summary}`)).toMatchSnapshot();
  });

  it('should render message that there are not deploy info when deploy is not deployed', () => {
    const deployStates: Array<IDeployStatusInfo | undefined> = [
      { status: 'deploying' },
      { status: 'notDeployed' },
      { status: 'unknown' },
      undefined,
    ];
    deployStates.forEach(deployState => {
      const { component } = makeShallowComponent({
        data: mockModelRecord,
        deployState,
      });
      expect(
        component.findWhere(
          wrapper => wrapper.text() === 'No monitoring information'
        )
      ).toBeTruthy();
    });
  });

  [
    { name: 'hyperparameters', className: styles.record_hyperparameters },
    { name: 'metrics', className: styles.record_metrics },
    { name: 'artifacts', className: styles.record_artifacts },
    { name: 'datasets', className: styles.record_datasets },
    { name: 'deploy info', className: styles.record_deployInfo },
  ].forEach(({ name, className }) => {
    it(`should render ${name} record`, () => {
      const { component } = makeShallowComponent({ data: mockModelRecord });

      expect(findRecord(className, component)).toMatchSnapshot();
    });
  });

  describe('when deploy status is deployed', () => {
    it('should render message that there is not deploy info in the time window when serviceStatics is undefined', () => {
      const { component } = makeShallowComponent({
        data: mockModelRecord,
        deployState: deployedStatusInfo,
        serviceStatistics: undefined,
      });

      expect(
        component.find(`.${styles.notDeployedMsg_noInfoInTheTimeWindow}`)
      ).toMatchSnapshot();
    });

    it('should render message that there is not deploy info in the time window when serviceStatics.time is undefined', () => {
      const { component } = makeShallowComponent({
        data: mockModelRecord,
        deployState: deployedStatusInfo,
        serviceStatistics: {
          time: undefined,
        } as any,
      });

      expect(
        component.find(`.${styles.notDeployedMsg_noInfoInTheTimeWindow}`)
      ).toMatchSnapshot();
    });

    it('should render service statistics information when service statistics is loaded', () => {
      const { component } = makeShallowComponent({
        data: mockModelRecord,
        deployState: deployedStatusInfo,
        serviceStatistics: mockServiceStatistics,
      });

      expect(
        findRecord(styles.record_serviceBehaviour, component)
      ).toMatchSnapshot();
    });

    it('should not render service statistics information when service statistics is not loaded', () => {
      const { component } = makeShallowComponent({
        data: mockModelRecord,
        deployState: deployedStatusInfo,
        serviceStatistics: undefined,
        loadingServiceStatistics: true,
      });

      expect(
        findRecord(styles.record_serviceBehaviour, component)
      ).toBeTruthy();
    });

    it('should render data statistics information when data statistics is loaded', () => {
      const { component } = makeShallowComponent({
        data: mockModelRecord,
        deployState: deployedStatusInfo,
        dataStatistics: mockDataStatistics,
      });

      expect(
        findRecord(styles.record_dataBehavior, component)
      ).toMatchSnapshot();
    });

    it('should not render data statistics information when data statistics is not loaded', () => {
      const { component } = makeShallowComponent({
        data: mockModelRecord,
        deployState: deployedStatusInfo,
        dataStatistics: undefined,
        loadingDataStatistics: true,
      });

      expect(
        findRecord(styles.record_dataBehavior, component).length === 0
      ).toBeTruthy();
    });
  });
});
