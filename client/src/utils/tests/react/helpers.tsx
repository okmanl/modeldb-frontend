import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

export function makeShallowRenderer<Props = {}, State = {}>(
  Component: React.ComponentClass<Props, State>,
  defaultProps: Props
) {
  return (props: Partial<Props> = {}): ShallowWrapper<Props, State> => {
    const ComponentAny = Component as any;
    return shallow(<ComponentAny {...defaultProps} {...props} />);
  };
}
