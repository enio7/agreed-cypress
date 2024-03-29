/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

import { faker } from '@faker-js/faker';
require('cypress-xpath');

describe('Add a event', () => {
  beforeEach(() => {
    cy.login();
    cy.wait(5000);
  });

  it('add a event from events tab', () => {
    cy.get(':nth-child(1) > a > .nav-item > .nav-link').click();
    cy.get('.page-tabs__tabs__tab--name').contains('Events').click();
    cy.get('.page-tabs__right > button').click();
    cy.get('#formTopic').type(faker.commerce.productDescription());
    cy.get('.hostings-dropdown > div > div > div > input').click();
    cy.get('.react-select__option:nth-child(1)').click();
    cy.get('.event-form-page').click();
    cy.get('.members-dropdown > div > div > div > input').click();
    cy.get('.react-select__option:nth-child(1)').click();
    cy.get('.members-dropdown > div > div > div > input').type(faker.internet.email());
    cy.get('.react-select__option:nth-child(1)').click();
    cy.get('.hostings-dropdown > div > div > div:nth-child(2) > div.react-select__multi-value__remove').click();
    cy.get('.spaces-page').click();
    cy.get('.form-group:nth-child(4) > div:nth-child(2) > div:nth-child(1) > div > div > input').click();
    cy.get('[aria-label="Next Month"]').click();
    cy.get('.react-datepicker__month > div:nth-child(4) > div:nth-child(3)').click();
    cy.get('[placeholder="Select Time"]').type('12:00 PM');
    cy.get('.spaces-page').click();
    cy.get('[name="meetingLink"]').type(faker.address.streetAddress());
    cy.get('#formDescription').type(faker.lorem.sentences());
    cy.get('.tags-textarea--input').type(faker.internet.color()).type('{enter}');
    cy.get('.tags-textarea--input').type(faker.internet.color()).type('{enter}');
    cy.get('.submit-button').click();
    cy.contains('Event successfully created!').should('exist');
  });

  it('add an event from space homepage', () => {
    cy.get(':nth-child(1) > a > .nav-item > .nav-link').click();
    cy.get('.add-new-items-dropdown > button').click();
    cy.get('div.add-new-items-dropdown.show.dropdown > div > a:nth-child(2)').click();
    cy.get('#formTopic').type(faker.commerce.productDescription());
    cy.get('.hostings-dropdown > div > div > div > input').click();
    cy.get('.react-select__option:nth-child(1)').click();
    cy.get('.event-form-page').click();
    cy.get('.members-dropdown > div > div > div > input').click();
    cy.get('.react-select__option:nth-child(1)').click();
    cy.get('.members-dropdown > div > div > div > input').type(faker.internet.email());
    cy.get('.react-select__option:nth-child(1)').click();
    cy.get('.members-dropdown > div > div > div:nth-child(2) > div.react-select__multi-value__remove').click();
    cy.get('.spaces-page').click();
    cy.get('.form-group:nth-child(4) > div:nth-child(2) > div:nth-child(1) > div > div > input').click();
    cy.get('[aria-label="Next Month"]').click();
    cy.get('.react-datepicker__month > div:nth-child(4) > div:nth-child(3)').click();
    cy.get('[placeholder="Select Time"]').type('12:00 PM');
    cy.get('.spaces-page').click();
    cy.get('[name="meetingLink"]').type(faker.address.streetAddress());
    cy.get('#formDescription').type(faker.lorem.sentences());
    cy.get('.tags-textarea--input').type(faker.internet.color()).type('{enter}');
    cy.get('.tags-textarea--input').type(faker.internet.color()).type('{enter}');
    cy.get('.submit-button').click();
    cy.contains('Event successfully created!').should('exist');
  });

  it('add a new event from My Events', () => {
    cy.get('#sidebarMenu > div:nth-child(5) > a').click();
    cy.get('.page-tabs__right > button').click();
    cy.get('[role="combobox"]').click();
    cy.xpath('//div[contains(@id, "react-select")][contains(@id, "option")][1]').click();
    cy.get('.submitBtn').click();
    cy.get('#formTopic').type(faker.commerce.productDescription());
    cy.get('.hostings-dropdown > div > div > div > input').click();
    cy.get('.react-select__option:nth-child(1)').click();
    cy.get('.event-form-page').click();
    cy.get('.members-dropdown > div > div > div > input').click();
    cy.get('.react-select__option:nth-child(1)').click();
    cy.get('.members-dropdown > div > div > div > input').type(faker.internet.email());
    cy.get('.react-select__option:nth-child(1)').click();
    cy.get('.hostings-dropdown > div > div > div:nth-child(2) > div.react-select__multi-value__remove').click();
    cy.get('.spaces-page').click();
    cy.get('.form-group:nth-child(4) > div:nth-child(2) > div:nth-child(1) > div > div > input').click();
    cy.get('[aria-label="Next Month"]').click();
    cy.get('.react-datepicker__month > div:nth-child(4) > div:nth-child(3)').click();
    cy.get('[placeholder="Select Time"]').type('12:00 PM');
    cy.get('.spaces-page').click();
    cy.get('[name="meetingLink"]').type(faker.address.streetAddress());
    cy.get('.form-check-input').click();
    cy.get('#formDescription').type(faker.lorem.sentences());
    cy.get('.tags-textarea--input').type(faker.internet.color()).type('{enter}');
    cy.get('.tags-textarea--input').type(faker.internet.color()).type('{enter}');
    cy.get('.submit-button').click();
    cy.contains('Event successfully created!').should('exist');
  });
});
