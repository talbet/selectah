import React from 'react';
import { shallow } from 'enzyme';

import Text from './Text';

describe('Text', () => {
  let component;
  let props;

  beforeEach(() => {
    props = {};
    component = shallow(<Text {...props} />);
  });

  it('should', () => {
    expect(component).toMatchSnapshot();
  });
});
