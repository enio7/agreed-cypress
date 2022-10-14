/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

require('cypress-xpath');

describe('New event idea', () => {
  beforeEach(() => {
    cy.login();
    cy.wait(5000);
  });

  it('event idea', { defaultCommandTimeout: 5000 }, () => {
    cy.get('.season-dropdown.dropdown > button').click();
    cy.xpath('//div[contains(@class, "dropdown-menu show")]/a[contains(., "LIVE")]').click();
    cy.get(':nth-child(1) > a > .nav-item > .nav-link').click();
    cy.get('.page-tabs__tabs__tab--name').contains('Events').click();
    cy.get(
      '.events-list__body > div:nth-child(1) > div > div > div:nth-child(2) > div:nth-child(1) > div > div:nth-child(2) > div.event-item__content'
    ).click();
    cy.get('.add-idea').click();
    cy.wait(1500);
    cy.get('.content__body > div:nth-child(1) > div > div > textarea').type('New event idea description - automated');
    cy.get('.content__body > div:nth-child(1) > div > div:nth-child(2) > div:nth-child(1) > div > div:nth-child(2) > button').click();
    cy.get('.content__body > div:nth-child(1) > div > div:nth-child(2) > div:nth-child(1) > div > div:nth-child(2) > div > a:nth-child(3)').click();
    cy.wait(5000);
    cy.get('.content__body > div:nth-child(1) > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(2) > button').click();
    cy.get('.content__body > div:nth-child(1) > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(2) > div > a:nth-child(2)').click();
    cy.get('div.row.align-items-center > div.col.leader > div > div > button > div > div').click();
    cy.xpath('//div[contains(@id, "react-select")][contains(@id, "option")][1]').click();
    cy.get('.idea-item:nth-child(1) > button.submit-btn').click();
    cy.contains('Idea submitted!').should('exist');
  });

  it.skip('delete event idea', () => {
    cy.get(':nth-child(1) > a > .nav-item > .nav-link').click();
    cy.get('.page-tabs__tabs__tab--name').contains('Events').click();
    cy.get('.events-list__body > div:nth-child(1) > div.event-item > div > div:nth-child(2) > div > div > div > div.event-item__content').click();
    cy.get('.idea-item:nth-child(1) > div > button.btn-link').click();
    cy.get('.dropdown-menu.show > a.dropdown-item').click();
  });
});
