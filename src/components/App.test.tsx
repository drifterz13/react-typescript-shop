import * as React from 'react'
import { shallow } from 'enzyme'
import App from './App'

it('should render correctly', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.find('h1').text()).toBe('Hello, mix')
})
