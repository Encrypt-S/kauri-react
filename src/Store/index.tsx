import { settingsReducer } from "./Reducers"
import { combineReducers } from "redux";


const rootReducer = combineReducers({
  settings: settingsReducer,
})

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer
