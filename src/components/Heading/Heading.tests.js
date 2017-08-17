import React from 'react';
import { shallow } from 'enzyme';

import Heading from './Heading';

describe('Heading', () => {
  let component;
  let props;

  beforeEach(() => {
    props = {};
    component = shallow(<Heading {...props} />);
  });

  it('should', () => {
    expect(component).toMatchSnapshot();
  });
});
