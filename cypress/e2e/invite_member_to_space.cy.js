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
    cy.get('.season-dropdown.dropdown > button').click();
    cy.xpath('//div[contains(@class, "dropdown-menu show")]/a[contains(., "Only for inviting members - Cypress")]').click();
    cy.get('div > div.col-12 > div.row > div:nth-child(2) > div.row > div > div:nth-child(2)').click();
    cy.get('.spaceSelector-component-container > div > div > div > div.react-select__placeholder').click({ force: true });
    cy.xpath('//div[contains(@id, "react-select")][contains(@id, "option")][1]').click();
    cy.get('.modal-body > div.selector-wrapper > div > section > div > div > div > div:nth-child(2) > input')
      .type(faker.internet.email())
      .type('{enter}');
    cy.get('#dropdown-basic').click();
    cy.get('.dropdown-menu.show > a:last-child').should('contain', 'User').click();
    //2nd user
    cy.get('.addAnotherUserBtn-extras').click();
    cy.get('.selector-wrapper > div:nth-child(2) > section > div > div > div > div.react-select__input-container > input')
      .type(faker.internet.email())
      .type('{enter}');
    cy.get('.selector-wrapper > div:nth-child(2) > section > div:nth-child(2) > button').click();
    cy.get('.dropdown-menu.show > a:first-child').should('contain', 'Admin').click();
    //3rd user
    cy.get('.addAnotherUserBtn-extras').click();
    cy.get('.selector-wrapper > div:nth-child(3) > section > div > div > div > div.react-select__input-container > input')
      .type(faker.internet.email())
      .type('{enter}');
    cy.get('.selector-wrapper > div:nth-child(3) > section > div:nth-child(2) > button').click();
    cy.get('.dropdown-menu.show > a:last-child').should('contain', 'User').click();

    cy.get('.selector-wrapper > div:nth-child(2) > button.btn-close').click();
    cy.get('.submitBtn').click();
    cy.get('.modal-content').should('not.exist');
  });

  it('invite members to space through space members table', () => {
    cy.get('.season-dropdown.dropdown > button').click();
    cy.xpath('//div[contains(@class, "dropdown-menu show")]/a[contains(., "Only for inviting members - Cypress")]').click();
    cy.get(':nth-child(2) > a > .nav-item > .nav-link').click();
    cy.xpath('//div[@class="page-tabs__right"]/div/div[2]/button').click();
    cy.xpath('//p[@class="dropdown-add-item"][contains(., "Space Members")]').click();
    cy.get('.add-new-members').click();
    cy.xpath('//input[contains(@id, "react-select")][contains(@id, "input")]').type(faker.internet.email()).type('{enter}');
    cy.get('.selector-wrapper > div > section > div:nth-child(2) > #dropdown-basic').click();
    cy.get('div.dropdown-menu.show > a:nth-child(2)').should('contain', 'User').click();
    cy.get('.addAnotherUserBtn-extras').click();
    cy.xpath('//div[@class="selector-wrapper false"]/div[last()]/section/div/div/div/div[2]/input').type(faker.internet.email()).type('{enter}');
    cy.get('.selector-wrapper > div:last-child > section > div:last-child > #dropdown-basic').click();
    cy.get('div.dropdown-menu.show > a:nth-child(2)').should('contain', 'User').click();
    cy.get('.addAnotherUserBtn-extras').click();
    cy.xpath('//div[@class="selector-wrapper false"]/div[last()]/section/div/div/div/div[2]/input').type(faker.internet.email()).type('{enter}');
    cy.get('.selector-wrapper > div:last-child > section > div:last-child > #dropdown-basic').click();
    cy.get('div.dropdown-menu.show > a:nth-child(1)').should('contain', 'Admin').click();
    cy.get('.selector-wrapper-inner:nth-child(2) > button.btn-close').click();
    cy.get('.submitBtn').click();
    cy.get('.modal-content').should('not.exist');
  });
});
