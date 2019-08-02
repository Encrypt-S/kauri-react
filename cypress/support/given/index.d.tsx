import { Clickable } from '../types'

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to select DOM element by data-cy attribute.
     * @example cy.dataCy('greeting')
    */
   givenIHaveNavigatedTo(navigation:Array<Clickable>, wait:number): Chainable<Element>
  }
}