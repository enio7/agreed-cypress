/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

import { faker } from '@faker-js/faker';

describe('Tasks', () => {
  beforeEach(() => {
    cy.login();
    cy.wait(5000);
  });

  it('create a task', () => {
    cy.get('.sidebar__spaces-list > li:nth-child(1) > a').click();
    cy.get('[data-number="0"]').click();
    cy.get('.right-sidebar__menu > div > div > div > svg').click();
    cy.get('.tasks__header > button').click();
    cy.get('.modal-body > div > textarea').type(faker.lorem.words(15));
    cy.get('.modal-body > div:nth-child(2) > div > div > div > div.react-select__input-container > input').click();
    cy.get('.react-select__option:nth-child(1)').click();
    cy.get('.modal-body > div:nth-child(3) > div > button:nth-child(1)').click();
    cy.get('.modal-body > div:nth-child(4) > div > div > div > input').click();
    cy.get('.react-datepicker__month > div:nth-child(5) > div:nth-child(4)').click();
    cy.get('.submitBtn').click();
  });

  it('edit tasks', () => {
    cy.get('.sidebar__spaces-list > li:nth-child(1) > a').click();
    cy.get('[data-number="0"]').click();
    cy.get('.right-sidebar__menu > div > div > div > svg').click();
    cy.get('.accordion > div:nth-child(1) > div > div > div > div.tasks__phase__body > div:nth-child(4) > div > div  input').click();
    cy.get('.accordion > div:nth-child(1) > div > div > div > div.tasks__phase__body > div:nth-child(5) > div > div  input').click();
    cy.get('.accordion > div:nth-child(1) > div > div > div > div.tasks__phase__body > div:nth-child(6) > div > div  input').click();
    cy.get('.Toastify__toast-body').should('contain', 'Task successfully updated!');
    cy.get('div:nth-child(1) > div > div > div > div.tasks__phase__header > div > div:nth-child(2) > button').click();
    cy.wait(5000);
    cy.get('.accordion > div:nth-child(1) > div > div > div > div.tasks__phase__body > div:nth-child(1) > div.task-progress-bar > div.progress-text')
      .invoke('text')
      .then(parseFloat)
      .should('be.gt', 50);

    cy.get('div:nth-child(1) > div > div > div > div.tasks__phase__header > div > div:nth-child(3) > button').click();
    cy.get('.accordion > div:nth-child(1) > div > div > div > div.tasks__phase__body > div:last-child > div:nth-child(3) > div > button').click();
    cy.get('.dropdown-menu.show > a:nth-child(1)').click();
    cy.get('.modal-body > div > textarea').clear().type(faker.lorem.words(15));
    cy.get('.modal-body > div:nth-child(3) > div > button:nth-child(3)').click();
    cy.get('.modal-body > div:nth-child(4) > div > div > div > input').click();
    cy.get('[aria-label="Next Month"]').click();
    cy.get('.react-datepicker__month > div:nth-child(5) > div:nth-child(4)').click();
    cy.get('.submitBtn').click();
    cy.get('.Toastify__toast-body').should('contain', 'Task successfully updated!');
    cy.get('.accordion > div:nth-child(1) > div > div > div > div.tasks__phase__body > div:last-child > div:nth-child(3) > div > button').click();
    cy.get('.dropdown-menu.show > a:nth-child(2)').click();
    cy.get('.leaveBtn').click();
    cy.get('.Toastify__toast-body').should('contain', 'Task successfully deleted!');
  });
});
