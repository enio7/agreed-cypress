/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

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
    cy.get('.link-container').click();
    cy.wait(1000);
    cy.get('.apexcharts-yaxis-texts-g > text:first-child > tspan').click();
    cy.get('.top-ideas-container > h2').should('be.visible');
  });
});
