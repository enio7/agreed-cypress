/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

import { faker } from '@faker-js/faker';
require('cypress-xpath');

describe('idea chat', () => {
  beforeEach(() => {
    cy.login();
    cy.wait(5000);
  });

  it('idea chat modal in card view', () => {
    cy.get('.season-dropdown.dropdown > button').click();
    cy.xpath('//div[contains(@class, "dropdown-menu show")]/a[contains(., "LIVE")]').click();
    cy.wait(5000);
    cy.get(':nth-child(1) > a > .nav-item > .nav-link').click();
    cy.get('[data-number="0"] > div > div > div > div:nth-child(3) > div.card-idea-chat > button').click();
    cy.get('.idea-chat-list > div:first-child > div:nth-child(2) > div > div > div > div > textarea').type(faker.music.songName());
    cy.get('.idea-chat-item-row--footer > div > button.post-btn').click();
    cy.get('.idea-chat-list > div:first-child > div.idea-chat-item-row--header > div.chat-item-action-menu > button').click();
    cy.get('.dropdown-menu.show > a:first-child').click();
    cy.get('.idea-chat-list > div:first-child > div:nth-child(2) > div > div > div > div > textarea').clear().type(faker.lorem.paragraph());
    cy.get('.update-btn').click();
  });
});
