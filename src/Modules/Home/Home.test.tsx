//framework
import React from "react"
import Enzyme, { shallow, mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import { expect } from 'chai';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store';

//language
import { English, German } from "./Home.lang"

//state
import { DisplayUnits, DisplayCurrencies } from '../../Store/Types/Settings'
const mockStore = configureStore();
const initialState = {
  settings: {
    displayCurrency: DisplayCurrencies.NAV,
    displayUnits: DisplayUnits.WHOLE
  }  
}

const store = mockStore(initialState)

//modules & components
import HomeRedux, { HomeModule } from "./Home"

Enzyme.configure({ adapter: new Adapter() })

describe('Home Module', () => {

  const props = {
    settings: {
      displayCurrency: DisplayCurrencies.NAV,
      displayUnits: DisplayUnits.WHOLE,
    }
  }

  it('Renders', () => {
    const wrapper = shallow(<HomeModule {...props} />)
    expect(wrapper.exists()).to.equal(true)  
  })

  it('Renders with Redux', () => {
    const wrapper = mount(<Provider store={store}><HomeRedux {...props} /></Provider>)
    expect(wrapper.exists()).to.equal(true)  
  })

  it('Displays English by default', () => {
    const wrapper = shallow(<HomeModule {...props} />)
    
    //should be initialised to english

    expect(wrapper.findWhere((node:any) => node.prop('testID') === 'title').render().text()).to.equal(English.title)
    expect(wrapper.findWhere((node:any) => node.prop('testID') === 'description').render().text()).to.equal(English.description)
  })

})
