import cn from 'classnames';
import * as React from 'react';
import Avatar from 'react-avatar';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Preloader from 'components/shared/Preloader/Preloader';
import Tag from 'components/shared/TagBlock/TagProject';
import { Project } from 'models/Project';
import routes from 'routes';

import styles from './ProjectWidget.module.css';

interface ILocalProps {
  project: Project;
}

type AllProps = ILocalProps;

class ProjectWidget extends React.Component<AllProps> {
  public render() {
    const { project } = this.props;

    return (
      <div>
        <Link
          className={cn(styles.project_link)}
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

export default ProjectWidget;
