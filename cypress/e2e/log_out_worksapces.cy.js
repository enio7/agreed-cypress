/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

describe('Log Out from non active workspace', () => {
  beforeEach(() => {
    cy.login();
    cy.wait(5000);
  });

  it('log out from workspace dropdown', () => {
    cy.get('.season-dropdown > button').click();
    cy.get('.dropdown-menu.show > a:nth-last-child(2)').trigger('mouseover');
    cy.get('.dropdown-menu.show > a:nth-last-child(2) > div > button').invoke('show').click({ force: true });
    cy.get('.submitBtn').click();
  });

  it('choose other workspaces', () => {
    cy.get('.season-dropdown > button').click();
    cy.get('.add-workspace').click();
    cy.wait(3000);
    cy.get('.join-workspaces-list > div:nth-last-child(3) > div > div > input').click();
    cy.get('.join-workspaces-list > div:nth-last-child(4) > div > div > input').click();
    cy.get('.join-workspaces-list > div:nth-last-child(3) > div > div > input').click();
    cy.get('.join-workspaces-list > div:nth-last-child(5) > div > div > input').click();
    cy.get('.join-workspaces-list > div:nth-last-child(6) > div > div > input').click();
    cy.get('.selected-workspaces-list  > div.single-workspace-option > div > svg').click();
    cy.wait(4000);
    cy.get('.background').should('exist');
  });
});
