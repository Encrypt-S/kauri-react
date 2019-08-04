
Cypress.Commands.add('whenIClick', (testID:string, wait:number=0) => {
  cy.wait(wait)

  cy.get(`[data-testid=${testID}]`).click()

})
