/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

import { faker } from '@faker-js/faker';
require('cypress-xpath');

describe('idea chat', () => {
  beforeEach(() => {
    cy.login();
    cy.wait(5000);
  });

  it('new tab', () => {
    cy.get('.season-dropdown.dropdown > button').click();
    cy.xpath('//div[contains(@class, "dropdown-menu show")]/a[contains(., "LIVE")]').click();
    cy.get('.profile-dropdown > button').click();
    cy.get('.dropdown-menu.show > a:nth-child(3)').click();
    cy.get('.workspace-settings-accordion > div:nth-child(13)').click();
    cy.get('.anonymous-idea-container > div:nth-child(1) > div.edit-item-content > div > div > div > input').click();
    cy.get('.anonymous-idea-container > div:nth-child(2) > div.edit-item-content > div > div > div > input').click();
    cy.get('.anonymous-idea-container > div:nth-child(3) > div.edit-item-content > div:nth-child(1) > div > input').click();
    cy.get('.anonymous-idea-container > div:nth-child(3) > div.edit-item-content > div:nth-child(5) > div > input').click();
    cy.get('.anonymous-idea-container > div:nth-child(3) > div.edit-item-content > div:nth-child(6) > div > input').click();
    cy.get('.anonymous-idea-container > div:nth-child(3) > div.edit-item-content > div:nth-child(7) > div > input').click();
    cy.get('.anonymous-idea-button > button:nth-child(2)').click();
    cy.get('.sidebar__spaces-list > li:nth-child(1) > a').click();
    cy.wait(6000);
    cy.get('.add-new-items-dropdown > button').click();
    cy.get('.dropdown-menu.show > a:nth-child(3)').click();
    cy.get('.anonymous-idea-modal-button-regenerate').click();
    cy.get('.anonymous-idea-modal-input > input').then(($temp) => {
      const text = $temp.text();
      cy.visit(`${text}`);
    });

    // const text = 'https://app.agreed.io/anonymous-ideas/3sjjzFj7q9zYYvEe';
    // cy.visit(`${text}`);
  });
});
