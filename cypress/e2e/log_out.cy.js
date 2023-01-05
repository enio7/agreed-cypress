/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

require('cypress-xpath');

describe('Logging out', () => {
  before(() => {
    cy.login();
    cy.wait(5000);
  });

  it('Log Out', () => {
    cy.get('.navbar-actions > div:nth-child(2) > div > button').click();
    cy.get('.navbar-nav > div:nth-child(2) > div > div > div:nth-child(6) > div > div').click;
    cy.visit('/login');
    cy.get('.login_form-section-subtitle').contains('Sign in to your account');
  });
});
