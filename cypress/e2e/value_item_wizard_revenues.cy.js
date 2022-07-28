/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

const faker = require('faker');
require('cypress-xpath');

describe('Value items Revenues', () => {
  beforeEach(() => {
    cy.login();
    cy.wait(5000);
  });

  it('revenues value wizard', () => {
    cy.get(':nth-child(1) > a > .nav-item > .nav-link').click();
    cy.get('[data-number="0"]').click();
    cy.get('.page-tabs__tabs__tab--name').contains('Value').click();
    cy.get('[role="group"] > button:nth-child(3)').click();
    cy.get('.idea__value__addButton').click();
    cy.get('.input__container > input').type('revenues auto wizard');
    cy.get('.nextBtn').click();
    cy.get('.buttons__container > button:nth-child(2)').click();
    cy.get('.nextBtn').click();
    cy.get('.buttons__container > button:nth-child(1)').click();
    cy.get('.nextBtn').click();
    cy.get('[placeholder="eg. 20,000"]').type('1000000');
    cy.get('.nextBtn').click();
    cy.get('.form-control').type('20000');
    cy.get('.nextBtn').click();
    cy.get(
      '.row > div:nth-child(1) > div > div > div > div > div > div > input'
    ).click();
    cy.get('[aria-label="Next Month"]').click();
    cy.get('div[aria-label="Choose Saturday, August 27th, 2022"]').click();
    cy.get(
      '.row > div:nth-child(2) > div > div > div > div > div > div > input'
    ).click();
    cy.get('[aria-label="Next Month"]').click();
    cy.get('div[aria-label="Choose Tuesday, August 30th, 2022"]').click();
    cy.get('.nextBtn').click();
    cy.get('.wizard__footer__wrapper > button:nth-child(1)').click();
    cy.get('.nextBtn').click();
    cy.get('.react-select__input').click();
    cy.get('.react-select__menu-list > div:nth-child(2)').click();
    cy.get('.dropdown.custom-dropdown > button').click();
    cy.get('.dropdown-menu.show > a:first-child').click();
    cy.get('.doneBtn').click();
    // cy.contains('Idea revenue value item added successfully!').should('exist');
  });
});
