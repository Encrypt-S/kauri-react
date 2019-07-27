import React from "react"
import Enzyme, { shallow } from "enzyme"
import Widget from "./Widget"
import Adapter from "enzyme-adapter-react-16"

Enzyme.configure({ adapter: new Adapter() })

describe('Widget Component', () => {

  test('Renders', () => {
    const wrapper = shallow(<Widget text="enzyme test text"></Widget>)
    expect(wrapper.exists()).toBe(true)
  })

  test('The widget text should be "enzyme test text"', () => {
    const wrapper = shallow(<Widget text="enzyme test text"></Widget>)
    expect(wrapper.findWhere((node:any) => node.prop('testID') === 'widget-text').exists()).toBe(true)
    expect(wrapper.findWhere((node:any) => node.prop('testID') === 'widget-text').render().text()).toEqual('enzyme test text')
  })


})
