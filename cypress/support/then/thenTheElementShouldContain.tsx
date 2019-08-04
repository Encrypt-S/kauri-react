
Cypress.Commands.add('thenTheElementShouldContain', (testID:string, content:string, wait:number=0) => {
  cy.wait(wait)
  cy.get(`[data-testid=${testID}]`).should('have.text', content)

})
