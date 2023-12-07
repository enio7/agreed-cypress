/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

import { faker } from '@faker-js/faker';
require('cypress-xpath');

describe('idea chat', () => {
  beforeEach(() => {
    cy.login();
    cy.wait(5000);
  });

  it('edit idea description', () => {
    cy.get('.season-dropdown.dropdown > button').click();
    cy.xpath('//div[contains(@class, "dropdown-menu show")]/a[contains(., "LIVE")]').click();
    cy.wait(5000);
    cy.get(':nth-child(1) > a > .nav-item > .nav-link').click();
    cy.wait(2500);
    cy.get('[data-number="0"] > div > div > div > div:nth-child(1) > div:nth-child(2) > div > div > div.three-dots-dropdown > button').click();
    cy.get('.dropdown-menu.show > a:nth-child(1)').click();
    //edit description
    cy.get('.editIdeaDescription__wrapper__inner > div.idea__titleAndDesc:nth-child(1) > input').clear().type(faker.commerce.productDescription());
    cy.get('.editIdeaDescription__wrapper__inner > div.idea__titleAndDesc:nth-child(2) > div > textarea').clear().type(faker.lorem.paragraph());
    //select phase
    cy.get('.idea__selectPhase > div.phases__container > button:nth-child(3)').click();
    cy.get('.submitBtn').click();
    cy.contains('Idea updated successfully!').should('exist');
    //value & risk
    cy.get('.idea__toggles__container > div.valueRisk__container:nth-child(1) > div:nth-child(1) > input').clear().type(faker.random.numeric(6));
    cy.get('.idea__toggles__container > div.valueRisk__container:nth-child(1) > div.toggle__switch > form > div > input').click();
    cy.contains('Idea updated successfully!').should('exist');
    cy.get('.idea__toggles__container > div.valueRisk__container:nth-child(2) > div > div > button').click();
    cy.get('.dropdown-menu.show > a:nth-child(1)').click();
    cy.get('.idea__toggles__container > div.valueRisk__container:nth-child(2) > div.toggle__switch > form > div > input').click();
    cy.contains('Idea updated successfully!').should('exist');
    //highlighted
    cy.get('.idea__toggles__container > div.highlighted__toggle > div > form > div > input').click();
    cy.contains('Idea updated successfully!').should('exist');
    //idea tags
    cy.wait(1500);
    cy.get('.idea__tags__container > div > div > div > div.agreed-tags-textarea__input-container > input').type(faker.vehicle.vehicle());
    cy.xpath('//div[contains(@id, "react-select")][contains(@id, "option")][1]').click();
    cy.contains('Tag added successfully!').should('exist');
    cy.get('.agreed-tag.default-tag').trigger('mouseover');
    cy.get('.idea__tags__container > div > div > div > div:nth-child(1) > div.agreed-tag-action-dropdown > button')
      .invoke('show')
      .click({ force: true });
    cy.get('.fade.show.dropdown-menu.dropdown-menu-end > a:nth-child(2)').click();
  });
});
