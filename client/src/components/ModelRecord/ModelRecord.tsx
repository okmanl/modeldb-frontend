import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';

import Preloader from 'components/shared/Preloader/Preloader';
import tagStyles from 'components/shared/TagBlock/TagBlock.module.css';
import { IArtifact } from 'models/Artifact';
import { IHyperparameter } from 'models/HyperParameters';
import { IMetric } from 'models/Metrics';
import ModelRecord from 'models/ModelRecord';
import routes, { GetRouteParams } from 'routes';
import {
  fetchModelRecord,
  selectIsLoadingModelRecord,
  selectModelRecord,
} from 'store/model-record';
import { IApplicationState } from 'store/store';

import { bindActionCreators, Dispatch } from 'redux';
import styles from './ModelRecord.module.css';
import ShowContentBasedOnUrl from './ShowContentBasedOnUrl/ShowContentBasedOnUrl';

type IUrlProps = GetRouteParams<typeof routes.modelRecord>;

interface IPropsFromState {
  data: ModelRecord | null;
  loadingModelRecord: boolean;
}

interface IActionProps {
  fetchModelRecord: typeof fetchModelRecord;
}

type AllProps = RouteComponentProps<IUrlProps> & IPropsFromState & IActionProps;

class ModelRecordView extends React.PureComponent<AllProps> {
  public componentDidMount() {
    this.props.fetchModelRecord(this.props.match.params.modelRecordId);
  }

  public render() {
    const { data, loadingModelRecord: loading } = this.props;

    return loading ? (
      <div className={styles.loader}>
        <Preloader variant="dots" />
      </div>
    ) : data ? (
      <div className={styles.model_layout}>
        <div className={styles.record_summary}>
          <div className={styles.record_summary_main}>
            <div className={styles.record_label}>Name</div>
            <div className={styles.record_name}>{data.name}</div>
            <br />
            {data.tags && data.tags.length > 0 && (
              <div>
                <div className={styles.record_label}>Tags</div>
                <div>
                  {data.tags.map((value: string, key: number) => {
                    return (
                      <div className={styles.tags} key={key}>
                        <span className={tagStyles.staticTag}>{value}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
          <div className={styles.record_summary_meta}>
            <this.RenderModelMeta label="Id" value={data.id} />
            <this.RenderModelMeta
              label="Experiment"
              value={data.experimentId}
            />
            <this.RenderModelMeta label="Project" value={data.projectId} />
          </div>
        </div>
        {data.codeVersion! && (
          <this.Record
            header="Code version"
            additionalContainerClassName={styles.record_codeVersion}
          >
            {data.codeVersion}
          </this.Record>
        )}
        {data.hyperparameters && data.hyperparameters.length > 0 && (
          <this.Record
            header="Hyperparameters"
            additionalContainerClassName={styles.record_hyperparameters}
          >
            {data.hyperparameters.map((value: IHyperparameter, key: number) => {
              return (
                <div key={key}>
                  <this.RenderModelMeta label={value.key} value={value.value} />
                </div>
              );
            })}
          </this.Record>
        )}
        {data.metrics && data.metrics.length > 0 && (
          <this.Record
            header="Metrics"
            additionalContainerClassName={styles.record_metrics}
          >
            {data.metrics.map((value: IMetric, key: number) => {
              return (
                <div key={key}>
                  <this.RenderModelMeta label={value.key} value={value.value} />
                </div>
              );
            })}
          </this.Record>
        )}
        {data.artifacts && data.artifacts.length > 0 && (
          <this.Record
            header="Artifacts"
            additionalContainerClassName={styles.record_artifacts}
          >
            {data.artifacts.map((value: IArtifact, key: number) => {
              return (
                <div key={key}>
                  <this.RenderModelMeta
                    label={value.key}
                    children={<ShowContentBasedOnUrl path={value.path} />}
                  />
                </div>
              );
            })}
          </this.Record>
        )}
        {data.datasets && data.datasets.length > 0 && (
          <this.Record
            header="Datasets"
            additionalContainerClassName={styles.record_datasets}
          >
            {data.datasets.map((value: IArtifact, key: number) => {
              return (
                <div key={key}>
                  <this.RenderModelMeta
                    label={value.key}
                    children={<ShowContentBasedOnUrl path={value.path} />}
                  />
                </div>
              );
            })}
          </this.Record>
        )}
        )}
      </div>
    ) : (
      ''
    );
  }

  // tslint:disable-next-line:function-name
  private Record(props: {
    header: string;
    children?: React.ReactNode;
    additionalValueClassName?: string;
    additionalContainerClassName?: string;
    additionalHeaderClassName?: string;
  }) {
    const {
      header,
      children,
      additionalValueClassName,
      additionalContainerClassName,
      additionalHeaderClassName,
    } = props;
    return (
      <div className={`${styles.record} ${additionalContainerClassName}`}>
        <div className={`${styles.record_header} ${additionalHeaderClassName}`}>
          {header}
        </div>
        <div className={`${styles.record_value} ${additionalValueClassName}`}>
          {children}
        </div>
      </div>
    );
  }
  // tslint:disable-next-line:function-name
  private RenderModelMeta(props: {
    label: string;
    value?: string | number;
    children?: React.ReactNode;
  }) {
    const { label, value, children } = props;
    return (
      <div className={styles.meta_block}>
        <div className={styles.meta_label}>{`${label} :`}</div>
        {value ? (
          <div className={styles.meta_value}>{value}</div>
        ) : (
          <div>{children}</div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state: IApplicationState): IPropsFromState => {
  const modelRecord = selectModelRecord(state);
  return {
    data: modelRecord,
    loadingModelRecord: selectIsLoadingModelRecord(state),
  };
};

const mapDispatchToProps = (dispatch: Dispatch): IActionProps => {
  return bindActionCreators(
    {
      fetchModelRecord,
    },
    dispatch
  );
};

export type IModelRecordProps = AllProps;
export { ModelRecordView };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModelRecordView);
