/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

const faker = require('faker');
require('cypress-xpath');

describe('Worksapce settings', () => {
  beforeEach(() => {
    cy.login();
    cy.wait(5000);
  });

  it('edit workspace', () => {
    cy.get('.season-dropdown > button').click();
    cy.xpath(
      '//div[@class="dropdown-menu show dropdown-menu-end"]/a[@aria-selected="false"][last()]'
    ).click();
    cy.get('.profile-dropdown > button').click();
    cy.get(
      '.navbar-nav > div:nth-child(2) > div > div > a:nth-child(3)'
    ).click();
    cy.get('.spaces-page__settings > div:nth-child(2)').click();

    const ImageFile = 'logo.png';
    cy.get('input[type="file"]').attachFile(ImageFile);
    cy.get(
      'div:nth-child(2) > form > div > div.text-muted.card-footer > button.btn.btn-primary'
    ).click();
    cy.contains('Workspace successfully updated!').should('exist');
    cy.get('.pull__section-up > form > div > div:nth-child(2) > div > input')
      .clear()
      .type(faker.lorem.sentences());
    cy.get(
      'div.edit-section.pull__section-up > form > div > div.text-muted.card-footer > button.mr-4.btn.btn-secondary'
    ).click();
    cy.get('.pull__section-up > form > div > div:nth-child(2) > div > input')
      .clear()
      .type(faker.lorem.sentences());
    cy.get(
      'div.edit-section.pull__section-up > form > div > div.text-muted.card-footer > button.btn.btn-primary'
    ).click();
    cy.get('.card-delete-body > div:nth-child(2) > button').click();
    cy.get('.modal-footer > button:nth-child(2)').click();
    cy.contains('View your Workspace(s)').should('exist');
  });

  it('edit welcome banner', () => {
    cy.get('.season-dropdown > button').click();
    cy.xpath(
      '//div[@class="dropdown-menu show dropdown-menu-end"]/a[@aria-selected="false"][last()]'
    ).click();
    cy.get('.profile-dropdown > button').click();
    cy.get(
      '.navbar-nav > div:nth-child(2) > div > div > a:nth-child(3)'
    ).click();
    cy.get('.spaces-page__settings > div:nth-child(3)').click();
    cy.get('.form-group > input').clear().type(faker.lorem.paragraph());
    cy.get('.card-footer > button:nth-child(1)').click();
    cy.get('.form-group > input')
      .clear()
      .type(
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged'
      );
    cy.get('.card-footer > button:nth-child(2)').click();
    cy.contains('Workspace successfully updated!').should('exist');
    cy.get('.background-update').should(
      'have.text',
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged'
    );
  });
});
