//framework
import React from "react"
import Enzyme, { shallow, mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import { expect } from 'chai';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store';

//language
import { English, German } from "./Settings.lang"

//state
import { DisplayUnits, DisplayCurrencies, DisplayLanguage } from '../../Store/Types/Settings.types'
const mockStore = configureStore();
const initialState = {
  settings: {
    displayCurrency: DisplayCurrencies.NAV,
    displayUnits: DisplayUnits.WHOLE
  }  
}

const store = mockStore(initialState)

//modules & components
import SettingsRedux, { SettingsModule } from "./Settings"

Enzyme.configure({ adapter: new Adapter() })

describe('Settings Module', () => {

  const props = {
    updateDisplayCurrency: jest.fn(),
    updateDisplayUnits: jest.fn(),
    updateDisplayLanguage: jest.fn(),
    settings: {
      displayCurrency: DisplayCurrencies.NAV,
      displayUnits: DisplayUnits.WHOLE,
      displayLanguage: DisplayLanguage.ENGLISH,
    }
  }

  it('Renders', () => {
    const wrapper = shallow(<SettingsModule {...props} />)
    expect(wrapper.exists()).to.equal(true)  
  })

  it('Renders with Redux', () => {
    const wrapper = mount(<Provider store={store}><SettingsRedux {...props} /></Provider>)
    expect(wrapper.exists()).to.equal(true)  
  })

  it('Changes the language by pressing the buttons', () => {
    const wrapper = shallow(<SettingsModule {...props} />)

    //should be initialised to english

    expect(wrapper.findWhere((node:any) => node.prop('testID') === 'title').render().text()).to.equal(English.title)
    expect(wrapper.findWhere((node:any) => node.prop('testID') === 'description').render().text()).to.equal(English.description)
    expect(wrapper.findWhere((node:any) => node.prop('testID') === 'displayCurrency').render().text()).to.equal(English.displayCurrency)
    expect(wrapper.findWhere((node:any) => node.prop('testID') === 'displayUnits').render().text()).to.equal(English.displayUnits)

    // //change to german
    expect(wrapper.findWhere((node:any) => node.prop('testID') === 'i18n-german').exists()).to.equal(true)
    wrapper.findWhere((node:any) => node.prop('testID') === 'i18n-german').simulate('press')
    expect(props.updateDisplayLanguage.mock.calls.length).to.equal(1)
    expect(props.updateDisplayLanguage.mock.calls[0][0]).to.equal(DisplayLanguage.GERMAN)

    //change back to english
    expect(wrapper.findWhere((node:any) => node.prop('testID') === 'i18n-english').exists()).to.equal(true)
    wrapper.findWhere((node:any) => node.prop('testID') === 'i18n-english').simulate('press')
    expect(props.updateDisplayLanguage.mock.calls.length).to.equal(2)
    expect(props.updateDisplayLanguage.mock.calls[1][0]).to.equal(DisplayLanguage.ENGLISH)


  })

  it('Changes the display currency by pressing the buttons', () => {
    const wrapper = shallow(<SettingsModule {...props} />)

    //should be initialised to NAV

    expect(wrapper.findWhere((node:any) => node.prop('testID') === 'current-currency').render().text()).to.equal('Using '+DisplayCurrencies.NAV)

    wrapper.findWhere((node:any) => node.prop('testID') === 'currency-btc').simulate('press')
    expect(props.updateDisplayCurrency.mock.calls.length).to.equal(1)
    expect(props.updateDisplayCurrency.mock.calls[0][0]).to.equal(DisplayCurrencies.BTC)

    wrapper.findWhere((node:any) => node.prop('testID') === 'currency-nav').simulate('press')
    expect(props.updateDisplayCurrency.mock.calls.length).to.equal(2)
    expect(props.updateDisplayCurrency.mock.calls[1][0]).to.equal(DisplayCurrencies.NAV)

  })

  it('Changes the display units by pressing the buttons', () => {
    const wrapper = shallow(<SettingsModule {...props} />)

    //should be initialised to NAV

    expect(wrapper.findWhere((node:any) => node.prop('testID') === 'current-units').render().text()).to.equal('Using '+DisplayUnits.WHOLE+ ' Units')

    wrapper.findWhere((node:any) => node.prop('testID') === 'units-micro').simulate('press')
    expect(props.updateDisplayUnits.mock.calls.length).to.equal(1)
    expect(props.updateDisplayUnits.mock.calls[0][0]).to.equal(DisplayUnits.MICRO)

    wrapper.findWhere((node:any) => node.prop('testID') === 'units-milli').simulate('press')
    expect(props.updateDisplayUnits.mock.calls.length).to.equal(2)
    expect(props.updateDisplayUnits.mock.calls[1][0]).to.equal(DisplayUnits.MILLI)

    wrapper.findWhere((node:any) => node.prop('testID') === 'units-whole').simulate('press')
    expect(props.updateDisplayUnits.mock.calls.length).to.equal(3)
    expect(props.updateDisplayUnits.mock.calls[2][0]).to.equal(DisplayUnits.WHOLE)

  })

})
