/// <reference types="cypress" />
/// <reference types="cypress-xpath" />
require('cypress-xpath')
const { fake } = require('faker');
const faker = require("faker");


describe("Authorization Modal", () => {
    it('Sign Up', () => {
        cy.visit('/signup')

        cy.xpath('//input[@name="email"]').type(faker.internet.email())
        cy.xpath('//input[@name="firstName"]').type(faker.name.firstName())
        cy.xpath('//input[@name="lastName"]').type(faker.name.lastName())
        cy.xpath('//input[@name="password"]').type('Test@123{enter}')
        cy.xpath('//input[@name="passwordConfirmation"]').type('Test@123{enter}')
        cy.xpath('//input[@name="checkbox"]').click()
        cy.get('.form_button').click()

    })
})