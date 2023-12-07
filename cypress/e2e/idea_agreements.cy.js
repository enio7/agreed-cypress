/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

import { faker } from '@faker-js/faker';

require('cypress-xpath');

describe('Invite and Remove a stakeholder', () => {
  beforeEach(() => {
    cy.login();
    cy.wait(5000);
  });

  it.skip('invite decision makers', () => {
    cy.get(':nth-child(1) > a > .nav-item > .nav-link').click();
    cy.wait(3000);
    cy.get('[data-number="0"]').click();
    cy.get('.page-tabs__tabs__tab--name').contains('Agreements').click();
    cy.get('.idea__value__btnText').click();
    cy.get('.invite-team-member-form__row > div > div > div > input').click();
    cy.get('.section__suggestions > div > ul > li:nth-child(1)').click();
    cy.get('.status-dropdown > button').click();
    cy.get('.dropdown-menu.show > a:nth-child(1)').click();
    cy.get('.submitBtn').click();
    cy.wait(2000);
    cy.get('.idea__value__btnText').click();
    cy.get('.invite-team-member-form__row > div > div > div > input').type(faker.internet.email()).type('{enter}');
    cy.get('.status-dropdown > button').click();
    cy.get('.dropdown-menu.show > a:nth-child(2)').click();
    cy.get('.submitBtn').click();
  });

  it('change phase & edit decision makers', () => {
    cy.get(':nth-child(1) > a > .nav-item > .nav-link').click();
    cy.wait(3000);
    cy.get('[data-number="0"]').click();
    cy.get('.page-tabs__tabs__tab--name').contains('Agreements').click();
    cy.get('div[data-rownumber="0"] > div.idea__agreement__phases > div:nth-child(1) > div > div > button').click();
    cy.get('.dropdown-menu.show > a:nth-child(2)').click();
    cy.wait(2000);
    cy.get('div[data-rownumber="1"] > div.idea__agreement__phases > div:nth-child(1) > div > div > button').click();
    cy.get('.dropdown-menu.show > a:nth-child(3)').click();
    cy.get('div[data-rownumber="2"] > div.idea__agreement__phases > div:nth-child(1) > div > div > button').click();
    cy.get('.dropdown-menu.show > a:nth-child(4)').click();
    cy.get('div[data-rownumber="1"] > div.idea__agreement__3dotmenu > div > button').invoke('show').click({ force: true });
  });
});
