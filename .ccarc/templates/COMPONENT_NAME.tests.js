import React from 'react';
import { shallow } from 'enzyme';

import COMPONENT_NAME from './COMPONENT_NAME';

describe('COMPONENT_NAME', () => {
  let component;
  let props;

  beforeEach(() => {
    props = {};
    component = shallow(<COMPONENT_NAME {...props} />);
  });

  it('should', () => {
    expect(component).toMatchSnapshot();
  });
});
