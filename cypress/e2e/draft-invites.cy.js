/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

const faker = require('faker');
require('cypress-xpath');

describe('Draft Invities', () => {
  beforeEach(() => {
    cy.login();
    cy.wait(5000);
  });

  it('draft invites through idea overview', () => {
    cy.get(':nth-child(1) > a > .nav-item > .nav-link').click();
    cy.get('[data-number="0"]').click();
    cy.get('.addMember__button').click();
    cy.contains('Who do you want to invite to the team?').should('exist');
    cy.get('.invite-team-member-form__row > div > div > div > input').type(
      faker.internet.email()
    );
    cy.get('.role-dropdown > button').click();
    cy.get('a:nth-child(1) > div > div.role-checkbox > input').click();
    cy.get('a:nth-child(2) > div > div.role-checkbox > input').click();
    cy.get('a:nth-child(3) > div > div.role-checkbox > input').click();
    cy.get('.status-dropdown > button').click();
    cy.get(
      'div.status-dropdown > div > a:nth-child(2) > div > div > div'
    ).click();
    cy.get('.add-new-row').click();
    cy.get(
      'div:nth-child(2) > div > div > div.email-dropdown-wrapper > div > input'
    ).type(faker.internet.email());
    cy.get(
      'div:nth-child(2) > div > div > div.role-dropdown.empty.dropdown'
    ).click();
    cy.get(
      'div:nth-child(2) > div > div > div.role-dropdown > div > a:nth-child(1) > div > div.role-checkbox > input'
    ).click();
    cy.get(
      'div:nth-child(2) > div > div > div.role-dropdown > div > a:nth-child(2) > div > div.role-checkbox > input'
    ).click();
    cy.get(
      'div:nth-child(2) > div > div > div.role-dropdown > div > a:nth-child(3) > div > div.role-checkbox > input'
    ).click();
    cy.get(
      'div:nth-child(2) > div > div > div.status-dropdown > button'
    ).click();
    cy.get(
      'div:nth-child(2) > div > div > div.status-dropdown > div > a:nth-child(1) > div > div > div'
    ).click();
    cy.get('.modal-footer > button').last().click();
    cy.contains('Team successfully invited!').should('exist');
  });
});
