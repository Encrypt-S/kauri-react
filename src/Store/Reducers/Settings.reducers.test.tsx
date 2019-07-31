import { settingsReducer } from './Settings.reducers'

import { 
  DisplayCurrencies, 
  DisplayLanguage, 
  DisplayUnits,
  CHANGE_DISPLAY_CURRENCY,
  CHANGE_DISPLAY_LANGUAGE,
  CHANGE_DISPLAY_UNITS,
} from '../Types/Settings.types'

describe('Settings Reducer', () => {
  it('should return the initial state', () => {
    expect(settingsReducer(undefined, {})).toEqual({
      displayCurrency: 'NAV',
      displayLanguage: 'en',
      displayUnits: 'WHOLE',
    })
  })

  it('should handle CHANGE_DISPLAY_CURRENCY', () => {
    expect(
      settingsReducer(undefined, {
        type: CHANGE_DISPLAY_CURRENCY,
        currency: DisplayCurrencies.BTC
      })
    ).toEqual({
      displayCurrency: 'BTC',
      displayLanguage: 'en',
      displayUnits: 'WHOLE',
    })
  })

  it('should handle CHANGE_DISPLAY_LANGUAGE', () => {
    expect(
      settingsReducer(undefined, {
        type: CHANGE_DISPLAY_LANGUAGE,
        language: DisplayLanguage.GERMAN
      })
    ).toEqual({
      displayCurrency: 'NAV',
      displayLanguage: 'de',
      displayUnits: 'WHOLE',
    })
  })

  it('should handle CHANGE_DISPLAY_UNITS', () => {
    expect(
      settingsReducer(undefined, {
        type: CHANGE_DISPLAY_UNITS,
        units: DisplayUnits.MILLI
      })
    ).toEqual({
      displayCurrency: 'NAV',
      displayLanguage: 'en',
      displayUnits: 'MILLI',
    })
  })

})