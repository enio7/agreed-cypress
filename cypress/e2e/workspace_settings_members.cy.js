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
    cy.get('[role="rowgroup"] > tr:last-child > td:nth-child(3) > div > div > div > button> span').should('contain', 'Admin');
    // cy.get('[data-rownumber="1"] > td:nth-child(6) > div > div > div > button').click()
    // cy.get('.dropdown-menu.show > a:nth-child(1)').click()
    //cy.get('[role="rowgroup"] > tr:first-child > td:nth-child(3) > div > div > div > button> span').should('contain', 'Admin');
    cy.get('.custom-dropdown.account-type > button').click();
    cy.get('.dropdown-menu.show > a:nth-child(1)').click();
    cy.get('[data-rownumber="0"] > td:nth-child(4) > div > div > input').clear().type(faker.name.jobTitle());
    cy.get('[data-rownumber="0"] > td:nth-child(5) > div > div').click();
    cy.get('.header-title > span:nth-child(2)').should('contain', 'Access List');
    cy.get('.modal-body').scrollTo('bottom');
    cy.get('.modal-footer > button').click();
    cy.get('[data-rownumber="3"] > td:nth-child(6) > div > div > div > button').click();
    cy.get('.dropdown-menu.show > a:nth-child(1)').click();
    cy.get('[data-rownumber="3"] > td:nth-child(6) > div > div > div > button').click();
    cy.get('.dropdown-menu.show > a:nth-child(2)').click();
    cy.get('.leaveBtn').click();
    //searching
    cy.get('.search > input').type('enio');
    cy.get('[data-rownumber="0"] > td:nth-child(2) > div > div > div').should('contain', 'enio');
    cy.get('.search > input').clear();
    //approvals
    cy.get('.members-button-tab > div:nth-child(2) > button').click();
    cy.get('[data-rownumber="0"] > td:nth-child(2) > div > div > div:nth-child(1)').click();
    cy.wait(2000);
    cy.get('[data-rownumber="0"] > td:nth-child(2) > div > div > div:nth-child(2)').click();
  });
});
