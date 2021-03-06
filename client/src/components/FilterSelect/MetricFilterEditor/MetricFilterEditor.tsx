import { bind } from 'decko';
import * as React from 'react';

import { ComparisonType, IMetricFilterData } from 'models/Filters';

import styles from './MetricFilterEditor.module.css';

interface ILocalProps {
  data: IMetricFilterData;
  onChange?: (newData: IMetricFilterData) => void;
}

export default class MetricFilterEditor extends React.Component<ILocalProps> {
  public render() {
    return (
      <div className={styles.root}>
        <select
          defaultValue={this.props.data.comparisonType.toString()}
          onChange={this.onComparisonChanged}
        >
          <option value={ComparisonType.MORE}>&gt;</option>
          <option value={ComparisonType.EQUALS}>=</option>
          <option value={ComparisonType.LESS}>&lt;</option>
        </select>

        <input
          defaultValue={this.props.data.value.toString()}
          onBlur={this.onBlur}
          onKeyUp={this.onSubmit}
        />
      </div>
    );
  }

  @bind
  private onSave(data: IMetricFilterData) {
    if (this.props.onChange) {
      this.props.onChange(data);
    }
  }

  @bind
  private onComparisonChanged(event: React.ChangeEvent<HTMLSelectElement>) {
    const cmp: ComparisonType = event.target.selectedIndex;
    const newData = {
      ...this.props.data,
      comparisonType: cmp,
    };

    this.onSave(newData);
  }

  @bind
  private onSubmit(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      const newData = {
        ...this.props.data,
        value: Number(event.currentTarget.value),
      };
      this.onSave(newData);
    }
  }

  @bind
  private onBlur(event: React.ChangeEvent<HTMLInputElement>) {
    const newData = { ...this.props.data, value: Number(event.target.value) };
    this.onSave(newData);
  }
}
