import React from 'react';
import { shallow } from 'enzyme';

import Button from './Button';

describe('Button', () => {
  let component;
  let props;

  beforeEach(() => {
    props = {};
    component = shallow(<Button {...props} />);
  });

  it('should', () => {
    expect(component).toMatchSnapshot();
  });
});
