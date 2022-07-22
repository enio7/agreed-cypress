/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

const faker = require('faker');
require('cypress-xpath');

describe('Idea values', () => {
  beforeEach(() => {
    cy.login();
    cy.wait(5000);
  });

  it.skip('creating idea for value idea testing', () => {
    cy.get(':nth-child(1) > a > .nav-item > .nav-link').click();
    cy.xpath('//div[@class="add-new-items-dropdown dropdown"]/button').click();
    cy.get(
      '.add-new-items-dropdown > .dropdown-menu > :nth-child(1) > .d-flex'
    ).click();
    cy.xpath('//input[@placeholder="Add a Handle (optional)"]').type(
      'Automated Test for value items'
    );
    cy.get(':nth-child(2) > .form-control').type(faker.lorem.paragraph());
    cy.get('.prev_next__step__btns').click();
    cy.get('.selectOptionBtns__container__inner > :nth-child(2)').click();
    cy.get('.newIdea__form__footer__container > :nth-child(2)').click();
    cy.get('.button__medium').click();
    cy.get('.newIdea__form__footer__container > :nth-child(2)')
      .should('contain', 'Submit')
      .click();
  });

  it('personnel value & archive', () => {
    cy.get(':nth-child(1) > a > .nav-item > .nav-link').click();
    cy.get('[data-number="0"]').click();
    cy.get('.page-tabs__tabs__tab--name').contains('Value').click();
    cy.get('[role="group"] > button:nth-child(1)').should(
      'contain',
      'Personnel'
    );
    cy.get('.empty-state > button').click();
    cy.get('[data-rownumber] > td > div > input')
      .last()
      .type('personnel automated');
    cy.get(
      '[data-rownumber] > td:nth-child(2) > div > div > div > div:nth-child(1)'
    )
      .last()
      .click();
    cy.get('[data-rownumber] > td:nth-child(3) > div > div > button')
      .last()
      .click();
    cy.get('.overlay-dropdown-filter > div > div:nth-child(3)').click();
    cy.get('[data-rownumber] > td:nth-child(4) > div > div > div > input')
      .last()
      .type('1');
    cy.get(
      '[data-rownumber] > td:nth-child(5) > div > div > div > div > div > input'
    )
      .last()
      .click();
    cy.get('[aria-label="Next Month"]').click();
    cy.get('div[aria-label="Choose Saturday, August 27th, 2022"]').click();
    cy.get(
      '[role="rowgroup"] > tr:last-child > td:nth-child(6) > div > div > div > div.email-dropdown-wrapper > div > input'
    )
      .invoke('show')
      .click({ force: true });
    cy.get('.section__body > ul > li:nth-child(3)').click();
    cy.wait(2000);
    cy.get('[data-rownumber] > td:nth-child(7) > div > div > div')
      .last()
      .click();
    cy.get('[data-rownumber] > td:nth-child(8) > div > div > div > div')
      .last()
      .click();
    cy.get('.minimenu > div:nth-child(3)').click();
    cy.get('.modal-footer > button:nth-child(1)').click();
    cy.get('[data-rownumber] > td:nth-child(8) > div > div > div > div')
      .last()
      .click();
    cy.get('.minimenu > div:nth-child(3)').click();
    cy.get('.modal-footer > button:nth-child(2)').click();
  });

  it.skip('non-personnel value & archive', () => {
    cy.get(':nth-child(1) > a > .nav-item > .nav-link').click();
    cy.get('[data-number="0"]').click();
    cy.get('.page-tabs__tabs__tab--name').contains('Value').click();
    cy.get('[role="group"] > button:nth-child(2)')
      .should('contain', 'Non-Personnel')
      .click();
    cy.get('.empty-state > button').click();
    cy.get('.add-record-button').click();
    cy.wait(1000);
    cy.get('[data-rownumber] > td > div > input')
      .last()
      .type('non-personnel automated');
    cy.get(
      '[data-rownumber] > td:nth-child(2) > div > div > div > div:nth-child(2)'
    )
      .last()
      .click();
    cy.get('[data-rownumber] > td:nth-child(3) > div > div > div > button')
      .last()
      .click();
    cy.get('.overlay-dropdown-filter > div > div:nth-child(1)').click();
    cy.get('[data-rownumber] > td:nth-child(4) > div > div > div > input')
      .last()
      .type('200000');
    cy.get(
      '[data-rownumber] > td:nth-child(5) > div > div > div > div > div > input'
    )
      .last()
      .click();
    cy.get('[aria-label="Next Month"]').click();
    cy.get('div[aria-label="Choose Saturday, August 27th, 2022"]').click();
    cy.get('[data-rownumber] > td:nth-child(7) > div > div > div >div > input')
      .last()
      .type('enio');
    cy.get('.dropdown-position > div:nth-child(1)').click();
    cy.wait(3000);
    cy.get('[data-rownumber] > td:nth-child(8) > div > div > div')
      .last()
      .click();
    cy.get('[data-rownumber] > td:nth-child(9) > div > div > div > div')
      .last()
      .click();
    cy.get('.minimenu > div:nth-child(3)').click();
    cy.get('.modal-footer > button:nth-child(1)').click();
    cy.get('[data-rownumber] > td:nth-child(9) > div > div > div > div')
      .last()
      .click();
    cy.get('.minimenu > div:nth-child(3)').click();
    cy.get('.modal-footer > button:nth-child(2)').click();
  });

  it.skip('revenues value & archive', () => {
    cy.get(':nth-child(1) > a > .nav-item > .nav-link').click();
    cy.get('[data-number="0"]').click();
    cy.get('.page-tabs__tabs__tab--name').contains('Value').click();
    cy.get('[role="group"] > button:nth-child(3)')
      .should('contain', 'Revenues')
      .click();
    cy.get('.empty-state > button').click();
    cy.get('[data-rownumber] > td > div > input')
      .last()
      .type('revenues automated');
    cy.get(
      '[data-rownumber] > td:nth-child(2) > div > div > div > div:nth-child(2)'
    )
      .last()
      .click();
    cy.get('[data-rownumber] > td:nth-child(3) > div > div > div > button')
      .last()
      .click();
    cy.get('.overlay-dropdown-filter > div > div:nth-child(2)').click();
    cy.get('[data-rownumber] > td:nth-child(4) > div > div > div > input')
      .last()
      .type('400000');
    cy.get('[data-rownumber] > td:nth-child(5) > div > div > div > input')
      .last()
      .type('20000');
    cy.get(
      '[data-rownumber] > td:nth-child(6) > div > div > div > div > div > input'
    )
      .last()
      .click();
    cy.get('[aria-label="Next Month"]').click();
    cy.get('div[aria-label="Choose Saturday, August 27th, 2022"]').click();
    cy.get(
      '[data-rownumber] > td:nth-child(7) > div > div > div > div > div > input'
    )
      .last()
      .click();
    cy.get('[aria-label="Next Month"]').click();
    cy.get('div[aria-label="Choose Tuesday, August 30th, 2022"]').click();
    cy.get('[data-rownumber] > td:nth-child(8) > div > div > div >div > input')
      .last()
      .type('enio');
    cy.get('.dropdown-position > div:nth-child(1)').click();
    cy.wait(2000);
    cy.get('[data-rownumber] > td:nth-child(9) > div > div > div')
      .last()
      .click();
    cy.get('[data-rownumber] > td:nth-child(10) > div > div > div > div')
      .last()
      .click();
    cy.get('.minimenu > div:nth-child(3)').click();
    cy.get('.btn-close').click();
    cy.get('[data-rownumber] > td:nth-child(10) > div > div > div > div')
      .last()
      .click();
    cy.get('.minimenu > div:nth-child(3)').click();
    cy.get('.modal-footer > button:nth-child(2)').click();
  });
});
