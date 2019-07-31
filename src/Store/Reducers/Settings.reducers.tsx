import { 
  SettingsState,
  DisplayCurrencies, 
  DisplayUnits, 
  DisplayLanguage,
  CHANGE_DISPLAY_CURRENCY, 
  CHANGE_DISPLAY_UNITS, 
  CHANGE_DISPLAY_LANGUAGE,
  SettingsActionTypes,
} from "../Types/Settings.types"

const initialState: SettingsState = {
  displayCurrency: DisplayCurrencies.NAV,
  displayUnits: DisplayUnits.WHOLE,
  displayLanguage: DisplayLanguage.ENGLISH,
}

export function settingsReducer(
  state = initialState,
  action: SettingsActionTypes): 
  SettingsState {
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
      case CHANGE_DISPLAY_LANGUAGE:
        return {
          ...state,
          displayLanguage: action.language
        }
    default:
      return state
  }
}