import cn from 'classnames';
import * as React from 'react';
import Avatar from 'react-avatar';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Preloader from 'components/shared/Preloader/Preloader';
import Tag from 'components/shared/TagBlock/TagProject';
import { Project } from 'models/Project';
import routes from 'routes';
import { fetchProjectOwner, selectIsLoadingProjectOwner } from 'store/projects';
import { IApplicationState, IConnectedReduxProps } from 'store/store';

import styles from './ProjectWidget.module.css';

interface ILocalProps {
  project: Project;
}

interface IPropsFromState {
  isLoadingOwner: boolean;
}

type AllProps = ILocalProps & IPropsFromState & IConnectedReduxProps;

class ProjectWidget extends React.Component<AllProps> {
  public componentDidMount() {
    this.props.dispatch(fetchProjectOwner(this.props.project));
  }

  public render() {
    const { project, isLoadingOwner } = this.props;

    return (
      <div>
        <Link
          className={cn(styles.project_link, {
            [styles.loading_owner]: isLoadingOwner,
          })}
          to={routes.experimentRuns.getRedirectPath({ projectId: project.id })}
        >
          <div className={styles.project_widget}>
            <div className={styles.title_block}>
              <div className={styles.title}>{project.name}</div>
              <div className={styles.description}>{project.description}</div>
            </div>
            <div className={styles.tags_block}>
              {this.props.project.tags &&
                this.props.project.tags.map((tag: string, i: number) => (
                  <Tag tag={tag} key={i} />
                ))}
            </div>
            <div className={styles.metrics_block} />
            <div className={styles.author_block}>
              {isLoadingOwner ? (
                <Preloader variant="dots" />
              ) : (
                <>
                  <div className={styles.author_name}>
                    <div>{project.Author.getNameOrEmail()}</div>
                    <div className={styles.author_status}>Owner</div>
                  </div>
                  <Avatar
                    name={project.Author.getNameOrEmail()}
                    round={true}
                    size="36"
                    textSizeRatio={36 / 16}
                    className={styles.author_avatar}
                    src={project.Author.picture ? project.Author.picture : ''}
                  />
                </>
              )}
            </div>
            <div className={styles.created_date_block}>
              <div className={styles.created_date}>
                Created: {project.dateCreated.toLocaleDateString()}
              </div>
              <div>Updated: {project.dateUpdated.toLocaleDateString()}</div>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (
  state: IApplicationState,
  localProps: ILocalProps
): IPropsFromState => {
  return {
    isLoadingOwner: selectIsLoadingProjectOwner(state, localProps.project.id),
  };
};

export default connect(mapStateToProps)(ProjectWidget);
