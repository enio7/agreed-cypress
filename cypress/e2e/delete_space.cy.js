/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

require('cypress-xpath');

describe('Delete a space', () => {
  beforeEach(() => {
    cy.login();
    cy.wait(5000);
  });

  it('Delete space from spaces list', () => {
    cy.get('.season-dropdown.dropdown > button').click();
    cy.xpath('//div[contains(@class, "dropdown-menu show")]/a[contains(., "LIVE")]').click();
    cy.get('.nav-link__name-icon').click();
    cy.xpath('//div[@class="dropdown-menu show dropdown-menu-end"]/a[1]/div').click();
    cy.xpath('//tbody[@role="rowgroup"]/tr[last()]/td[5]/div/div/div/button').click();
    cy.xpath('//div[@class="dropdown-menu show dropdown-menu-end"]/a[4]/div').click();
    cy.xpath('//button[@class="btn btn-secondary"]').click();
    cy.xpath('//tbody[@role="rowgroup"]/tr[last()]/td[5]/div/div/div/button').click();
    cy.xpath('//div[@class="dropdown-menu show dropdown-menu-end"]/a[4]/div').click();
    cy.get('.leaveBtn').click();
    cy.contains('Space successfully deleted!').should('exist');
  });

  it('delete a space from space settings', () => {
    cy.get('.season-dropdown.dropdown > button').click();
    cy.xpath('//div[contains(@class, "dropdown-menu show")]/a[contains(., "LIVE")]').click();
    cy.xpath('//ul[@class="sidebar__spaces-list"]/li[last()]').click();
    cy.xpath('//div[@class="page-tabs__right"]/div/div[2]/button').click();
    cy.xpath('//p[@class="dropdown-add-item"][contains(., "Space Settings")]').click();
    cy.get('.card-delete-body__right > .btn').click();
    cy.get('.modal-footer > :nth-child(1)').click();
    cy.get('.card-delete-body__right > .btn').click();
    cy.get('.leaveBtn').click();
    cy.contains('Space successfully deleted!').should('be.visible');
  });
});
