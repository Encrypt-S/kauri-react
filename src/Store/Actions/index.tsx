import { DisplayCurrencies, DisplayUnits, CHANGE_DISPLAY_CURRENCY, CHANGE_DISPLAY_UNITS, SettingsActionTypes } from "../Types"

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