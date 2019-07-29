//framework
import React from "react"
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Enzyme, { shallow, mount } from "enzyme"
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import Adapter from "enzyme-adapter-react-16"
import { Button, StyleSheet, Text, View } from "react-native"
import { expect } from 'chai';
import { SettingsState } from "../../Store/Types"

//language
import { English, German } from "./Settings.lang"

//modules & components
import SettingsModule from "./Settings"
import { DisplayUnits, DisplayCurrencies } from '../../Store/Types'

//state
const mockStore = configureStore();
const initialState = {
  displayCurrency: DisplayCurrencies.NAV,
  displayUnits: DisplayUnits.WHOLE
}

const store = mockStore(initialState)

Enzyme.configure({ adapter: new Adapter() })

describe('Settings Module', () => {

  const props = {
    updateDisplayCurrency: jest.fn(),
    updateDisplayUnits: jest.fn(),
    settings: {
      displayCurrency: DisplayCurrencies.NAV,
      displayUnits: DisplayUnits.WHOLE,
    }
  }

  it('Renders', () => {
    const wrapper = shallow(<Provider store={store}><SettingsModule /></Provider>)
    expect(wrapper.exists()).to.equal(true)  
  })

  // it('Changes the language by pressing the buttons', () => {
    const wrapper = shallow(<Provider store={store}><SettingsModule /></Provider>)
    const component = wrapper.dive()

    //should be initialised to english

    const complexComponents = component.findWhere(n => {
      console.log(n.type())
      return n.type() !== 'string'
    });

    console.log('complexComponents', complexComponents.length)


    //expect(wrapper.findWhere((node:any) => node.prop('testID') === 'title').render().text()).to.equal(English.title)
    
  //   //expect(wrapper.findWhere((node:any) => node.prop('testID') === 'description').render().text()).toEqual(English.description)

  //   // // //change to german
  //   // expect(wrapper.findWhere((node:any) => node.prop('testID') === 'i18n-german').exists()).toBe(true)
  //   // wrapper.findWhere((node:any) => node.prop('testID') === 'i18n-german').simulate('press')
  //   // expect(wrapper.findWhere((node:any) => node.prop('testID') === 'title').render().text()).toEqual(German.title)
  //   // expect(wrapper.findWhere((node:any) => node.prop('testID') === 'description').render().text()).toEqual(German.description)

  //   // //change back to english
  //   // expect(wrapper.findWhere((node:any) => node.prop('testID') === 'i18n-english').exists()).toBe(true)
  //   // wrapper.findWhere((node:any) => node.prop('testID') === 'i18n-english').simulate('press')
  //   // expect(wrapper.findWhere((node:any) => node.prop('testID') === 'title').render().text()).toEqual(English.title)
  //   // expect(wrapper.findWhere((node:any) => node.prop('testID') === 'description').render().text()).toEqual(English.description)
  // })

})
