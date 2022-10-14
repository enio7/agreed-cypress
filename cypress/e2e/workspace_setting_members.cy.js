/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

const faker = require('faker');
require('cypress-xpath');

describe('Inviting a new member to workspace', () => {
  beforeEach(() => {
    cy.login();
    cy.wait(5000);
  });

  it('Workspace members', () => {
    cy.get('.season-dropdown.dropdown > button').click();
    cy.xpath('//div[contains(@class, "dropdown-menu show")]/a[contains(., "LIVE")]').click();
    cy.get('.profile-dropdown > button').click();
    cy.get('.dropdown-menu.show > a:nth-child(3)').click();
    cy.get('.page-tabs__tabs__tab--name').contains('Members').click();
    cy.get('.custom-dropdown.account-type > button').click();
    cy.get('.dropdown-menu.show > a:nth-child(2)').click();
    cy.get('[data-rownumber="0"] > td:nth-child(3) > div > div > div > button > span').should('contain', 'Admin');
    cy.get('[role="rowgroup"] > tr:last-child > td:nth-child(3) > div > div > div > button> span').should('contain', 'Admin'); //continue
  });
});
