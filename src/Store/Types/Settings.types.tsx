export enum DisplayCurrencies {
  NAV = "NAV",
  BTC = "BTC",
  ETH = "ETH",
  USD = "USD",
}

export enum DisplayUnits {
  WHOLE = "WHOLE",
  MICRO = "MICRO",
  MILLI = "MILLI",
}

export enum DisplayLanguage {
  GERMAN = "de",
  ENGLISH = "en",
  SPANISH = "es",
}

export interface SettingsState {
  displayCurrency: DisplayCurrencies,
  displayUnits: DisplayUnits,
  displayLanguage: DisplayLanguage,
}

export const CHANGE_DISPLAY_CURRENCY = 'CHANGE_DISPLAY_CURRENCY'
export const CHANGE_DISPLAY_UNITS = 'CHANGE_DISPLAY_UNITS'
export const CHANGE_DISPLAY_LANGUAGE = 'CHANGE_DISPLAY_LANGUAGE'

export interface UpdateDisplayLanguage {
  type: typeof CHANGE_DISPLAY_LANGUAGE,
  language: DisplayLanguage,
}

export interface UpdateDisplayCurrency {
  type: typeof CHANGE_DISPLAY_CURRENCY,
  currency: DisplayCurrencies,
}

export interface UpdateDisplayUnits {
  type: typeof CHANGE_DISPLAY_UNITS,
  units: DisplayUnits,
}

export type SettingsActionTypes = UpdateDisplayLanguage | UpdateDisplayCurrency | UpdateDisplayUnits

