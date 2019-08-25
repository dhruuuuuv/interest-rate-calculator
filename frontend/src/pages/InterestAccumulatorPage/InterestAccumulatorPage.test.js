import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import InterestAccumulatorPage from './'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({
  adapter: new Adapter()
})

describe('Interest Accumulator Page', () => {
  it('renders', () => {
    const wrapper = shallow(
      <InterestAccumulatorPage
      />
    )

    expect(wrapper.exists()).toBe(true)
  })

  it('user inputs update', () => {
    const wrapper = mount(
      <InterestAccumulatorPage
      />
    )

    wrapper.find('.savingsAmount').simulate('change', {
      target: { value: 10 }
    })

    expect(wrapper.find('.savingsAmount').props().value).toEqual(10)
  })
})