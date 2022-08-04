/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

const faker = require('faker');
require('cypress-xpath');

describe('Global Search', () => {
    beforeEach(() => {
        cy.login()
        cy.wait(5000)
    })

    it.skip('global-search ideas', () => {
        cy.get('.navbar-search__form').click()
        cy.get('.navbar-search__input').type('test').type('{enter}')
        cy.get('.page-tabs__tabs > a:nth-child(1)').should('contain', 'Ideas')
        cy.get('.moreFilters').click()
        //people filter
        cy.get('.ideas__filters__container > div > div:nth-child(1)').click()
        cy.get('.section__search > input').type('enio').wait(1000)
        cy.get('.list-unstyled > li:nth-child(1)').click()
        cy.get('.ideas__filters__container > div > div:nth-child(1)').click()
        //phase filter
        cy.get('.ideas__filters__container > div > div:nth-child(2)').click()
        cy.get('.dropdown-menu.show > a:nth-child(2)').click()
        //date filter
        cy.get('.ideas__filters__container > div > div:nth-child(3)').click()
        cy.get('.rdrStaticRanges > button:last-child').click()
        cy.get('.date-range-dropdown__actions > button:nth-child(2)').click()
        cy.get('.ideas__filters__container > div > div:nth-child(3)').click()
        cy.get('.rdrNextPrevButton:nth-child(1)').click()
        cy.get('.rdrMonth > div > button:nth-child(25)').click()
        cy.get('.rdrNextButton').click().click()
        cy.get('.rdrMonth > div > button:nth-child(25)').click()
        cy.get('.date-range-dropdown__actions > button:nth-child(2)').click()
        //work title filter
        cy.get('.ideas__filters__container > div > div:nth-child(4)').click()
        cy.get('.list-unstyled > li:nth-child(1)').click()
        cy.get('.option-item__content > svg').click()
        cy.get('.ideas__filters__container > div > div:nth-child(4)').click()
        //value filter
        cy.get('.ideas__filters__container > div > div:nth-child(5)').click()
        cy.get('.agreed-range-selector-input-values > div:last-child').clear().type('100000')
        //risk filter
        cy.get('.ideas__filters__container > div > div:nth-child(6)').click()
        cy.get('.dropdown-menu.show > a:nth-child(3)').click()
        //tag filter
        cy.get('.ideas__filters__container > div > div:nth-child(7)').click()
        cy.get('.section__search > input').type('tag')
        cy.get('.list-unstyled > li:nth-child(2)').click()
        cy.get('.section__selected-options > div > ul > li > div > svg').click()
        cy.get('.ideas__filters__container > div > div:nth-child(7)').click()
        //reset
        cy.get('.isPartAndResetFilters__button-styles').click() 
        //most-relevant filter - filters by title or description?
    })

    it.skip('global-search events', () => {
        cy.get('.navbar-search__form').click()
        cy.get('.navbar-search__input').type('e').type('{enter}')
        cy.get('.page-tabs__tabs > a:nth-child(2)').should('contain', 'Events').click()
        cy.get('.moreFilters').click()
        //hosts filter
        cy.get('.events__filters__container > div >div:nth-child(1)').click()
        cy.get('.list-unstyled > li:nth-child(1)').click()
        cy.get('.events__filters__container > div >div:nth-child(1)').click()
        cy.get('.globalSearch__filters__container > button').click()
        //members filter
        cy.get('.events__filters__container > div >div:nth-child(2)').click()
        cy.get('.section__search > input').type('dina')
        cy.get('.list-unstyled > li:nth-child(1)').click()
        cy.get('.events__filters__container > div >div:nth-child(2)').click()
        //location filter
        cy.get('.events__filters__container > div >div:nth-child(3)').click()
        cy.get('.section__search > input').type('Tirane')
        cy.get('.list-unstyled > li:nth-child(1)').click()
        cy.get('.events__filters__container > div >div:nth-child(3)').click()
        cy.get('.globalSearch__filters__container > button').click()
        //date filter
        cy.get('.events__filters__container > div > div:nth-child(4)').click()
        cy.get('.rdrStaticRanges > button:nth-child(3)').click()
        cy.get('.date-range-dropdown__actions > button:nth-child(2)').click()
        cy.get('.date-range-dropdown > button > i').click()
        //tag
        //not working
        //only events
        cy.get('.filters__container > label').click()
    })

    it.skip('global-search spaces', () => {
        cy.get('.navbar-search__form').click()
        cy.get('.navbar-search__input').type('e').type('{enter}')
        cy.get('.page-tabs__tabs > a:nth-child(3)').should('contain', 'Spaces').click()
        //space type filter
        cy.get('.changeSpaceTypeTextAndHideIcon > button').click()
        cy.get('.dropdown-menu.show > a:nth-child(2)').click()
        cy.get('.spaces__filters__container > div > div > button').should('contain', 'Private spaces')
        cy.get('.spaces__filters__container > div > div > button').click()
        cy.get('.dropdown-menu.show > a:nth-child(3)').click()
        cy.get('.spaces__filters__container > div > div > button').should('contain', 'Public spaces')
        cy.get('.spaces__filters__container > div > div > button').click()
        cy.get('.dropdown-menu.show > a:nth-child(4)').click()
        cy.get('.spaces__filters__container > div > div > button').should('contain', 'Invisible spaces')
        cy.get('.spaces__filters__container > div > div > button').click()
        cy.get('.dropdown-menu.show > a:nth-child(1)').click()
        //only spaces
        cy.get('.filters__container > label').click()
        cy.get('.globalSearch__filters__container > button').click()
    })

    it('global-search files', () => {
        cy.get('.navbar-search__form').click()
        cy.get('.navbar-search__input').type('e').type('{enter}')
        cy.get('.page-tabs__tabs > a:nth-child(4)').should('contain', 'Files').click()
        //people filter
        cy.get('.files__filters__container > div > div:nth-child(1)').click()
        cy.get('.list-unstyled > li:nth-child(1)').click()
        cy.get('.files__filters__container > div > div:nth-child(1)').click()
        //spaces filter
        cy.get('.files__filters__container > div > div:nth-child(2)').click()
        cy.get('.section__search > input').type('general')
        cy.get('.list-unstyled > li:nth-child(1)').click()
        cy.get('.files__filters__container > div > div:nth-child(2)').click()
        //date filter
        cy.get('.files__filters__container > div > div:nth-child(3)').click()
        cy.get('.rdrDays > button:nth-child(2)').click()
        cy.get('.rdrDays > button:nth-child(32)').click()
        cy.get('.date-range-dropdown__actions > button:nth-child(2)').click()
        cy.get('.globalSearch__filters__container > button').click()
        //file type filter
        cy.get('.files__filters__container > div > div:nth-child(4)').click()
        cy.get('.dropdown-menu.show > a:nth-child(2)').click()
        cy.get('.files__filters__container > div > div:nth-child(4)').should('contain', 'Spreadsheet')
        cy.get('.files__filters__container > div > div:nth-child(4)').click()
        cy.get('.dropdown-menu.show > a:nth-child(3)').click()
        cy.get('.files__filters__container > div > div:nth-child(4)').should('contain', 'Document')
        cy.get('.files__filters__container > div > div:nth-child(4)').click()
        cy.get('.dropdown-menu.show > a:nth-child(4)').click()
        cy.get('.files__filters__container > div > div:nth-child(4)').should('contain', 'PDF')
        cy.get('.files__filters__container > div > div:nth-child(4)').click()
        cy.get('.dropdown-menu.show > a:nth-child(5)').click()
        cy.get('.files__filters__container > div > div:nth-child(4)').should('contain', 'Presentation')
        cy.get('.files__filters__container > div > div:nth-child(4)').click()
        cy.get('.dropdown-menu.show > a:nth-child(6)').click()
        cy.get('.files__filters__container > div > div:nth-child(4)').should('contain', 'Image')
        cy.get('.files__filters__container > div > div:nth-child(4)').click()
        cy.get('.dropdown-menu.show > a:nth-child(1)').click()
        cy.get('div.globalSearch__container > div:nth-child(5) > div > a > button').click()
    })

    it('global-space members', () => {
        cy.get('.navbar-search__form').click()
        cy.get('.navbar-search__input').type('e').type('{enter}')
        cy.get('.page-tabs__tabs > a:nth-child(5)').should('contain', 'Members').click()
        //WIP
    })
})