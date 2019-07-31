import { 
  DisplayCurrencies, 
  CHANGE_DISPLAY_CURRENCY, 
  DisplayUnits, 
  CHANGE_DISPLAY_UNITS, 
  DisplayLanguage, 
  CHANGE_DISPLAY_LANGUAGE,
  SettingsActionTypes,
} from "../Types/Settings.types"

// TypeScript infers that this function is returning UpdateDisplayCurrency
export function updateDisplayCurrency(currency: DisplayCurrencies): SettingsActionTypes {
  return {
    type: CHANGE_DISPLAY_CURRENCY,
    currency: currency
  }
}

// TypeScript infers that this function is returning UpdateDisplayUnits
export function updateDisplayUnits(units: DisplayUnits): SettingsActionTypes {
  return {
    type: CHANGE_DISPLAY_UNITS,
    units: units, 
  }
}

// TypeScript infers that this function is returning UpdateDisplayLanguage
export function updateDisplayLanguage(language: DisplayLanguage): SettingsActionTypes {
  return {
    type: CHANGE_DISPLAY_LANGUAGE,
    language: language, 
  }
}