/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

const faker = require('faker');
require('cypress-xpath');

describe('Invite and Remove a stakeholder', () => {
  beforeEach(() => {
    cy.login();
    cy.wait(5000);
  });

  it('invite a stakeholder in an idea', () => {
    cy.get(':nth-child(1) > a > .nav-item > .nav-link').click();
    cy.get('[data-number="0"]').click();
    cy.get('.page-tabs__tabs__tab--name').contains('Risk').click();
    cy.get('.idea__risk__main__wrapper').then(($ele) => {
      if ($ele.find('.mt-5 > button.btn').length > 0) {
        cy.get('.mt-5 > button.btn').click();
      } else {
        cy.get('.add-stakeholder-button').click();
      }
    });
    cy.get('input.form-control').click();
    cy.get('.section__suggestions > div > ul > li:nth-child(1)').click();
    cy.get('div.status-dropdown > button').click();
    cy.get('div.dropdown-menu.show > a:first-child').click();
    cy.get('div.modal-footer > button:nth-child(2)').click();
    cy.get('.add-stakeholder-button').click();
    cy.get('input.form-control').click();
    cy.get('.section__suggestions > div > ul > li:nth-child(1)').click();
    cy.get('div.status-dropdown > button').click();
    cy.get('div.dropdown-menu.show > a:first-child').click();
    cy.get('div.modal-footer > button:nth-child(2)').click();
    cy.get('.add-stakeholder-button').click();
    cy.get('input.form-control').type(faker.internet.email());
    cy.get('div.status-dropdown > button').click();
    cy.get('div.dropdown-menu.show > a:nth-child(2)').click();
    cy.get('div.modal-footer > button:nth-child(2)').click();

    cy.get('.react-select__input-container > input').click();
    cy.xpath(
      '//div[contains(@id, "react-select")][contains(@id, "option")][2]'
    ).click();
    cy.get('.react-select__input-container > input').click();
    cy.xpath(
      '//div[contains(@id, "react-select")][contains(@id, "option")][1]'
    ).click();
    cy.get('.react-select__input-container > input').click();
    cy.xpath(
      '//div[contains(@id, "react-select")][contains(@id, "option")][1]'
    ).click();
    cy.get('.pull-right').click();
    cy.contains('Stakeholder added successfully!').should('exist');
  });

  it('rate and edit stakeholders', () => {
    cy.get(':nth-child(1) > a > .nav-item > .nav-link').click();
    cy.get('[data-number="0"]').click();
    cy.get('.page-tabs__tabs__tab--name').contains('Risk').click();
    cy.get(
      'div[data-rownumber="0"] > div.idea__risk__stakeholder__ratings > div > div > button'
    ).click();
    cy.get(
      'div[data-rownumber="0"] > div.idea__risk__stakeholder__ratings > div > div > div > a > div > div.low-risk'
    ).click();
    cy.get(
      'div[data-rownumber="1"] > div.idea__risk__stakeholder__ratings > div > div > button'
    ).click();
    cy.get(
      'div[data-rownumber="1"] > div.idea__risk__stakeholder__ratings > div > div > div > a > div > div.medium-risk'
    ).click();
    cy.get(
      'div[data-rownumber="2"] > div.idea__risk__stakeholder__ratings > div > div > button'
    ).click();
    cy.get(
      'div[data-rownumber="2"] > div.idea__risk__stakeholder__ratings > div > div > div > a > div > div.high-risk'
    ).click();
    cy.contains('Rating updated').should('exist');
    cy.wait(2000);
    cy.get(
      'div[data-rownumber="1"] > div.idea__risk__stakeholder__textarea > textarea.textarea__input'
    ).type(faker.lorem.words());
    //cy.contains('Requested changes updated successfully!').should('exist');
    cy.get(
      'div[data-rownumber="1"] > div.idea__risk__stakeholder__completion > div > div > input'
    ).click();
    // cy.get('.idea__risk__stakeholder__toggle > button').click();
    // cy.get('.idea__risk__stakeholder__toggle > div > a:nth-child(2)').click();
    // cy.get('.rateSelect__input > button > div').should('contain', 'high');
    // cy.get('.idea__risk__stakeholder__toggle > button').click();
    // cy.get('.idea__risk__stakeholder__toggle > div > a:nth-child(3)').click();
    // cy.get('.rateSelect__input > button > div').should('contain', 'medium');
    // cy.get('.idea__risk__stakeholder__toggle > button').click();
    // cy.get('.idea__risk__stakeholder__toggle > div > a:nth-child(4)').click();
    // cy.get('.rateSelect__input > button > div').should('contain', 'low');
    // cy.get('.idea__risk__stakeholder__toggle > button').click();
    // cy.get('.idea__risk__stakeholder__toggle > div > a:nth-child(1)').click();
    cy.get('div[data-rownumber="0"]').trigger('mouseover');
    cy.xpath(
      '//div[@data-rownumber="0"]/div[5]/div[@class="minimenu__container"]/div/button'
    )
      .invoke('show')
      .click({ force: true });
  });
});
