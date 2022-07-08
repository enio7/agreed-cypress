// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

//const { response } = require('express');
import 'cypress-file-upload';

//const cypress = require("cypress");

Cypress.Commands.add('login', () => {
  cy.visit('/login');
  cy.get('.form_input').type('enio+33@motomtech.com');
  cy.get('.form_input-password').type('Test@123');
  cy.get('.visibility-icon > .w-100 > svg').click();
  cy.get('.login_form-section-form_button').click();
});

Cypress.Commands.add('getAndSetToken', () => {
  Cypress.log({
    message: 'Requests token and sets in local storage',
    displayName: 'GetToken',
  });
  cy.request({
    method: 'POST',
    url: '/login',
    failOnStatusCode: false,
    body: {
      email: 'enio+33@motomtech.com',
      password: 'Test@123',
    },
  }).then((resp) => {
    const { token } = response.body.user;
    localStorage.setItem('access_token', token);
  });
});

// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
