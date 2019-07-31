import Language from "./Language"
import { CHANGE_DISPLAY_LANGUAGE } from '../Types/Settings.types'
import i18n from "../../Components/Language/i18n"

jest.mock('../../Components/Language/i18n')

const create = () => {
  const store = {
    getState: jest.fn(() => ({})),
    dispatch: jest.fn()
  }
  const next = jest.fn()
  const invoke = (action:any) => Language(store)(next)(action)
  return { store, next, invoke }
}

describe('Language Middleware', () => {

  it('activates the language changing middleware', () => {
    const { next, invoke } = create()
    const action = { type: CHANGE_DISPLAY_LANGUAGE, language: 'TEST' }
    invoke(action)
    expect(next).toHaveBeenCalledWith(action)
    expect(i18n.changeLanguage).toHaveBeenCalledWith('TEST');
  })

})