import React from 'react'
import { shallow } from 'enzyme'

import List from './List'

describe('List', () => {
  let component, props

  beforeEach(() => {
    props = {}
    component = shallow(<List {...props} />)
  })

  it('should', () => {
    expect(component).toMatchSnapshot()
  })
})