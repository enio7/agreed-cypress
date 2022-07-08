/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

require('cypress-xpath');

describe('Authorization Modal', () => {
  it('Log In', () => {
    cy.login();
    //cy.visit('/login');
    cy.wait(5000);

    cy.get('.background-subtitle').should('exist');
  });
});
