//framework
import React from "react"
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"

//language
//import { English, German } from "./Wizard.lang"

//state
import rootReducer from "../../Store";
const store = createStore(rootReducer)

//modules & components
import WizardModule from "./Wizard"

Enzyme.configure({ adapter: new Adapter() })

describe('Wizard Module', () => {

  test('Renders', () => {
    const wrapper = shallow(<Provider store={store}><WizardModule /></Provider>)
    expect(wrapper.exists()).toBe(true)
  })

})
