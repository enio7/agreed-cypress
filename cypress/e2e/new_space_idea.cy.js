/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

import {faker} from '@faker-js/faker';
//const faker = require('faker');
require('cypress-xpath');

describe('Create a new idea', () => {
  beforeEach('login', () => {
    cy.login();
    cy.wait(5000);
  });

  it('Add new idea through space', () => {
    cy.wait(3000);
    cy.get(':nth-child(1) > a > .nav-item > .nav-link').click();
    cy.xpath('//div[@class="add-new-items-dropdown dropdown"]/button').click();
    cy.get(
      '.add-new-items-dropdown > .dropdown-menu > :nth-child(1) > .d-flex'
    ).click();
    cy.xpath('//input[@placeholder="Add a Handle (optional)"]').type(faker.commerce.productName()
    );
    cy.get(':nth-child(2) > .form-control').type(faker.lorem.paragraph(2));
    cy.get('.prev_next__step__btns').click();
    cy.get('.selectOptionBtns__container__inner > :nth-child(2)').click();
    cy.get('.newIdea__form__footer__container > :nth-child(2)').click();
    cy.get('.button__medium').click();
    cy.get('.newIdea__form__footer__container > :nth-child(2)')
      .should('contain', 'Submit')
      .click();
    cy.contains('Idea created successfully!').should('exist');
  });

  it.skip('add a new idea through homepage', () => {
    cy.xpath('//p[@class="mb-0"][contains(., "Add New Idea")]').click();
    cy.get(
      '.search-space > .search-space > div > div > div:nth-of-type(1) > div:nth-of-type(2)'
    ).click();
    cy.xpath(
      '//div[contains(@id,"react-select")][contains(@id,"option")][1]'
    ).click();
    cy.get('.next-button').click();
    cy.xpath('//input[@placeholder="Add a Handle (optional)"]').type(
      'Automated Test'
    );
    cy.get(':nth-child(2) > .form-control').type(faker.lorem.paragraphs());
    cy.get('.prev_next__step__btns').click();
    cy.get('.selectOptionBtns__container__inner > :nth-child(2)').click();
    cy.get('.newIdea__form__footer__container > :nth-child(2)').click();
    cy.get('.button__medium').click();
    cy.get('.newIdea__form__footer__container > :nth-child(2)')
      .should('contain', 'Submit')
      .click();
    cy.contains('Idea created successfully!').should('exist');
  });

  it.skip('idea is created', () => {
    cy.get(':nth-child(1) > a > .nav-item > .nav-link').click();
    cy.get('[data-number="0"] > .idea-card')
      .should('contain', 'Automated Test')
      .and('contain', '$25K')
      .and('contain', 'medium');
  });
});
