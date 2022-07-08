// /// <reference types="cypress" />
// /// <reference types="cypress-xpath" />

// const faker = require('faker');
// require('cypress-xpath');

// describe('Account Settings', () => {
//   beforeEach(() => {
//     cy.visit('/login');
//     cy.get('.form_input').type('enio+44@motomtech.com');
//     cy.get('.form_input-password').type('Test@123');
//     cy.get('.login_form-section-form_button').click();
//     cy.wait(5000);
//   });
//   it('personal information', () => {
//     cy.get('.navbar-actions > div:nth-child(2) > div > button').click();
//     cy.get(
//       '.navbar-nav > div:nth-child(2) > div > div > a:nth-child(1)'
//     ).click();

//     //const ImageFile = 'photo.jpeg';
//     //cy.get('input[type="file"]').attachFile(ImageFile);

//     cy.get('input[name="firstName"]').clear();
//     cy.get('input[name="firstName"]').type(faker.name.firstName());
//     cy.get('input[name="lastName"]').clear().type(faker.name.lastName());
//     cy.get('input[name="title"]').clear().type(faker.company.bs());
//     cy.get('input[name="userEmail"]').clear().type('enio+77@motomtech.com');
//     cy.get('.updateBtn').click();

//     cy.get('.form_input').type('enio+77@company.io.al');
//     cy.get('.form_input-password').type('Test@123');
//     cy.get('.login_form-section-form_button').click();
//     cy.get('.navbar-actions > div:nth-child(2) > div > button').click();
//     cy.get(
//       '.navbar-nav > div:nth-child(2) > div > div > a:nth-child(1)'
//     ).click();

//     cy.get('input[name="userEmail"]').clear().type('enio+44@motomtech.com');
//     cy.get('.updateBtn').click();
//   });
// });
