import { 
  CHANGE_DISPLAY_LANGUAGE,
} from "../Types/Settings.types"

import i18n from "../../Components/Language/i18n"

const Language = (store:any) => (next:any) => (action:any) => {
  switch(action.type) {
    case CHANGE_DISPLAY_LANGUAGE:
      i18n.changeLanguage(action.language)
  }
  return next(action)
}

export default Language