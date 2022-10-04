/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

import { faker } from '@faker-js/faker';

require('cypress-xpath');

describe('Create new spaces', () => {
  beforeEach('login', () => {
    cy.login();
    cy.wait(5000);
  });

  it('New space from homepage', () => {
    cy.get('.season-dropdown.dropdown > button').click();
    cy.xpath('//div[contains(@class, "dropdown-menu show")]/a[contains(., "LIVE")]').click();
    cy.get('.nav-link__name-icon').click();
    cy.xpath('//div[@class="dropdown-menu show dropdown-menu-end"]/a[2]/div').click;
    cy.visit('/workspaces/24/space/new');
    cy.wait(2000);
    cy.get('[placeholder="Ex. Marketing"]').type(faker.company.companyName());
    cy.get('[placeholder="Add Description"]').type(faker.lorem.sentences());
    cy.get('.react-select__input').type(faker.internet.email()).type('{enter}');
    cy.get('#dropdown-basic').click();
    cy.get('div.dropdown-menu.show > a:nth-child(2)').click().should('contain', 'User');
    cy.get('.addAnotherUserBtn-extras').click();
    cy.xpath('//div[@class="selector-wrapper false"]/div[last()]/section/div/div/div/div[2]/input').type(faker.internet.email()).type('{enter}');
    cy.get('.selector-wrapper > div:nth-child(2) >section > div:nth-child(2) > button').click();
    cy.get('div.dropdown-menu.show > a:nth-child(1)').click().should('contain', 'Admin');
    cy.get('#privacy-private-input').click();
    cy.get('#privacy-public-input').click();
    cy.get('section.section-footer > button').click();

    cy.get('.space-title').should('be.visible');
  });

  it('create new space from admin panel', () => {
    cy.get('.season-dropdown.dropdown > button').click();
    cy.xpath('//div[contains(@class, "dropdown-menu show")]/a[contains(., "LIVE")]').click();
    cy.get('.navbar-actions > :nth-child(2)').click();
    cy.get('a:nth-child(2) > div > div > div.profile-dropdown-item-info').click();
    cy.get('[href="/admin/spaces"] > .page-tabs__tabs__tab > .page-tabs__tabs__tab--name').click();
    cy.get('.add-new-members').click();
    cy.get('[placeholder="Ex. Marketing"]').type(faker.company.companyName());
    cy.get('[placeholder="Add Description"]').type(faker.lorem.sentences());
    cy.get('.react-select__input').type(faker.internet.email()).type('{enter}');
    cy.get('#dropdown-basic').click();
    cy.get('div.dropdown-menu.show > a:nth-child(2)').click().should('contain', 'User');
    cy.get('.addAnotherUserBtn-extras').click();
    cy.xpath('//div[@class="selector-wrapper false"]/div[last()]/section/div/div/div/div[2]/input').type(faker.internet.email()).type('{enter}');
    cy.get('.selector-wrapper > div:nth-child(2) >section > div:nth-child(2) > button').click();
    cy.get('div.dropdown-menu.show > a:nth-child(1)').click().should('contain', 'Admin');
    cy.get('#privacy-secret-input').click();
    cy.get('#privacy-public-input').click();
    cy.get('section.section-footer > button').click();

    cy.get('.space-title').should('be.visible');
  });
});
