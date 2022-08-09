/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

const faker = require('faker');
require('cypress-xpath');

describe('Value items wizard', () => {
  beforeEach(() => {
    cy.login();
    cy.wait(5000);
  });

  it('personnel value wizard', () => {
    cy.get(':nth-child(1) > a > .nav-item > .nav-link').click();
    cy.get('[data-number="0"]').click();
    cy.get('.page-tabs__tabs__tab--name').contains('Value').click();
    cy.get('.idea__value__addButton').click();
    cy.get('.input__container > input').type('personnel auto wizard');
    cy.get('.nextBtn').click();
    cy.get('.buttons__container > button:nth-child(1)').click();
    cy.get('.wizard__footer__wrapper > button:nth-child(1)').click();
    cy.get('.nextBtn').click();
    cy.get('.nextBtn').click();
    cy.get('#dropdown-basic').click();
    cy.get('[aria-labelledby="dropdown-basic"] > a:last-child').click();
    cy.get('.nextBtn').click();
    cy.get('.input__container > input').type('2');
    cy.get('.nextBtn').click();
    cy.get('.react-datepicker__input-container > input').click();
    cy.get('[aria-label="Next Month"]').click();
    cy.get('.react-datepicker__month > div:nth-child(3) > div:nth-child(2)').click();
    cy.get('.nextBtn').click();
    cy.get('.react-select__input').click();
    cy.get('.react-select__menu-list > div:nth-child(2)').click();
    cy.get('.dropdown.custom-dropdown > button').click();
    cy.get('.dropdown-menu.show > a:first-child').click();
    cy.get('.doneBtn').click();
    cy.contains('Idea position value item added successfully!').should('exist');
  });

  it('non-personnel value wizard', () => {
    cy.get(':nth-child(1) > a > .nav-item > .nav-link').click();
    cy.get('[data-number="0"]').click();
    cy.get('.page-tabs__tabs__tab--name').contains('Value').click();
    cy.get('[role="group"] > button:nth-child(2)').click();
    cy.get('.idea__value__addButton').click();
    cy.get('.input__container > input').type('non-personnel auto wizard');
    cy.get('.nextBtn').click();
    cy.get('.buttons__container > button:nth-child(2)').click();
    cy.get('.nextBtn').click();
    cy.get('.buttons__container > button:nth-child(2)').click();
    cy.get('.nextBtn').click();
    cy.get('[placeholder="eg. 20,000"]').type('400000');
    cy.get('.nextBtn').click();
    cy.get('.react-datepicker__input-container > input').click();
    cy.get('[aria-label="Next Month"]').click();
    cy.get('.react-datepicker__month > div:nth-child(3) > div:nth-child(2)').click();
    cy.get('.nextBtn').click();
    cy.get('.react-select__input').type(faker.internet.email()).type('{enter}');
    //cy.get('.react-select__menu-list > div:nth-child(2)').click();
    cy.get('.dropdown.custom-dropdown > button').click();
    cy.get('.dropdown-menu.show > a:nth-child(2)').click();
    cy.get('.doneBtn').click();
  });
});
