import * as actions from './Settings.actions'
import { 
  DisplayCurrencies, 
  DisplayLanguage, 
  DisplayUnits,
  CHANGE_DISPLAY_CURRENCY,
  CHANGE_DISPLAY_LANGUAGE,
  CHANGE_DISPLAY_UNITS,
} from '../Types/Settings.types'

describe('Settings Actions', () => {
  it('should change the display currency', () => {
    const expectedAction = {
      type: CHANGE_DISPLAY_CURRENCY,
      currency: 'NAV'
    }
    expect(actions.updateDisplayCurrency(DisplayCurrencies.NAV)).toEqual(expectedAction)
  })

  it('should change the display language', () => {
    const expectedAction = {
      type: CHANGE_DISPLAY_LANGUAGE,
      language: 'de'
    }
    expect(actions.updateDisplayLanguage(DisplayLanguage.GERMAN)).toEqual(expectedAction)
  })

  it('should change the display units', () => {
    const expectedAction = {
      type: CHANGE_DISPLAY_UNITS,
      units: 'MILLI'
    }
    expect(actions.updateDisplayUnits(DisplayUnits.MILLI)).toEqual(expectedAction)
  })
})