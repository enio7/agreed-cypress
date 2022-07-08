/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

const faker = require('faker');
require('cypress-xpath');

describe('Multiselection options', () => {
  beforeEach(() => {
    cy.login();
    cy.wait(5000);
  });

  it('archive idea', () => {
    cy.get(':nth-child(2) > a > .nav-item > .nav-link').click();
    cy.wait(1000);
    cy.get('.page-content').scrollTo('bottom');
    cy.get(
      '.row-body__main > div:last-child > div > div > div > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)'
    ).invoke('show');
    cy.get(
      '.row-body__main > div:last-child > .idea-card > :nth-child(1) > :nth-child(1) > .card-title > .flex-grow-1 > .checkBox-container > .idea-card-check-box > div > .form-check-input'
    ).click();
    cy.get(
      '.idea-filters > div:nth-child(2) > div > svg[data-for="archiveTip"]'
    ).click();
    cy.get('.modal-footer > button:nth-child(2)').click();
  });

  it.skip('change phase', () => {
    cy.get(':nth-child(2) > a > .nav-item > .nav-link').click();
    cy.wait(1000);
    cy.get('.page-content').scrollTo('bottom');
    cy.get(
      '.row-body__main > div:last-child > div > div > div > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)'
    ).invoke('show');
    cy.get(
      '.row-body__main > div:last-child > .idea-card > :nth-child(1) > :nth-child(1) > .card-title > .flex-grow-1 > .checkBox-container > .idea-card-check-box > div > .form-check-input'
    ).click();
    cy.get(
      '.idea-filters > div:nth-child(2) > div.move-phase-action-dropdown'
    ).click();
    cy.get('.show.dropdown > div > div').trigger('mouseover');
    cy.get('.dropend > .dropdown-menu').invoke('show');
  });

  it('calculated value', () => {
    cy.get(':nth-child(2) > a > .nav-item > .nav-link').click();
    cy.wait(1000);
    cy.get('.page-content').scrollTo('bottom');
    cy.get(
      '.row-body__main > div:last-child > div > div > div > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)'
    ).invoke('show');
    cy.get(
      '.row-body__main > div:last-child > .idea-card > :nth-child(1) > :nth-child(1) > .card-title > .flex-grow-1 > .checkBox-container > .idea-card-check-box > div > .form-check-input'
    ).click();
    cy.get('.idea-filters > div:nth-child(2) > div:nth-child(5)').click();
    cy.get('.modal-footer > button:nth-child(2)').click();
    cy.get(
      '[data-number="0"] > div > div > div > div.valuesTags__container > div:nth-child(1) > div > div > p.estimated-value-card__title'
    ).should('contain', 'calculated value');
  });

  it('weighted risk', () => {
    cy.get(':nth-child(2) > a > .nav-item > .nav-link').click();
    cy.wait(1000);
    cy.get('.page-content').scrollTo('bottom');
    cy.get(
      '.row-body__main > div:last-child > div > div > div > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)'
    ).invoke('show');
    cy.get(
      '.row-body__main > div:last-child > .idea-card > :nth-child(1) > :nth-child(1) > .card-title > .flex-grow-1 > .checkBox-container > .idea-card-check-box > div > .form-check-input'
    ).click();
    cy.get('.idea-filters > div:nth-child(2) > div:nth-child(7)').click();
    cy.get('.modal-footer > button:nth-child(2)').click();
    cy.get(
      '[data-number="0"] > div > div > div > div.valuesTags__container > div:nth-child(1) > div > div > p.estimated-risk-card__title'
    ).should('contain', 'weighted risk');
  });

  it('tags', () => {
    cy.get(':nth-child(2) > a > .nav-item > .nav-link').click();
    cy.wait(1000);
    cy.get('.idea-filters > div:nth-child(2) > div:nth-child(1)').click();
    cy.get('.idea-filters > div:nth-child(2) > div:nth-child(9)').click();
    cy.get('[role="menu"] > input.tag-search-input')
      .type(faker.internet.color())
      .type('{enter}');
    cy.wait(2000);
    cy.contains('Tag added successfully').should('be.visible');
    cy.get('.tag-container').trigger('mouseover');
    cy.get('.tag-actions').invoke('show');
    cy.get('.tag-actions > :nth-child(1)').click();
    cy.get('.tag-input').clear().type(faker.internet.color());
    cy.get('.tag-actions-delete').click();
  });
});
