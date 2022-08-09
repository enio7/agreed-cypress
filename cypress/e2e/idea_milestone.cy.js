/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

const faker = require('faker');
require('cypress-xpath');

describe('Milestone', () => {
  beforeEach(() => {
    cy.login();
    cy.wait(5000);
  });

  it('new milestone', () => {
    cy.get(':nth-child(1) > a > .nav-item > .nav-link').click();
    cy.get('[data-number="0"]').click();
    cy.get('.page-tabs__tabs__tab--name').contains('Plan').click();
    cy.get('.addMetricBtn').click();
    cy.wait(1500);
    cy.get(
      '[role="rowgroup"] > tr:last-child > td:nth-child(1) > div > textarea'
    ).type('milestone title automated');
    cy.get(
      '[role="rowgroup"] > tr:last-child > td:nth-child(2) > div > textarea'
    ).type(faker.lorem.words());
    cy.get(
      'tr:last-child > td:nth-child(3) > div > div > div > div > div > input'
    ).click();
    cy.get('.react-datepicker__month > div:nth-child(4) > div:nth-child(4)').click();
    cy.get(
      '[role="rowgroup"] > tr:last-child > td:nth-child(4) > div > div > div.email-dropdown-wrapper > div > input'
    )
      .invoke('show')
      .click({ force: true });
    cy.get(
      '[role="rowgroup"] > tr:last-child > td:nth-child(4) > div > div > div.email-dropdown-wrapper > div > input'
    ).type(faker.internet.email()).type('{enter}');
    cy.get('.modal-footer > button:last-child').click();
    cy.contains('Validator successfully updated!').should('exist');
    cy.reload();
    cy.wait(1000);
    cy.get(
      '[role="rowgroup"] > tr:last-child > td:nth-child(5) > div > div > div > div > button'
    ).click();
    cy.get('.dropdown-menu.show > a:nth-child(2)').click();
    cy.get('.idea_content').click();
  });

  it('archive milestone row', () => {
    cy.get(':nth-child(1) > a > .nav-item > .nav-link').click();
    cy.get('[data-number="0"]').click();
    cy.get('.page-tabs__tabs__tab--name').contains('Plan').click();
    cy.get(
      'tr:first-child > td:nth-child(6) > div > div > div > div > div'
    ).click();
    cy.get('.minimenu > div.minimenu-item ').click();
    cy.get('.modal-footer > button:nth-child(1)').click();
    cy.get(
      'tr:first-child > td:nth-child(6) > div > div > div > div > div'
    ).click();
    cy.get('.minimenu > div.minimenu-item ').click();
    cy.get('.modal-footer > button:nth-child(2)').click();
  });
});
