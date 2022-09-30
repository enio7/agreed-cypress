/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

require('cypress-xpath');

describe('Guest Invites', () => {
  // before(() => {
  //   cy.login();
  //   cy.wait(4000);
  // });

  it.skip('invite a guest user to idea', () => {
    cy.xpath('//a[contains(., "Only for Guest")]').click();
    cy.get('div[data-number="0"]').click();
    cy.get('.addMember__icon__text').click();
    cy.get('.email-dropdown > input').type('enio+44@motomtech.com');
    cy.get('.role-dropdown').click();
    cy.get('.dropdown-menu.show > a:first-child > div > div.role-checkbox > input').click();
    cy.get('.dropdown-menu.show > a:nth-child(3) > div > div.role-checkbox > input').click();
    cy.get('.status-dropdown').click();
    cy.get('.dropdown-menu.show > a:first-child').click();
    cy.get('.modal-footer > button:last-child').click();

    //invite to events
    cy.get('.page-tabs__goBack > div > button').click();
  });

  it('guest account login', () => {
    cy.visit('./login');
    cy.get('.form_input').type('enio+44@motomtech.com');
    cy.get('.form_input-password').type('Test@123');
    cy.get('.visibility-icon > .w-100 > svg').click();
    cy.get('.login_form-section-form_button').click();
    cy.wait(2000);
    cy.xpath('//div[2]/a/span[2][contains(., "Home")]').should('not.exist');
  });
});
