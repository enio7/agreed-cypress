/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

const faker = require('faker');
require('cypress-xpath');

describe('Idea values', () => {
  beforeEach(() => {
    cy.login();
    cy.wait(5000);
  });

  it('total tab', () => {
    cy.get('.season-dropdown.dropdown > button').click();
    cy.xpath('//div[contains(@class, "dropdown-menu show")]/a[contains(., "LIVE")]').click();
    cy.get(':nth-child(1) > a > .nav-item > .nav-link').click();
    cy.wait(5000);
    cy.get('[data-number="0"]').click();
    cy.get('.page-tabs__tabs__tab--name').contains('Value').click();
    cy.get('.value-total-table > div:nth-child(2) > div:first-child > div.sub-table-footer > span').click();
    cy.wait(2000);
    cy.xpath(
      '//div[@class="table agreed-table value-total-table"]/div[2]/div[@class="sub-table"][1]/div[@class="tbody"]/div[last()]/div[1]/input'
    ).type(faker.commerce.product());
    cy.xpath(
      '//div[@class="table agreed-table value-total-table"]/div[2]/div[@class="sub-table"][1]/div[@class="tbody"]/div[last()]/div[2]/div/div[1]'
    ).click();
    cy.xpath(
      '//div[@class="table agreed-table value-total-table"]/div[2]/div[@class="sub-table"][1]/div[@class="tbody"]/div[last()]/div[3]/div/span'
    ).should('contain', 'Ongoing');
    cy.xpath(
      '//div[@class="table agreed-table value-total-table"]/div[2]/div[@class="sub-table"][1]/div[@class="tbody"]/div[last()]/div[4]/div/div/div/input'
    ).click({ force: true });
    // value personnel modal
    cy.get('.modal-content > div.modal-body > div > div.input-wrapper-show-more').click();
    cy.get('input[name="people"]').type(faker.datatype.number({ min: 1, max: 10 }));
    cy.get('input[name="timeSaved"]').type(faker.datatype.number({ min: 20, max: 100 }));
    cy.get('.modal-content > div.modal-body > div > div.overlay-dropdown-trigger > button').click();
    cy.get('.overlay-dropdown-filter > div > div:nth-child(4)').click();
    cy.get('.modal-header > button').click();
    //
    cy.xpath(
      '//div[@class="table agreed-table value-total-table"]/div[2]/div[@class="sub-table"][1]/div[@class="tbody"]/div[last()]/div[5]/div/div/div/div/input'
    ).click({ force: true });
    cy.get(
      '.agreed-calendar > div.react-datepicker__month-container > div.react-datepicker__month > div.react-datepicker__week:last-child > div:last-child'
    ).click();
    cy.xpath(
      '//div[@class="table agreed-table value-total-table"]/div[2]/div[@class="sub-table"][1]/div[@class="tbody"]/div[last()]/div[7]/div/div[@class="email-dropdown-wrapper   "]/div/input'
    ).click({ force: true });
    cy.get('.user-placeholder-select-dropdown-popover > div.popover-body > div > div > ul > li:first-child').click();
    cy.get('.Toastify__toast-body').should('contain', 'Validator successfully updated!');
    cy.xpath(
      '//div[@class="table agreed-table value-total-table"]/div[2]/div[@class="sub-table"][1]/div[@class="tbody"]/div[last()]/div[8]/div/div'
    ).click();

    //Non-personnel
    cy.get('.value-total-table > div:nth-child(2) > div:nth-child(2) > div.sub-table-footer > span').click();
    cy.wait(2000);
    cy.xpath(
      '//div[@class="table agreed-table value-total-table"]/div[2]/div[@class="sub-table"][2]/div[@class="tbody"]/div[last()]/div[1]/input'
    ).type(faker.commerce.product());
    cy.xpath(
      '//div[@class="table agreed-table value-total-table"]/div[2]/div[@class="sub-table"][2]/div[@class="tbody"]/div[last()]/div[2]/div/div/div[1]'
    ).click();
    cy.xpath(
      '//div[@class="table agreed-table value-total-table"]/div[2]/div[@class="sub-table"][2]/div[@class="tbody"]/div[last()]/div[3]/div/button'
    ).click();
    cy.get('.overlay-dropdown-filter > div > div:nth-child(2)').click();
    cy.xpath(
      '//div[@class="table agreed-table value-total-table"]/div[2]/div[@class="sub-table"][2]/div[@class="tbody"]/div[last()]/div[4]/div/div/div/input'
    ).click({ force: true });
    //non-personnel modal
    cy.get('input[name="estimatedNumberOfUnits"]').type(faker.datatype.number({ min: 11, max: 100 }));
    cy.get('input[name="estimatedCost"]').type(faker.datatype.number({ min: 500, max: 10000 }));
    cy.get('.modal-header > button').click();
    //
    cy.xpath(
      '//div[@class="table agreed-table value-total-table"]/div[2]/div[@class="sub-table"][2]/div[@class="tbody"]/div[last()]/div[5]/div/div/div/div/input'
    ).click({ force: true });
    cy.get(
      '.agreed-calendar > div.react-datepicker__month-container > div.react-datepicker__month > div.react-datepicker__week:last-child > div:last-child'
    ).click();

    cy.xpath(
      '//div[@class="table agreed-table value-total-table"]/div[2]/div[@class="sub-table"][2]/div[@class="tbody"]/div[last()]/div[6]/div/div/div/div/input'
    ).click();
    cy.get('button[aria-label="Next Month"]').click();
    cy.get(
      '.agreed-calendar > div.react-datepicker__month-container > div.react-datepicker__month > div.react-datepicker__week:last-child > div:last-child'
    ).click();
    cy.xpath(
      '//div[@class="table agreed-table value-total-table"]/div[2]/div[@class="sub-table"][2]/div[@class="tbody"]/div[last()]/div[7]/div/div[@class="email-dropdown-wrapper   "]/div/input'
    ).click({ force: true });
    cy.get('.user-placeholder-select-dropdown-popover > div.popover-body > div > div > ul > li:first-child').click();
    cy.get('.Toastify__toast-body').should('contain', 'Validator successfully updated!');
    cy.wait(2000);
    cy.xpath(
      '//div[@class="table agreed-table value-total-table"]/div[2]/div[@class="sub-table"][2]/div[@class="tbody"]/div[last()]/div[8]/div/div'
    ).click();

    //Revenues

    cy.get('.value-total-table > div:nth-child(2) > div:nth-child(3) > div.sub-table-footer > span').click();
    cy.wait(2000);
    cy.xpath(
      '//div[@class="table agreed-table value-total-table"]/div[2]/div[@class="sub-table"][3]/div[@class="tbody"]/div[last()]/div[1]/input'
    ).type(faker.commerce.product());
    cy.xpath(
      '//div[@class="table agreed-table value-total-table"]/div[2]/div[@class="sub-table"][3]/div[@class="tbody"]/div[last()]/div[2]/div/div/div[1]'
    ).click();
    cy.xpath(
      '//div[@class="table agreed-table value-total-table"]/div[2]/div[@class="sub-table"][3]/div[@class="tbody"]/div[last()]/div[3]/div/button'
    ).click();
    cy.get('.overlay-dropdown-filter > div > div:nth-child(1)').click();
    //revenues modal
    cy.xpath(
      '//div[@class="table agreed-table value-total-table"]/div[2]/div[@class="sub-table"][3]/div[@class="tbody"]/div[last()]/div[4]/div/div/div/input'
    ).click({ force: true });
    cy.get('input[name="estimatedNumberOfUnits"]').type(faker.datatype.number({ min: 11, max: 100 }));
    cy.get('input[name="estimatedCost"]').type(faker.datatype.number({ min: 5000, max: 100000 }));
    cy.get('.input-wrapper-show-more').click();
    cy.get('input[name="marginChange"]').type(faker.datatype.number({ min: 1000, max: 40000 }));
    cy.get('.modal-header > button').click();
    //

    cy.xpath(
      '//div[@class="table agreed-table value-total-table"]/div[2]/div[@class="sub-table"][3]/div[@class="tbody"]/div[last()]/div[5]/div/div/div/div/input'
    ).click();
    cy.get(
      '.agreed-calendar > div.react-datepicker__month-container > div.react-datepicker__month > div.react-datepicker__week:last-child > div:last-child'
    ).click();
    cy.xpath(
      '//div[@class="table agreed-table value-total-table"]/div[2]/div[@class="sub-table"][3]/div[@class="tbody"]/div[last()]/div[7]/div/div[@class="email-dropdown-wrapper   "]/div/input'
    ).click({ force: true });
    cy.get('.user-placeholder-select-dropdown-popover > div.popover-body > div > div > ul > li:first-child').click();
    cy.get('.Toastify__toast-body').should('contain', 'Validator successfully updated!');
    cy.wait(2000);
    cy.xpath(
      '//div[@class="table agreed-table value-total-table"]/div[2]/div[@class="sub-table"][3]/div[@class="tbody"]/div[last()]/div[8]/div/div'
    ).click();
  });
});
