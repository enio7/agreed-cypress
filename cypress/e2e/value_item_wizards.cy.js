/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

const faker = require('faker');
require('cypress-xpath');

describe('Value items wizard', () => {
  beforeEach(() => {
    cy.login();
    cy.wait(5000);
  });

  it('personnel value wizard', { defaultCommandTimeout: 5000 }, () => {
    cy.get('.season-dropdown.dropdown > button').click();
    cy.xpath('//div[contains(@class, "dropdown-menu show")]/a[contains(., "LIVE")]').click();
    cy.wait(5000);
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
    cy.get('#dropdown-basic').click({ force: true });
    cy.get('[aria-labelledby="dropdown-basic"] > a:last-child').click({ force: true });
    cy.get('.nextBtn').click();
    cy.get('.input__container > input').type('2');
    cy.get('.nextBtn').click();
    cy.get('.react-datepicker__input-container > input').click();
    cy.get('[aria-label="Next Month"]').click();
    cy.get('.react-datepicker__month > div:nth-child(3) > div:nth-child(2)').click();
    cy.get('.nextBtn').click();
    cy.get('input.react-select__input').type(faker.internet.email()).type('{enter}');
    cy.get('.dropdown.custom-dropdown > button').click();
    cy.get('.invite-members-selector > .dropdown > .dropdown-menu > :nth-child(1)').click({ force: true });
    cy.get('.doneBtn').click();
    cy.contains('Idea position value item added successfully!').should('exist');
  });

  it('non-personnel value wizard', { defaultCommandTimeout: 5000 }, () => {
    cy.get('.season-dropdown.dropdown > button').click();
    cy.xpath('//div[contains(@class, "dropdown-menu show")]/a[contains(., "LIVE")]').click();
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
    cy.get('.dropdown.custom-dropdown > button').click();
    cy.get('.dropdown-menu.show > a:nth-child(2)').click({ force: true });
    cy.get('.doneBtn').click();
    cy.contains('Idea position value item added successfully!').should('exist');
  });
});
