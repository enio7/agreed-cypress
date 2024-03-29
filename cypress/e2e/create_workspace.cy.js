/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

//const faker = require('faker');
import { faker } from '@faker-js/faker';
require('cypress-xpath');

describe('Create new Workspace', () => {
  beforeEach('login', () => {
    cy.login();
    cy.wait(5000);
  });

  it('new workspace', () => {
    cy.xpath('//div[@class="season-dropdown dropdown"]/button').click();
    cy.xpath('//p[contains(text(), "Add Workspace")]').click();
    cy.wait(3000);
    cy.get('.create-workspace-btn').click();
    cy.wait(2500);
    cy.get('.form-control').type(faker.lorem.words());
    cy.get('.create-workspace-submiter').click();
    cy.get('.react-select__input').type(faker.internet.email()).type('{enter}');
    cy.get('#dropdown-basic').click();
    cy.get('div.dropdown-menu.show > a:nth-child(2)').click().should('contain', 'User');
    cy.get('.addAnotherUserBtn-extras').click();
    cy.xpath('//div[@class="selector-wrapper false"]/div[last()]/section/div/div/div/div[2]/input').type(faker.internet.email()).type('{enter}');
    cy.get('.selector-wrapper > div:nth-child(2) >section > div:nth-child(2) > button').click();
    cy.get('div.dropdown-menu.show > a:nth-child(1)').should('contain', 'Admin').click();
    cy.get('.create-workspace-submiter').click();
    cy.wait(2000);

    const ImageFile = 'photo.jpeg';
    cy.get('input[type="file"]').attachFile(ImageFile);
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false; // does not fail the test when uploaing, CORS error exception
    });
    cy.get('.section-footer > button:nth-child(1)').click();

    cy.get('.background').should('be.visible');
  });
});
