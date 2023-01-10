/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

const faker = require('faker');
require('cypress-xpath');

describe('Idea value drawers', () => {
  beforeEach(() => {
    cy.login();
    cy.wait(5000);
  });

  it.skip('personnel item drawer', () => {
    cy.get('.season-dropdown.dropdown > button').click();
    cy.xpath('//div[contains(@class, "dropdown-menu show")]/a[contains(., "LIVE")]').click();
    cy.get(':nth-child(2) > a > .nav-item > .nav-link').click();
    cy.get('[data-number="0"]').click();
    cy.get('.page-tabs__tabs__tab--name').contains('Value').click();
    cy.get('div.opportunity-table-sections > div:nth-child(1) > div > div:nth-child(2)').click();
    cy.get('div.opportunity-table-sections > div:nth-child(1) > div > div:nth-child(2) > div > div:nth-child(1)').should('contain', 'Personnel');
    cy.get('[data-rownumber="0"] > td:nth-child(8) > div > div > button').click();
    cy.get('.show.dropdown-menu > a:nth-child(1)').click();
    cy.get('.itemDrawerValueDetais__continer > div:nth-child(1) > div > textarea.form-control').clear().type('personnels drawers');
    cy.get('.itemDrawerValueDetais__continer > div:nth-child(2) > div > div > div:first-child').click();
    cy.get('.itemDrawerValueDetais__continer > div:nth-child(3) > div > button').click();
    cy.get('.itemDrawerValueDetais__continer > div:nth-child(3) > div > div.dropdown-menu > a:nth-child(2)').click();
    cy.get('.itemDrawerValueDetais__continer > div:nth-child(4) > div > input[name="estimatedNumberOfUnits"]').type('1');
    cy.get('.itemDrawerValueDetais__continer > div:nth-child(5) > div.calendar-cell > div > div > div > div > div > div > input').clear().click();
    cy.get('[aria-label="Next Month"]').click();
    cy.get('.react-datepicker__month > div.react-datepicker__week:nth-child(3) > div:nth-child(4)').click();
    cy.wait(1000);
    cy.get('.base-button-tabs > div:nth-child(2) > button').click();
    cy.get('.react-select__input-container > input').type(faker.internet.email()).type('{enter}');
    cy.get('#dropdown-basic').click();
    cy.get('.dropdown-menu.show > a:first-child').click();

    const attach = 'logo.png';
    cy.get('input[type="file"]').attachFile(attach);
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false; // does not fail the test when uploaing, CORS error exception
    });

    cy.wait(3000);
    cy.get('.link-upload-input-container > input').type('https://www.manutd.com');
    cy.get('.link-upload-input-container > button.add-link-btn').click();
    cy.get('div:nth-child(2) > textarea').type(faker.lorem.paragraph());
    cy.get('.base-button-tabs > div:nth-child(1) > button').click();
    cy.get('button.closeBtn__container').click();
    //   cy.contains('Idea value item updated successfully!').should('exist');
  });

  it.skip('non-personnel drawers', () => {
    cy.get('.season-dropdown.dropdown > button').click();
    cy.xpath('//div[contains(@class, "dropdown-menu show")]/a[contains(., "LIVE")]').click();
    cy.wait(2000);
    cy.get(':nth-child(2) > a > .nav-item > .nav-link').click();
    cy.get('[data-number="0"]').click();
    cy.get('.page-tabs__tabs__tab--name').contains('Value').click();
    cy.get('div.opportunity-table-sections > div:nth-child(1) > div > div:nth-child(3)').click();
    cy.get('div.opportunity-table-sections > div:nth-child(1) > div > div:nth-child(3) > div > div:nth-child(1)').should('contain', 'Non-Personnel');
    cy.get('[data-rownumber="0"] > td:nth-child(9) > div > div > button').click();
    cy.get('.show.dropdown-menu > a:nth-child(1)').click();
    cy.get('.itemDrawerValueDetais__continer > div:nth-child(1) > div > textarea.form-control').clear().type('non-personnels drawers');
    cy.get('.itemDrawerValueDetais__continer > div:nth-child(2) > div > div > div:first-child').click();
    cy.get('.itemDrawerValueDetais__continer > div:nth-child(3) > div > div > div > input').type('2');
    cy.get('.itemDrawerValueDetais__continer > div:nth-child(4) > div.type-button-wrapper >div:nth-child(2) > button').click();
    cy.get('.itemDrawerValueDetais__continer > div:nth-child(5) > div.calendar-cell > div > div > div > div > div > div > input').clear().click();
    cy.get('[aria-label="Next Month"]').click();
    cy.get('.react-datepicker__month > div.react-datepicker__week:nth-child(3) > div:nth-child(4)').click();
    cy.wait(1000);
    cy.get('.base-button-tabs > div:nth-child(2) > button').click();
    cy.get('.react-select__input-container > input').type(faker.internet.email()).type('{enter}');
    cy.get('#dropdown-basic').click();
    cy.get('.dropdown-menu.show > a:first-child').click();
    cy.wait(4000);

    const attach = 'logo.png';
    cy.get('input[type="file"]').attachFile(attach);
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false; // does not fail the test when uploaing, CORS error exception
    });
    cy.wait(3000);
    cy.get('.link-upload-input-container > input').type('https://www.flashscore.com');
    cy.get('.link-upload-input-container > button.add-link-btn').click();
    cy.get('div:nth-child(2) > textarea').clear().type(faker.lorem.paragraph());
    cy.get('.base-button-tabs > div:nth-child(1) > button').click();
    cy.get('button.closeBtn__container').click();
  });

  it('revenues drawers', () => {
    cy.get(':nth-child(2) > a > .nav-item > .nav-link').click();
    cy.get('[data-number="0"]').click();
    cy.get('.page-tabs__tabs__tab--name').contains('Value').click();
    cy.get('div.opportunity-table-sections > div:nth-child(1) > div > div:nth-child(4)').click();
    cy.get('div.opportunity-table-sections > div:nth-child(1) > div > div:nth-child(4) > div > div:nth-child(1)').should('contain', 'Revenues');
    cy.get('[data-rownumber="0"] > td:nth-child(10) > div > div > button').click();
    cy.get('.show.dropdown-menu > a:nth-child(1)').click();
    cy.get('.itemDrawerValueDetais__continer > div:nth-child(1) > div > textarea.form-control').clear().type('revenues drawers');
    cy.get('.itemDrawerValueDetais__continer > div:nth-child(2) > div > div > div:nth-child(2)').click();
    cy.get('.itemDrawerValueDetais__continer > div:nth-child(3) > div.type-button-wrapper > div:nth-child(1)').click();
    cy.get('.itemDrawerValueDetais__continer > div:nth-child(4) > div.input-money-amount > div > div > input').clear().type('647000000');
    cy.get('.itemDrawerValueDetais__continer > div:nth-child(5) > div.input-money-amount > div > div > input').clear().type('22222');
    cy.get('div.itemDrawerValueDetais__continer > div:nth-child(6) > div.calendar-cell > div > div:nth-child(1) > div > div > div > div > input')
      .clear()
      .click();
    cy.get('[aria-label="Next Month"]').click();
    cy.get('.react-datepicker__month > div.react-datepicker__week:nth-child(3) > div:nth-child(4)').click();
    cy.get('div.itemDrawerValueDetais__continer > div:nth-child(6) > div.calendar-cell > div > div:nth-child(2) > div > div > div > div > input')
      .clear()
      .click();
    cy.get('.react-datepicker__month > div.react-datepicker__week:nth-child(3) > div:nth-child(4)').click();
    cy.get('.base-button-tabs > div:nth-child(2) > button').click();
    cy.get('.react-select__input-container > input').type(faker.internet.email());
    cy.get('.react-select__option:nth-child(1)').click();
    cy.get('#dropdown-basic').click();
    cy.get('.dropdown-menu.show > a:first-child').click();

    const attach = 'pdf.pdf';
    cy.get('.drap-n-drop > input').attachFile(attach);
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false; // does not fail the test when uploaing, CORS error exception
    });
    cy.wait(2000);
    cy.get('.link-upload-input-container > input').type('https://www.uefa.com');
    cy.get('.link-upload-input-container > button.add-link-btn').click();
    cy.get('div:nth-child(2) > textarea').clear().type(faker.lorem.paragraph());
    cy.get('.base-button-tabs > div:nth-child(1) > button').click();
    cy.get('button.closeBtn__container').click();
  });
});
