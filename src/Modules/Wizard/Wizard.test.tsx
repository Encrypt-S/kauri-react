//framework
import React from "react"
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import { expect } from 'chai';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store';

//language
import { English, German } from "./Wizard.lang"

//state
import { DisplayUnits, DisplayCurrencies } from '../../Store/Types'
const mockStore = configureStore();
const initialState = {
  displayCurrency: DisplayCurrencies.NAV,
  displayUnits: DisplayUnits.WHOLE
}

const store = mockStore(initialState)

//modules & components
import WizardRedux, { WizardModule } from "./Wizard"

Enzyme.configure({ adapter: new Adapter() })

describe('Wizard Module', () => {

  const props = {
    settings: {
      displayCurrency: DisplayCurrencies.NAV,
      displayUnits: DisplayUnits.WHOLE,
    }
  }

  it('Renders', () => {
    const wrapper = shallow(<WizardModule {...props} />)
    expect(wrapper.exists()).to.equal(true)  
  })

  it('Renders with Redux', () => {
    const wrapper = shallow(<Provider store={store}><WizardRedux {...props} /></Provider>)
    expect(wrapper.exists()).to.equal(true)  
  })

  it('Displays English by default', () => {
    const wrapper = shallow(<WizardModule {...props} />)
    
    //should be initialised to english

    expect(wrapper.findWhere((node:any) => node.prop('testID') === 'title').render().text()).to.equal(English.title)
    expect(wrapper.findWhere((node:any) => node.prop('testID') === 'description').render().text()).to.equal(English.description)
  })

})
