/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

require('cypress-xpath');
import { faker } from '@faker-js/faker';

describe('Space settings', () => {
  beforeEach(() => {
    cy.login();
    cy.wait(5000);
  });

  it('space settings', () => {
    cy.xpath('//ul[@class="sidebar__spaces-list"]/li[last()]').click();
    cy.xpath('//div[@class="page-tabs__right"]/div/div[2]/button').click();
    cy.xpath('//p[@class="dropdown-add-item"][contains(., "Space Settings")]').click();
    cy.xpath('//input[@name="name"]').clear().type(faker.company.companyName());
    cy.get('[placeholder="Add Description (optional)"').clear().type(faker.lorem.sentences());
    cy.get('.spaces-page__settings > div:nth-child(1) > div:nth-child(3) > button:nth-child(1)').click();
    cy.xpath('//input[@name="name"]').clear().type(faker.company.companyName());
    cy.get('[placeholder="Add Description (optional)"').clear().type(faker.lorem.sentences());
    cy.get('.spaces-page__settings > div:nth-child(1) > div:nth-child(3) > button:nth-child(2)').click();
    cy.contains('Space successfully updated!').should('exist');
    cy.get('#privacy-private').click();
    cy.get('.spaces-page__settings > div:nth-child(2) > div:nth-child(3) > button:nth-child(1)').click();
    cy.get('#privacy-secret').click();
    cy.get('.spaces-page__settings > div:nth-child(2) > div:nth-child(3) > button:nth-child(2)').click();
    cy.contains('Space successfully updated!').should('exist');
    cy.get('#privacy-public').click();
    cy.get('.spaces-page__settings > div:nth-child(2) > div:nth-child(3) > button:nth-child(2)').click();
  });
});
