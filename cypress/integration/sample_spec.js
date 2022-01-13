import { utilities } from '../src/utilities'

describe('Amazon Test', () => {
  before(() => {
    cy.visit('/')
    cy.pause()
    cy.get(utilities.tabSearchtTextBox)
      .type(Cypress.env('search_bar'), { timeout: 7000 })
      .should('have.value', "bag")
    cy.contains('Go').click();
  })
  beforeEach(() => {
    cy.get(utilities.dropDownButton).click();
    cy.get(utilities.dropDownItem).should('be.visible')
    cy.get(utilities.dropDownItem).its('length').should('eq', 5)

  })
  it('should click a Newest Arrivals', () => {
    cy.get(utilities.dropDownItem).last().click();
    cy.get(utilities.productLIst).should('not.have.length', 0);
  });

  it('should click a Featured', () => {
    cy.get(utilities.dropDownItem).first().click();
    cy.get(utilities.productLIst).should('not.have.length', 0);
  });

 });
