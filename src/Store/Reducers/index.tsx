import { 
  SettingsState,
  DisplayCurrencies, 
  DisplayUnits, 
  CHANGE_DISPLAY_CURRENCY, 
  CHANGE_DISPLAY_UNITS, 
  SettingsActionTypes 
} from "../Types"

const initialState: SettingsState = {
  displayCurrency: DisplayCurrencies.NAV,
  displayUnits: DisplayUnits.WHOLE
}

export function settingsReducer(
  state = initialState,
  action: SettingsActionTypes
): SettingsState {
  switch (action.type) {
    case CHANGE_DISPLAY_CURRENCY:
      return {
        ...state,
        displayCurrency: action.currency
      }
      case CHANGE_DISPLAY_UNITS:
        return {
          ...state,
          displayUnits: action.units
        }
    default:
      return state
  }
}