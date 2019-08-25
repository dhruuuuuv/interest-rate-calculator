import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import { CurrencyInput } from './'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({
  adapter: new Adapter()
})

describe('currency input', () => {
  it('renders', () => {
    const wrapper = shallow(
      <CurrencyInput
        value={0}
        handleChange={() => { }}
        field='test'
      />
    )

    expect(wrapper.exists()).toBe(true)
  })
})