/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

const faker = require('faker');
require('cypress-xpath');

describe('Idea values', () => {
  beforeEach(() => {
    cy.login();
    cy.wait(5000);
  });

  it('creating idea for value idea testing', () => {
    cy.get('.season-dropdown.dropdown > button').click();
    cy.xpath('//div[contains(@class, "dropdown-menu show")]/a[contains(., "LIVE")]').click();
    cy.wait(2000);
    cy.get(':nth-child(1) > a > .nav-item > .nav-link').click();
    cy.xpath('//div[@class="add-new-items-dropdown dropdown"]/button').click();
    cy.get('.add-new-items-dropdown > .dropdown-menu > :nth-child(1) > .d-flex').click();
    cy.xpath('//input[@placeholder="Add a Handle (optional)"]').type('Automated Test for value items');
    cy.get(':nth-child(2) > .form-control').type(faker.lorem.paragraph());
    cy.get('.prev_next__step__btns').click();
    cy.get('.selectOptionBtns__container__inner > :nth-child(2)').click();
    cy.get('.newIdea__form__footer__container > :nth-child(2)').click();
    cy.get('.button__medium').click();
    cy.get('.newIdea__form__footer__container > :nth-child(2)').should('contain', 'Submit').click();
  });

  it('personnel value & archive', () => {
    cy.get('.season-dropdown.dropdown > button').click();
    cy.xpath('//div[contains(@class, "dropdown-menu show")]/a[contains(., "LIVE")]').click();
    cy.get(':nth-child(1) > a > .nav-item > .nav-link').click();
    cy.wait(5000);
    cy.get('[data-number="0"]').click();
    cy.get('.page-tabs__tabs__tab--name').contains('Value').click();
    cy.get('div.opportunity-table-sections > div:nth-child(1) > div > div:nth-child(2)').click();
    cy.get('div.opportunity-table-sections > div:nth-child(1) > div > div:nth-child(2) > div > div:nth-child(1)').should('contain', 'Personnel');
    cy.get('.empty-state > button').click();
    cy.get('[data-rownumber] > td > div > input').type('personnel automated');
    cy.get('[data-rownumber] > td:nth-child(2) > div > div > div > div:nth-child(1)').click();
    cy.get('[data-rownumber] > td:nth-child(3) > div > div > button').click();
    cy.get('.overlay-dropdown-filter > div > div:nth-child(3)').click();
    cy.get('[data-rownumber] > td:nth-child(4) > div > div > div > input').type('1');
    cy.get('[data-rownumber] > td:nth-child(5) > div > div > div > div > div > input').click();
    cy.get('[aria-label="Next Month"]').click();
    cy.get('.react-datepicker__month > div:nth-child(4) > div:nth-child(3)').click();
    cy.get('[role="rowgroup"] > tr:last-child > td:nth-child(6) > div > div > div > div.email-dropdown-wrapper > div > input')
      .invoke('show')
      .click({ force: true });
    cy.get('.section__body > ul > li:nth-child(3)').click();
    cy.wait(1000);
    cy.get('.modal-footer > button:nth-child(2)').click();
    cy.wait(2000);
    cy.get('[data-rownumber] > td:nth-child(7) > div > div > div').click();
    cy.get('.table-wrapper > div > table > tbody > tr > td:nth-child(8) > div > div > button').click();
    cy.get('.show.dropdown-menu > a:nth-child(3)').click();
    cy.get('.modal-footer > button:nth-child(1)').click();
    cy.wait(1000);
    cy.get('.table-wrapper > div > table > tbody > tr > td:nth-child(8) > div > div > button').click();
    cy.get('.show.dropdown-menu > a:nth-child(3)').click();
    cy.get('.modal-footer > button:nth-child(2)').click();
    cy.wait(500);
  });

  it('non-personnel value & archive', () => {
    cy.get('.season-dropdown.dropdown > button').click();
    cy.xpath('//div[contains(@class, "dropdown-menu show")]/a[contains(., "LIVE")]').click();
    cy.wait(2000);
    cy.get(':nth-child(1) > a > .nav-item > .nav-link').click();
    cy.wait(2000);
    cy.get('[data-number="0"]').click();
    cy.get('.page-tabs__tabs__tab--name').contains('Value').click();
    cy.get('div.opportunity-table-sections > div:nth-child(1) > div > div:nth-child(3)').click();
    cy.get('div.opportunity-table-sections > div:nth-child(1) > div > div:nth-child(3) > div > div:nth-child(1)').should('contain', 'Non-Personnel');
    cy.get('.empty-state > button').click();
    cy.wait(1000);
    cy.get('[data-rownumber] > td > div > input').last().type('non-personnel automated');
    cy.get('[data-rownumber] > td:nth-child(2) > div > div > div > div:nth-child(2)').click();
    cy.get('[data-rownumber] > td:nth-child(3) > div > div > div > button').click();
    cy.get('.overlay-dropdown-filter > div > div:nth-child(1)').click();
    cy.get('[data-rownumber] > td:nth-child(4) > div > div > div > input').type('200000');
    cy.get('[data-rownumber] > td:nth-child(5) > div > div > div > div > div > input').click();
    cy.get('[aria-label="Next Month"]').click();
    cy.get('.react-datepicker__month > div:nth-child(4) > div:nth-child(3)').click();
    cy.get('[role="rowgroup"] > tr:last-child > td:nth-child(7) > div > div > div > div.email-dropdown-wrapper > div > input')
      .invoke('show')
      .click({ force: true });
    cy.get('.section__body > ul > li:nth-child(3)').click();
    cy.wait(1000);
    cy.get('.modal-footer > button:nth-child(2)').click();
    cy.get('[data-rownumber] > td:nth-child(8) > div > div > div').click();
    cy.wait(1000);
    cy.get('[data-rownumber] > td:nth-child(8) > div > div > div').click();
    cy.get('.table-wrapper > div > table > tbody > tr > td:nth-child(9) > div > div > button').click();
    cy.get('.show.dropdown-menu > a:nth-child(3)').click();
    cy.get('.modal-footer > button:nth-child(2)').click();
  });

  it('revenues value & archive', () => {
    cy.get('.season-dropdown.dropdown > button').click();
    cy.xpath('//div[contains(@class, "dropdown-menu show")]/a[contains(., "LIVE")]').click();
    cy.wait(2000);
    cy.get(':nth-child(1) > a > .nav-item > .nav-link').click();
    cy.wait(3000);
    cy.get('[data-number="0"]').click();
    cy.get('.page-tabs__tabs__tab--name').contains('Value').click();
    cy.get('div.opportunity-table-sections > div:nth-child(1) > div > div:nth-child(4)').click();
    cy.get('div.opportunity-table-sections > div:nth-child(1) > div > div:nth-child(4) > div > div:nth-child(1)').should('contain', 'Revenues');
    cy.get('.empty-state > button').click();
    cy.get('[data-rownumber] > td > div > input').type('revenues automated');
    cy.get('[data-rownumber] > td:nth-child(2) > div > div > div > div:nth-child(2)').click();
    cy.get('[data-rownumber] > td:nth-child(3) > div > div > div > button').click();
    cy.get('.overlay-dropdown-filter > div > div:nth-child(2)').click();
    cy.get('[data-rownumber] > td:nth-child(4) > div > div > div > input').type('400000');
    cy.get('[data-rownumber] > td:nth-child(5) > div > div > div > input').type('20000');
    cy.get('[data-rownumber] > td:nth-child(6) > div > div > div > div > div > input').click();
    cy.get('[aria-label="Next Month"]').click();
    cy.get('.react-datepicker__month > div:nth-child(4) > div:nth-child(3)').click();
    cy.get('[data-rownumber] > td:nth-child(7) > div > div > div > div > div > input').click();
    cy.get('[aria-label="Next Month"]').click();
    cy.get('.react-datepicker__month > div:nth-child(4) > div:nth-child(6)').click();
    cy.get('[role="rowgroup"] > tr:last-child > td:nth-child(8) > div > div > div > div.email-dropdown-wrapper > div > input')
      .invoke('show')
      .click({ force: true });
    cy.get('.section__body > ul > li:nth-child(3)').click();
    cy.wait(1000);
    cy.get('.modal-footer > button:nth-child(1)').click();
    cy.wait(2000);
    cy.get('[data-rownumber] > td:nth-child(9) > div > div > div').click();
    cy.get('.table-wrapper > div > table > tbody > tr > td:nth-child(10) > div > div > button').click();
    cy.get('.show.dropdown-menu > a:nth-child(3)').click();
    cy.get('.modal-footer > button:nth-child(2)').click();
  });
});
