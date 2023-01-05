/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

import { faker } from '@faker-js/faker';
require('cypress-xpath');

describe('Worksapce settings', () => {
  beforeEach(() => {
    cy.login();
    cy.wait(5000);
  });

  it('edit workspace name, logo, delete', () => {
    cy.get('.season-dropdown.dropdown > button').click();
    cy.get('.dropdown-menu.show > a:nth-last-child(2)').click(); //gets one before last
    cy.get('.profile-dropdown > button').click();
    cy.get('.dropdown-menu.show > a:nth-child(3)').click();
    cy.get('.workspace-settings-accordion > div:nth-child(1)').click();
    //Workspace Logo
    const ImageFile = 'champions league.jpeg';
    cy.get('input[type="file"]').attachFile(ImageFile);
    cy.wait(1000);
    cy.get(':nth-child(1) > form > .card-preferences > .text-muted > .btn-primary').click();
    //Workspace name
    cy.get('.workspace__name__container > div > input').clear().type(faker.company.companyName());
    cy.get('.edit-section:nth-child(2) > form > div > div.text-muted > button:nth-child(2)').click();
    cy.wait(4000);
    //delete workspace
    cy.get('.delete-workspace-container > div > div > div > div.card-delete-body__right > button').click();
    //coping a text and typing
    cy.get('.confirm-input-container > label > b').then(($temp) => {
      const text = $temp.text();
      cy.get('input[type="text"]').type(`${text}`);
    });

    cy.get('.submitBtn').click();
  });

  it('edit workspace banner', () => {
    cy.get('.season-dropdown.dropdown > button').click();
    cy.get('.dropdown-menu.show > a:nth-last-child(2)').click();
    cy.get('.profile-dropdown > button').click();
    cy.get('.dropdown-menu.show > a:nth-child(3)').click();
    cy.get('.workspace-settings-accordion > div:nth-child(3)').click();
    cy.get('.background-input-container.mb-3 > input').clear().type('Long text for automated testing with cypress');
    cy.get('.background-input-container > textarea')
      .clear()
      .type('"Another long description for worksapce banner with cypress automeated testing"')
      .type(' - Nje emer kot ktu');
    cy.get('.background-input-container.mb-2 > input').clear().type(faker.lorem.words(7));
    cy.get('div.text-muted > button.btn-primary').click();
    cy.get('.background-camera > div > svg').click();
    const ImageFile = 'champions league.jpeg';
    cy.get('input[type="file"]').attachFile(ImageFile);
    cy.wait(1000);
    cy.get('.submitBtn').click();
    cy.get('#sidebarMenu > div:nth-child(2) > a').click();
  });

  it('financial calculation', () => {
    cy.get('.season-dropdown.dropdown > button').click();
    cy.get('.dropdown-menu.show > a:nth-last-child(2)').click();
    cy.get('.profile-dropdown > button').click();
    cy.get('.dropdown-menu.show > a:nth-child(3)').click();
    cy.get('.workspace-settings-accordion > div:nth-child(5)').click();
    //Cost of Capital
    cy.get('.costOfCapital-container > div > input').clear().type(faker.random.numeric(2));
    cy.get('.settings-edit-collapse-item:nth-child(1) > div.edit-item').click();
    cy.contains('Cost of Capital was changed successfully!').should('exist');
    //Amortization
    cy.get('.amortization-container > div > input').clear().type(faker.random.numeric(2));
    cy.get('.settings-edit-collapse-item:nth-child(2) > div.edit-item').click();
    cy.contains('Amortization was changed successfully!').should('exist');
  });

  it('workspace tags', () => {
    cy.get('.season-dropdown.dropdown > button').click();
    cy.get('.dropdown-menu.show > a:nth-last-child(2)').click();
    cy.get('.profile-dropdown > button').click();
    cy.get('.dropdown-menu.show > a:nth-child(3)').click();
    cy.get('.workspace-settings-accordion > div:nth-child(7)').click();
    //Tags name
    cy.get('.edit-tags-section > div:nth-child(1) > div.edit-item-content >form > input').clear().type(faker.finance.currencyName());
    cy.get('.edit-tags-section > div:nth-child(1)').click();
    cy.contains('Updated Workspace Tags Title!').should('exist');
    // Tags
    cy.get('.agreed-tags-textarea__input').type(faker.vehicle.manufacturer()).type('{enter}');
    cy.get('.workspace-tag:first-child > .agreed-tooltip-content-container').trigger('mouseover');
    cy.get('.workspace-tag:first-child > div.agreed-tag-action-dropdown.dropdown').invoke('show');
    //cy.get('.workspace-tag:first-child > div.agreed-tag-action-dropdown > button').click();
  });

  it('idea value buckets', () => {
    cy.get('.season-dropdown.dropdown > button').click();
    cy.get('.dropdown-menu.show > a:nth-last-child(2)').click();
    cy.get('.profile-dropdown > button').click();
    cy.get('.dropdown-menu.show > a:nth-child(3)').click();
    cy.get('.workspace-settings-accordion > div:nth-child(9)').click();
    //direct entry
    cy.get('.form-check-input').click();
    cy.contains('Direct entry was changed successfully!').should('exist');
    cy.get('.idea-live-preview > div > div:last-child > div').should('contain', 'Add value');
    //buckets
    cy.get('.idea-buckets-list-container:first-child > div:nth-child(1) > div > input').clear().type('20000');
    cy.get('.idea-buckets-list-container:first-child > div:nth-child(2) > div > input').clear().type('55000');
    cy.get('.idea-buckets-list-container:first-child > div:nth-child(3) > div > input').clear().type('100000');
    cy.get('.idea-buckets-list-container:first-child > div:nth-child(4) > div > input').clear().type('230000');
    cy.get('.idea-buckets-list-container:first-child > div:nth-child(5) > div > input').clear().type('4500000');
    cy.get('.submit-Btn').click();
    cy.contains('Company buckets were updated successfully!').should('exist');
  });

  it.skip('compensation range', () => {
    cy.get('.season-dropdown.dropdown > button').click();
    cy.get('.dropdown-menu.show > a:nth-last-child(2)').click();
    cy.get('.profile-dropdown > button').click();
    cy.get('.dropdown-menu.show > a:nth-child(3)').click();
    cy.get('.workspace-settings-accordion > div:nth-child(11)').click();
    cy.get('.form-check-input').click();
    cy.get('.submitBtn').click();
    //custom ranges
    cy.get('tbody[role="rowgroup"] > tr:nth-last-child(2) > td:last-child > div > div > button').click();
    cy.get('.dropdown-menu.show > a').click();
    cy.get('.compensation-range-header-add-button').click();
    cy.contains('You have uncompleted compensation ranges').should('exist');
    //range values
    cy.get('.compensation-range-table-row-uncompleted > td:first-child > div > div > button').click();
    cy.get('.dropdown-menu.show > a:nth-child(2)').click();
    cy.get('.compensation-range-table-row-uncompleted > td:nth-child(2) > div > div > div:nth-child(1) > div > input').type('200000');
    cy.get('.compensation-range-table-row-uncompleted > td:nth-child(2) > div > div > div:nth-child(3) > div > input').type('225000');
    cy.get('.page-content').click();
    cy.contains('Value updated successfully!').should('exist');
    // value +
    // cy.get('tbody[role="rowgroup"] > tr:last-child > td:last-child > div > div > button').click();
    // cy.get('.dropdown-menu.show > a').click();
    // cy.get('.compensation-range-header-add-button').click();
    // cy.contains('You have uncompleted compensation ranges').should('exist');
    // cy.get('.compensation-range-table-row-uncompleted > td:first-child > div > div > button').click();
    // cy.get('.dropdown-menu.show > a:nth-child(3)').click();
    // cy.get('.compensation-range-table-row-uncompleted > td:nth-child(2) > div > div > div:nth-child(1) > div > input').type('270000');
    // cy.get('tbody[role="rowgroup"] > tr:last-child > td:nth-child(3) > div > div > div > div > input').click();
    // cy.get('.page-content').click();
    // cy.contains('Value updated successfully!').should('exist');
    // ------ Up to value --------
    cy.get('tbody[role="rowgroup"] > tr:first-child > td:last-child > div > div > button').click();
    cy.get('.dropdown-menu.show > a').click();
    cy.get('.compensation-range-header-add-button').click();
    cy.contains('You have uncompleted compensation ranges').should('exist');
    cy.get('.compensation-range-table-row-uncompleted > td:first-child > div > div > button').click();
    cy.get('.dropdown-menu.show > a:nth-child(1)').click();
    cy.get('.compensation-range-table-row-uncompleted > td:nth-child(2) > div > div > div:nth-child(1) > div > input').type('270000');
    cy.get('.compensation-range-table-row-uncompleted > td:nth-child(3) > div > div > div:nth-child(1) > div > input').type('300000');
    cy.get('.page-content').click();
    cy.contains('Value updated successfully!').should('exist');
    // edit values
    cy.get('tbody[role="rowgroup"] > tr:nth-child(4) > td:nth-child(2) > div > div > div:nth-child(1) > div > input').clear().type('62000');
    cy.get('tbody[role="rowgroup"] > tr:nth-child(4) > td:nth-child(2) > div > div > div:nth-child(3) > div > input').clear().type('75000');
    cy.contains('Value updated successfully!').should('exist');
  });
});
