/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

const faker = require('faker');
require('cypress-xpath');

describe('Compensation Range', () => {
  beforeEach(() => {
    cy.login();
    cy.wait(5000);
  });

  it('compensation range', () => {
    cy.get('.profile-dropdown > button').click();
    cy.get(
      '.navbar-nav > div:nth-child(2) > div > div > a:nth-child(3)'
    ).click();
    cy.get('.spaces-page__settings > div:nth-child(4)').click();
    cy.contains('Compensation Range').should('exist');
    cy.get('.form-check-input').click();
    cy.get('.modal-footer > button:nth-child(2)').click();
    cy.get('.compensation-range-header-add-button').click();
    cy.get(
      '[data-rownumber="0"] > td:first-child > div > div > button'
    ).click();
    cy.get('div.dropdown-menu.show > a:nth-child(1)').click();
    cy.get(
      'tr.compensation-range-table-row-uncompleted > td:nth-child(2) > div > div > div > div > input'
    ).type('20000');
    cy.get(
      'tr.compensation-range-table-row-uncompleted > td:nth-child(3) > div > div > div > div > input'
    ).type('10000');
    cy.contains('Value updated successfully!').should('exist');
    cy.get('.compensation-range-header-add-button').click();
    cy.get(
      '[data-rownumber="0"] > td:first-child > div > div > button'
    ).click();
    cy.get('div.dropdown-menu.show > a:nth-child(2)').click();
    cy.get(
      'div.compensation-range-table-wrapper > table > tbody > tr:nth-child(2) > td:nth-child(2) > div > div > div:nth-child(1) > div > input'
    ).type('30000');
    cy.get(
      'div.compensation-range-table-wrapper > table > tbody > tr:nth-child(2) > td:nth-child(2) > div > div > div:nth-child(3) > div > input'
    ).type('35000');
    cy.contains('Value updated successfully!').should('exist');
    cy.get('.compensation-range-header-add-button').click();
    cy.get(
      '[data-rownumber="0"] > td:first-child > div > div > button'
    ).click();
    cy.get('div.dropdown-menu.show > a:nth-child(3)').click();
    cy.get(
      ' tr.compensation-range-table-row-uncompleted > td:nth-child(2) > div > div > div > div > input'
    ).type('250000');
    cy.get(
      'tr.compensation-range-table-row-uncompleted > td:nth-child(3) > div > div > div > div > input'
    ).type('400000');
    cy.contains('Value updated successfully!').should('exist');
    cy.get(
      '[role="rowgroup"] > tr[data-rownumber="4"] > td:last-child > div > div > button'
    ).click();
    cy.get('.dropdown-menu.show > a').click();

    cy.get('.form-check-input').click();
  });
});
