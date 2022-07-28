/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

const faker = require('faker');
require('cypress-xpath');

describe('Idea value drawers', () => {
  beforeEach(() => {
    cy.login();
    cy.wait(5000);
  });

  it('personnel item drawer', () => {
    cy.get(':nth-child(2) > a > .nav-item > .nav-link').click();
    cy.get('[data-number="0"]').click();
    cy.get('.page-tabs__tabs__tab--name').contains('Value').click();
    cy.get('[role="group"] > button:nth-child(1)').should(
      'contain',
      'Personnel'
    );
    //cy.get('.empty-state > button').click();
    cy.get(
      '[data-rownumber="0"] > td:nth-child(8) > div > div > div > div'
    ).click();
    cy.get('.minimenu > div:nth-child(1)').click();
    cy.get(
      '.itemDrawerValueDetais__continer > div:nth-child(1) > div > input.form-control'
    )
      .clear()
      .type('personnels drawers');
    cy.get(
      '.itemDrawerValueDetais__continer > div:nth-child(2) > div > div > div:first-child'
    ).click();
    cy.get(
      '.itemDrawerValueDetais__continer > div:nth-child(3) > div > button'
    ).click();
    cy.get(
      '.itemDrawerValueDetais__continer > div:nth-child(3) > div > div.dropdown-menu > a:nth-child(2)'
    ).click();
    cy.get(
      '.itemDrawerValueDetais__continer > div:nth-child(4) > div > input[name="estimatedNumberOfUnits"]'
    ).type('1');
    cy.get(
      '.itemDrawerValueDetais__continer > div:nth-child(5) > div.calendar-cell > div > div > div > div > div > div > div > div:nth-child(1) > input'
    )
      .clear()
      .click();
    cy.get('[aria-label="Next Month"]').click();
    cy.get(
      '.react-datepicker__month > div.react-datepicker__week:nth-child(3) > div:nth-child(4)'
    ).click();
    cy.wait(1000);
    cy.get('.base-button-tabs > div:nth-child(2) > button').click();
    cy.get('.react-select__input-container > input')
      .type(faker.internet.email())
      .type('{enter}');
    cy.get('#dropdown-basic').click();
    cy.get('.dropdown-menu.show > a:first-child').click();
    cy.wait(1000);

    const attach = 'pdf.pdf';
    cy.get('.drap-n-drop > input').attachFile(attach);

    cy.get('div:nth-child(2) > textarea').clear().type(faker.lorem.paragraph());
    cy.get('.base-button-tabs > div:nth-child(1) > button').click();
    cy.get('.closeBtn__container > div').click();
    cy.contains('Idea value item updated successfully!').should('exist');
  });

  it('non-personnel drawers', () => {
    cy.get(':nth-child(2) > a > .nav-item > .nav-link').click();
    cy.get('[data-number="0"]').click();
    cy.get('.page-tabs__tabs__tab--name').contains('Value').click();
    cy.get('[role="group"] > button:nth-child(2)')
      .should('contain', 'Non-Personnel')
      .click();
    //cy.get('.empty-state > button').click();
    cy.get(
      '[data-rownumber="0"] > td:nth-child(9) > div > div > div > div'
    ).click();
    cy.get('.minimenu > div:nth-child(1)').click();
    cy.get(
      '.itemDrawerValueDetais__continer > div:nth-child(1) > div > input.form-control'
    )
      .clear()
      .type('non-personnels drawers');
    cy.get(
      '.itemDrawerValueDetais__continer > div:nth-child(2) > div > div > div:first-child'
    ).click();
    cy.get(
      '.itemDrawerValueDetais__continer > div:nth-child(3) > div > div > div > input'
    ).type('2');
    cy.get(
      '.itemDrawerValueDetais__continer > div:nth-child(4) > div.type-button-wrapper >div:nth-child(2) > button'
    ).click();
    cy.get(
      '.itemDrawerValueDetais__continer > div:nth-child(5) > div.calendar-cell > div > div > div > div > div > div > div > div:nth-child(1) > input'
    )
      .clear()
      .click();
    cy.get('[aria-label="Next Month"]').click();
    cy.get(
      '.react-datepicker__month > div.react-datepicker__week:nth-child(3) > div:nth-child(4)'
    ).click();
    cy.wait(1000);
    cy.get('.base-button-tabs > div:nth-child(2) > button').click();
    cy.get('.react-select__input-container > input')
      .type(faker.internet.email())
      .type('{enter}');
    cy.get('#dropdown-basic').click();
    cy.get('.dropdown-menu.show > a:first-child').click();

    const attach = 'pdf.pdf';
    cy.get('.drap-n-drop > input').attachFile(attach);

    cy.get('div:nth-child(2) > textarea').clear().type(faker.lorem.paragraph());
    cy.get('.base-button-tabs > div:nth-child(1) > button').click();
    cy.get('.closeBtn__container > div').click();
    cy.contains('Idea value item updated successfully!').should('exist');
  });

  it('revenues drawers', () => {
    cy.get(':nth-child(2) > a > .nav-item > .nav-link').click();
    cy.get('[data-number="0"]').click();
    cy.get('.page-tabs__tabs__tab--name').contains('Value').click();
    cy.get('[role="group"] > button:nth-child(3)')
      .should('contain', 'Revenues')
      .click();
    //cy.get('.empty-state > button').click();
    cy.get(
      '[data-rownumber="0"] > td:nth-child(10) > div > div > div > div'
    ).click();
    cy.get('.minimenu > div:nth-child(1)').click();
    cy.get(
      '.itemDrawerValueDetais__continer > div:nth-child(1) > div > input.form-control'
    )
      .clear()
      .type('revenues drawers');
    cy.get(
      '.itemDrawerValueDetais__continer > div:nth-child(2) > div > div > div:nth-child(2)'
    ).click();
    cy.get(
      '.itemDrawerValueDetais__continer > div:nth-child(3) > div.type-button-wrapper > div:nth-child(1)'
    ).click();
    cy.get(
      '.itemDrawerValueDetais__continer > div:nth-child(4) > div.input-money-amount > div > div > input'
    ).type('647000000');
    cy.get(
      '.itemDrawerValueDetais__continer > div:nth-child(5) > div.input-money-amount > div > div > input'
    ).type('22222');
    cy.get(
      '.itemDrawerValueDetais__continer > div:nth-child(6) > div.calendar-cell > div > div:nth-child(1) > div > div > div > div > div > div:nth-child(1) > input'
    )
      .clear()
      .click();
    cy.get('[aria-label="Next Month"]').click();
    cy.get(
      '.react-datepicker__month > div.react-datepicker__week:nth-child(3) > div:nth-child(4)'
    ).click();
    cy.get(
      '.itemDrawerValueDetais__continer > div:nth-child(6) > div.calendar-cell > div > div:nth-child(2) > div > div > div > div > div > div:nth-child(1) > input'
    )
      .clear()
      .click();
    cy.get(
      '.react-datepicker__month > div.react-datepicker__week:nth-child(3) > div:nth-child(4)'
    ).click();
    cy.get('.base-button-tabs > div:nth-child(2) > button').click();
    cy.get('.react-select__input-container > input')
      .type(faker.internet.email())
      .type('{enter}');
    cy.get('#dropdown-basic').click();
    cy.get('.dropdown-menu.show > a:first-child').click();

    const attach = 'pdf.pdf';
    cy.get('.drap-n-drop > input').attachFile(attach);

    cy.get('div:nth-child(2) > textarea').clear().type(faker.lorem.paragraph());
    cy.get('.base-button-tabs > div:nth-child(1) > button').click();
    cy.get('.closeBtn__container > div').click();
    cy.contains('Idea value item updated successfully!').should('exist');
  });
});
