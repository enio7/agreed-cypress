/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

const faker = require('faker');
require('cypress-xpath');

describe('Inviting a new member', () => {
  beforeEach(() => {
    cy.login();
    cy.wait(5000);
  });

  it('inviting a new member through homepage', () => {
    cy.xpath('//div[@class="season-dropdown dropdown"]/button').click();
    cy.get('.dropdown-menu.show > a:nth-child(2)').click();
    cy.xpath(
      '//div[@class="d-flex flex-column"]/div/p[contains(., "Invite to Space")]'
    ).click();
    cy.get(
      '.search-space > div > div > div:nth-of-type(1) > div:nth-of-type(2)'
    ).click();
    cy.xpath(
      '//div[contains(@id, "react-select")][contains(@id, "option")][1]'
    ).click();
    cy.get('.next-button').click();
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
    cy.get('div.dropdown-menu.show > a:nth-child(3)')
      .should('contain', 'Guest')
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
    cy.get('.pull-right').click();
    cy.get('.modal-content').should('not.exist');
  });

  it('invite members to space through space members table', () => {
    cy.xpath('//ul[@class="sidebar__spaces-list"]/li[2]').click();
    cy.xpath('//div[@class="page-tabs__right"]/div/div[2]/button').click();
    cy.xpath(
      '//p[@class="dropdown-add-item"][contains(., "Space Members")]'
    ).click();
    cy.get('.add-new-members').click();
    cy.xpath('//input[contains(@id, "react-select")][contains(@id, "input")]')
      .type(faker.internet.email())
      .type('{enter}');
    cy.get(
      '.selector-wrapper > div > section > div:nth-child(2) > #dropdown-basic'
    ).click();
    cy.get('div.dropdown-menu.show > a:nth-child(2)')
      .should('contain', 'User')
      .click();
    cy.get('.addAnotherUserBtn-extras').click();
    cy.xpath(
      '//div[@class="selector-wrapper false"]/div[last()]/section/div/div/div/div[2]/input'
    )
      .type(faker.internet.email())
      .type('{enter}');
    cy.get(
      '.selector-wrapper > div:last-child > section > div:last-child > #dropdown-basic'
    ).click();
    cy.get('div.dropdown-menu.show > a:nth-child(3)')
      .should('contain', 'Guest')
      .click();
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
    cy.get('.pull-right').click();
    cy.get('.modal-content').should('not.exist');
  });
});
