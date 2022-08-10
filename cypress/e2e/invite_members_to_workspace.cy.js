/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

const faker = require('faker');
require('cypress-xpath');

describe('Inviting a new member to workspace', () => {
  beforeEach(() => {
    cy.login();
    cy.wait(5000);
  });

  it('inviting a member to workspace through homepage', () => {
    cy.xpath('//div[@class="season-dropdown dropdown"]/button').click();
    cy.get('.dropdown-menu.show > a:nth-child(2)').click();
    cy.get(
      'div > div.col-12 > div.row > div:nth-child(2) > div.row > div > div:nth-child(1)'
    ).click();
    cy.xpath('//input[contains(@id, "react-select")][contains(@id, "input")]')
      .type(faker.internet.email())
      .type('{enter}');
    cy.get('.dropdown > #dropdown-basic').click();
    cy.get('div.dropdown-menu.show > a:nth-child(2)')
      .should('contain', 'User')
      .click();
    //2nd user
    cy.get('.addAnotherUserBtn-extras').click();
    cy.xpath(
      '//div[@class="selector-wrapper false"]/div[last()]/section/div/div/div/div[2]/input'
    )
      .type(faker.internet.email())
      .type('{enter}');
    cy.get(
      '.selector-wrapper > div:last-child > section > div:last-child > #dropdown-basic'
    ).click();
    cy.get('div.dropdown-menu.show > a:nth-child(2)')
      .should('contain', 'User')
      .click();
    //3rd user
    cy.get('.addAnotherUserBtn-extras').click();
    cy.xpath(
      '//div[@class="selector-wrapper false"]/div[last()]/section/div/div/div/div[2]/input'
    )
      .type(faker.internet.email())
      .type('{enter}');
    cy.get(
      '.selector-wrapper > div:last-child > section > div:last-child > #dropdown-basic'
    ).click();
    cy.get('div.dropdown-menu.show > a:nth-child(1)')
      .should('contain', 'Admin')
      .click();
    cy.get('.selector-wrapper-inner:nth-child(2) > button.btn-close').click();
    cy.get('.submitBtn').click();
    cy.get('.modal-content').should('not.exist');
  });

  it('invite members to workspace through workspace members table', () => {
    cy.get('.navbar-actions > :nth-child(2)').click();
    cy.get(
      ':nth-child(2) > .align-items-center > .d-flex > .profile-dropdown-item-info'
    ).click();
    cy.get('.add-new-members').click();
    cy.xpath('//input[contains(@id, "react-select")][contains(@id, "input")]')
      .type(faker.internet.email())
      .type('{enter}');
    cy.get(
      '.selector-wrapper > div:last-child > section > div:last-child > #dropdown-basic'
    ).click();
    cy.get('div.dropdown-menu.show > a:nth-child(2)')
      .should('contain', 'User')
      .click();
    //2nd user
    cy.get('.addAnotherUserBtn-extras').click();
    cy.xpath(
      '//div[@class="selector-wrapper false"]/div[last()]/section/div/div/div/div[2]/input'
    )
      .type(faker.internet.email())
      .type('{enter}');
    cy.get(
      '.selector-wrapper > div:last-child > section > div:last-child > #dropdown-basic'
    ).click();
    cy.get('div.dropdown-menu.show > a:nth-child(2)')
      .should('contain', 'User')
      .click();
    //3rd user
    cy.get('.addAnotherUserBtn-extras').click();
    cy.xpath(
      '//div[@class="selector-wrapper false"]/div[last()]/section/div/div/div/div[2]/input'
    )
      .type(faker.internet.email())
      .type('{enter}');
    cy.get(
      '.selector-wrapper > div:last-child > section > div:last-child > #dropdown-basic'
    ).click();
    cy.get('div.dropdown-menu.show > a:nth-child(1)')
      .should('contain', 'Admin')
      .click();
    cy.get('.selector-wrapper-inner:nth-child(2) > button.btn-close').click();
    cy.get('.submitBtn').click();
    cy.get('.modal-content').should('not.exist');
  });
});
