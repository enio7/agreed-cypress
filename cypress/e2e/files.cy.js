/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

const faker = require('faker');
require('cypress-xpath');

describe('Files upload', () => {
  beforeEach(() => {
    cy.login();
    cy.wait(5000);
  });
  it.skip('files upload from idea overview', () => {
    cy.get(':nth-child(1) > a > .nav-item > .nav-link').click();
    cy.wait(1000);
    cy.get('[data-number="0"]').click();
    cy.get('.opportunity-files-add-button').click();

    const photo1 = 'r&r.jpeg';
    const file1 = 'Icons.docx';
    cy.get('input[type="file"]').attachFile(photo1).attachFile(file1);
    cy.wait(1000);
    cy.get('.attachments-list > div:nth-child(2) > div > div > div > div.align-items-center > svg').click();
    cy.get('.modal-footer > button').click();
    cy.reload();
    //file actions
    cy.get('div.row.w-100 > div:last-child > div > div.d-flex.align-items-center > div').click();
    cy.get('div:last-child > div > div.d-flex.align-items-center > div > div > button:nth-child(2)').click();
    cy.get('input[type="text"]').type(' file');
    cy.get('.modal-footer > button:nth-child(2)').click();
    cy.get('div.row.w-100 > div:last-child > div > div.d-flex.align-items-center > div').click();
    cy.get('div:last-child > div > div.d-flex.align-items-center > div > div > button:nth-child(3)').click();
    cy.reload();
    cy.get('div.row.w-100 > div:last-child > div > div.d-flex.align-items-center > div').click();
    cy.get('div:last-child > div > div.d-flex.align-items-center > div > div > button:nth-child(4)').click();
  });

  it.skip('files upload from files tab', () => {
    cy.get(':nth-child(1) > a > .nav-item > .nav-link').click();
    cy.get('[data-number="0"]').click();
    cy.get('.page-tabs__tabs__tab--name').contains('Files').click();
    cy.get('.opportunity-files-add-button').click();

    const photo1 = 'r&r.jpeg';
    //const file1 = 'Icons.docx';
    const team = 'champions league.jpeg';
    const logo = 'logo.png';
    const pdf = 'pdf.pdf';

    cy.get('input[type="file"]')
      .attachFile(photo1)
      //.attachFile(file1)
      .attachFile(team)
      .attachFile(logo)
      .attachFile(pdf);
    cy.wait(5000);
    cy.get('.modal-footer > .btn').click();
    cy.get('div.opportunity-files-list > div:last-child > div:last-child > div').click();
    cy.get('.dropdown-menu.show > button:nth-child(1)').click();
    cy.get('.btn-close').click();
    cy.get('div.opportunity-files-list > div:last-child > div:last-child > div').click();
    cy.get('.dropdown-menu.show > button:nth-child(2)').click();
    cy.get('div.opportunity-files-list > div:last-child > div:last-child > div').click();
    cy.get('.dropdown-menu.show > button:nth-child(2)').click();
    cy.get('div.opportunity-files-list > div:last-child > div:last-child > div').click();
    cy.get('.dropdown-menu.show > button:nth-child(3)').click();
    cy.get('.modal-body > input').clear().type('renamed doc');
    cy.get('.modal-footer > button:nth-child(2)').click();
    cy.get('div.opportunity-files-list > div:last-child > div:last-child > div').click();
    cy.get('.dropdown-menu.show > button:nth-child(5)').click();
  });
});
