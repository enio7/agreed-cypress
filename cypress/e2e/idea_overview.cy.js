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
    cy.wait(1000);
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

  it('team members', () => {
    cy.get(':nth-child(1) > a > .nav-item > .nav-link').click();
    cy.wait(1000);
    cy.get('[data-number="0"]').click();
    cy.get('.addMember__button').click();
    cy.get(
      '.invite-team-member-form > div:nth-child(1) > div > div.row__inputsWrapper > div.email-dropdown-wrapper > div > input'
    ).type(faker.internet.email());
    cy.get(
      '.invite-team-member-form > div:nth-child(1) > div > div > div.role-dropdown > button'
    ).click();
    cy.get(
      '.dropdown-menu.show > a:nth-child(3) > div > div.role-checkbox > input'
    ).click();
    cy.get('.status-dropdown > button').click();
    cy.get('.dropdown-menu.show > a:nth-child(2)').click();
    cy.get('.add-new-row').click();
    cy.get(
      '.invite-team-member-form > div:nth-child(2) > div > div.row__inputsWrapper > div.email-dropdown-wrapper > div > input'
    ).click();
    cy.get('.section__suggestions > div > ul > li:nth-child(3)').click();
    cy.get(
      '.invite-team-member-form > div:nth-child(2) > div > div > div.role-dropdown > button'
    ).click();
    cy.get(
      '.dropdown-menu.show > a:first-child > div > div.role-checkbox > input'
    ).click();
    // cy.get(
    //   '.dropdown-menu.show > a:nth-child(2) > div > div.role-checkbox > input'
    // ).click();
    cy.get(
      '.invite-team-member-form > div:nth-child(2) > div > div > div.status-dropdown > button'
    ).click();
    cy.get('.dropdown-menu.show > a:nth-child(1)').click();
    cy.get('.modal-footer > button:nth-child(2)').click();
    cy.contains('Team successfully invited!').should('be.visible');
  });
});
