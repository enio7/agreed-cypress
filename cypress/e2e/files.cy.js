/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

const faker = require('faker');
require('cypress-xpath');

describe('Files upload', () => {
  beforeEach(() => {
    cy.login();
    cy.wait(5000);
  });
  it('files upload from idea overview', () => {
    cy.get(':nth-child(1) > a > .nav-item > .nav-link').click();
    cy.wait(1000);
    cy.get('[data-number="0"]').click();
    cy.get('.opportunity-files-add-button').click();

    const photo1 = 'r&r.jpeg';
    const file1 = 'Icons.docx';
    cy.get('input[type="file"]').attachFile(photo1).attachFile(file1);
    cy.wait(1000);
    cy.get(
      '.attachments-list > div:nth-child(2) > div > div > div > div.align-items-center > svg'
    ).click();
    cy.get('.modal-footer > button').click();

    //file actions
    cy.get('.attachment-action-dropdown > button').click();
    cy.get('.dropdown-menu > button:nth-child(2)').click();
    cy.get('input[type="text"]').type(' file');
    cy.get('.modal-footer > button:nth-child(2)').click();
    cy.get('.attachment-action-dropdown > button').click();
    cy.get('.dropdown-menu > button:nth-child(3)').click();
    cy.get('.attachment-action-dropdown > button').click();
    cy.get('.dropdown-menu > button:nth-child(4)').click();
  });
});
