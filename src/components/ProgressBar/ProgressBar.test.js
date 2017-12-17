import React from 'react';
import { shallow } from 'enzyme';

import ProgressBar from './ProgressBar';

describe('ProgressBar', () => {
  let component;
  let props;

  beforeEach(() => {
    props = {};
    component = shallow(<ProgressBar {...props} />);
  });

  it('should', () => {
    expect(component).toMatchSnapshot();
  });
});
