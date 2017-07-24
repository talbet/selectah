import React from 'react'
import { shallow } from 'enzyme'

import ListContainer from './ListContainer'

describe('ListContainer', () => {
  let component, props

  beforeEach(() => {
    props = {}
    component = shallow(<ListContainer {...props} />)
  })

  it('should', () => {
    expect(component).toMatchSnapshot()
  })
})