import React from 'react'
import { shallow } from 'enzyme'

import ListItem from './ListItem'

describe('ListItem', () => {
  let component, props

  beforeEach(() => {
    props = {}
    component = shallow(<ListItem {...props} />)
  })

  it('should', () => {
    expect(component).toMatchSnapshot()
  })
})