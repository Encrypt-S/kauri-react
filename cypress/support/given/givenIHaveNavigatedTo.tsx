import { Clickable } from '../types'

Cypress.Commands.add('givenIHaveNavigatedTo', (navigation:Array<Clickable>, wait:number=0) => {
  cy.wait(wait)

  navigate(navigation[0], 0)

  function navigate(clickable:Clickable, index:number) {
    if (!navigation[index]) return;
    cy.log(`Navigating to ${clickable.name}`)
    cy.get(`[data-testid=${clickable.testID}]`).click().wait(clickable.wait || 0)
    index++
    navigate(navigation[index], index)
  }

})
