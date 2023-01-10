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
    cy.get('.season-dropdown.dropdown > button').click();
    cy.xpath('//div[contains(@class, "dropdown-menu show")]/a[contains(., "LIVE")]').click();
    cy.get(':nth-child(1) > a > .nav-item > .nav-link').click();
    cy.wait(2000);
    cy.get('[data-number="0"]').click();
    cy.get('.page-tabs__tabs__tab--name').contains('Value').click();
    cy.get('div.opportunity-table-sections > div:nth-child(1) > div > div:nth-child(4)').click();
    cy.get('div.opportunity-table-sections > div:nth-child(1) > div > div:nth-child(4) > div > div:nth-child(1)').should('contain', 'Revenues');
    cy.get('.idea__value__addButton').click();
    cy.get('.category__wrapper > input').type('revenues auto wizard');
    cy.get('.nextBtn').click();
    cy.get('.addOrSubtract__wrapper > button:nth-child(2)').click();
    cy.get('.nextBtn').click();
    cy.get('.buttons__container > button:first-child').click();
    cy.get('.nextBtn').click();
    cy.get('[placeholder="eg. 20,000"]').type('1000000');
    cy.get('.nextBtn').click();
    cy.wait(1000);
    cy.get('.input__container > div > div > input').type('20000');
    cy.get('.nextBtn').click();
    cy.get('div:nth-child(1) > div > div > div > div > input').click();
    cy.get('[aria-label="Next Month"]').click();
    cy.get('.react-datepicker__month > div:nth-child(3) > div:nth-child(2)').click();
    cy.get('div:nth-child(2) > div > div > div > div > input').click();
    cy.get('[aria-label="Next Month"]').click();
    cy.get('.react-datepicker__month > div:nth-child(3) > div:nth-child(2)').click();
    cy.get('.nextBtn').click();
    cy.get('.react-select__input').click();
    cy.get('.react-select__option:nth-child(1)').click();
    cy.get('.dropdown.custom-dropdown > button').click();
    cy.get('.invite-members-selector > .dropdown > .dropdown-menu > :nth-child(1)').click({ force: true });
    cy.get('.doneBtn').click();
    cy.contains('Idea position value item added successfully!').should('exist');
  });
});
