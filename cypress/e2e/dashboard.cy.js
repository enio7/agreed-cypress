/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

import { faker } from '@faker-js/faker';
require('cypress-xpath');

describe('Worksapce settings', () => {
  beforeEach(() => {
    cy.login();
    cy.wait(5000);
  });

  it('worksapce dashboard', () => {
    cy.get('.season-dropdown.dropdown > button').click();
    cy.xpath('//div[contains(@class, "dropdown-menu show")]/a[contains(., "LIVE")]').click();
    cy.get('.sidebar > div:nth-child(4) > a').click();
    cy.get('.dashboard-page-container > div > div > div.text-container').should('be.visible');
  });
});
