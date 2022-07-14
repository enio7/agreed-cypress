/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

const faker = require('faker');
require('cypress-xpath');

describe('Idea Overview tab', () => {
  beforeEach(() => {
    cy.login();
    cy.wait(5000);
  });

  it('overview first section', () => {
    cy.get(':nth-child(1) > a > .nav-item > .nav-link').click();
    cy.get('[data-number="0"]').click();
    cy.get('.problem-approach__container > div:nth-child(1) > textarea')
      .clear()
      .type(faker.lorem.sentences());
    cy.get('.problem-approach__container > div:nth-child(2) > textarea')
      .clear()
      .type(faker.lorem.words());
    cy.get('.idea__details__container').click();
    cy.contains('Idea updated successfully!').should('exist');
    cy.get('.overview__values__container > a:nth-child(1)').click();
    cy.url().should('include', '/value/positions');
    cy.get('.page-tabs__tabs__tab--name').contains('Overview').click();
    cy.get('.overview__values__container > a:nth-child(2)').click();
    cy.url().should('include', '/value/expenses');
    cy.get('.page-tabs__tabs__tab--name').contains('Overview').click();
    cy.get('.overview__values__container > a:nth-child(3)').click();
    cy.url().should('include', '/value/revenue');
    cy.get('.page-tabs__tabs__tab--name').contains('Overview').click();
  });

  it.skip('team members', () => {
    cy.get(':nth-child(1) > a > .nav-item > .nav-link').click();
    cy.get('[data-number="0"]').click();
    cy.get('.addMember__button').click();
    cy.get('.react-select__input').click();
    cy.get('.react-select__menu-list > div:nth-child(1)').click();
    cy.get('.react-select__input').click();
    cy.get('.react-select__menu-list > div:nth-child(1)').click();
    cy.get('.btn-primary').click();
    cy.contains('Team Member added successfully!').should('exist');
    cy.get('div.idea__team__avatars > div:nth-child(2) > div').click();
    cy.get(
      '.overlay-dropdown-member-body > div > div > div:nth-child(1) > div'
    ).click();
    cy.wait(3000);
    cy.get(
      '.overlay-dropdown-member-body > div > div > div:nth-child(3) > div'
    ).click();
    cy.contains('Member updated successfully!').should('exist');
    cy.get(
      '.overlay-dropdown-member-body > div > div > div:nth-child(3) > div'
    ).click();
  });
});
