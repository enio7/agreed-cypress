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
    cy.get('div[aria-label="Choose Saturday, July 30th, 2022"]').click();
    cy.get(
      'tr:last-child > td:nth-child(4) > div > div > div:nth-child(2)'
    ).type('enio');
    cy.get(
      ':nth-child(1) > .option-item__content > .avatar-round > .text-container > h4'
    ).click();
    cy.get(
      'tr:last-child > td:nth-child(5) > div > div > div > div > button'
    ).click();
    cy.get(
      'tr:last-child > td:nth-child(5) > div > div > div > div > div > a:last-child'
    ).click();
    cy.get(
      'tr:last-child > td:nth-child(5) > div > div > div > div > button'
    ).click();
    cy.get(
      'tr:last-child > td:nth-child(5) > div > div > div > div > div > a:nth-child(2)'
    ).click();
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
