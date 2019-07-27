import React from "react"
import Enzyme, { shallow } from "enzyme"
import HomeModule from "./Home"
import { English, German } from "./Home.lang"
import Adapter from "enzyme-adapter-react-16"

Enzyme.configure({ adapter: new Adapter() })

describe('Home Module', () => {

  beforeEach(() => {
    const wrapper = shallow(<HomeModule />)
    wrapper.setState({language: 'en'})
  })

  test('Renders', () => {
    const wrapper = shallow(<HomeModule />)
    expect(wrapper.exists()).toBe(true)
  })

  test('Changes the language by calling the function directly', () => {
    const wrapper = shallow(<HomeModule />)
    const instance = wrapper.instance()
    expect(wrapper.state('language')).toBe('en')
    instance.changeLanguage('de')
    expect(wrapper.state('language')).toBe('de')
  })

  test('Changes the language by pressing the buttons', () => {
    const wrapper = shallow(<HomeModule />)
    //should be initialised to english
    expect(wrapper.state('language')).toBe('en')
    expect(wrapper.findWhere((node:any) => node.prop('testID') === 'title').render().text()).toEqual(English.title)
    expect(wrapper.findWhere((node:any) => node.prop('testID') === 'description').render().text()).toEqual(English.description)

    // //change to german
    expect(wrapper.findWhere((node:any) => node.prop('testID') === 'i18n-german').exists()).toBe(true)
    wrapper.findWhere((node:any) => node.prop('testID') === 'i18n-german').simulate('press')
    expect(wrapper.state('language')).toBe('de')
    expect(wrapper.findWhere((node:any) => node.prop('testID') === 'title').render().text()).toEqual(German.title)
    expect(wrapper.findWhere((node:any) => node.prop('testID') === 'description').render().text()).toEqual(German.description)

    //change back to english
    expect(wrapper.findWhere((node:any) => node.prop('testID') === 'i18n-english').exists()).toBe(true)
    wrapper.findWhere((node:any) => node.prop('testID') === 'i18n-english').simulate('press')
    expect(wrapper.state('language')).toBe('en')
    expect(wrapper.findWhere((node:any) => node.prop('testID') === 'title').render().text()).toEqual(English.title)
    expect(wrapper.findWhere((node:any) => node.prop('testID') === 'description').render().text()).toEqual(English.description)
  })

})
