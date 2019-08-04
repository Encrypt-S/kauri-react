import { Clickable } from '../../support/types'
import { English, German } from '../../../src/Modules/Settings/Settings.lang'

describe('Settings', function () {

  context('Language', function () {
    before(() => {
      cy.visit('http://localhost:3000')
    })

    beforeEach(function () {
      cy.viewport(1000, 1000)
    })

    it('should change the language', () => {

      cy.wait(1000)

      const navSettings:Clickable = {name: 'Settings', testID: 'nav-settings', wait: 500}
      const navigationChain = [navSettings]

      cy.givenIHaveNavigatedTo(navigationChain, 500)

      cy.thenTheElementShouldContain('settings-title', English.title)
      cy.thenTheElementShouldContain('settings-description', English.description)

      cy.whenIClick('settings-german', 500).wait(500)

      cy.thenTheElementShouldContain('settings-title', German.title)
      cy.thenTheElementShouldContain('settings-description', German.description)

      cy.whenIClick('settings-english', 500).wait(500)

      cy.thenTheElementShouldContain('settings-title', English.title)
      cy.thenTheElementShouldContain('settings-description', English.description)

    })
  })
})