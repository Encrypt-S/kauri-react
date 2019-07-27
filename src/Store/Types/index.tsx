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

export interface SettingsState {
  displayCurrency: DisplayCurrencies,
  displayUnits: DisplayUnits,
}

export const CHANGE_DISPLAY_CURRENCY = 'CHANGE_DISPLAY_CURRENCY'
export const CHANGE_DISPLAY_UNITS = 'CHANGE_DISPLAY_UNITS'

interface UpdateDisplayCurrency {
  type: typeof CHANGE_DISPLAY_CURRENCY,
  currency: DisplayCurrencies,
}

interface UpdateDisplayUnits {
  type: typeof CHANGE_DISPLAY_UNITS,
  units: DisplayUnits,
}

export type SettingsActionTypes = UpdateDisplayCurrency | UpdateDisplayUnits


