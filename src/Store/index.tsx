import { settingsReducer } from "./Reducers/Settings.reducers"
import { combineReducers, createStore, applyMiddleware } from "redux";

const rootReducer = combineReducers({
  settings: settingsReducer,
})

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer
