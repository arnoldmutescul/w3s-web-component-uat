/// <reference types="cypress" />


describe('Button', () => {

    it('Button', () => {

        //Visit URL
        cy.visit('button.html')

        //Verify header is visible
        cy.contains('Button States').should('be.visible')

        //Click 1st row of buttons
        cy.get('.container>button').as('upperButtons')
        cy.get('@upperButtons').contains('Primary Button').should('not.be.disabled')
        cy.get('@upperButtons').contains('Active Primary').should('not.be.disabled').and('class', 'active')

        //Verify disabled buttons
        cy.get('@upperButtons').contains('Disabled Primary').should('be.disabled')
        cy.get('[class="btn btn-primary disabled"]').contains('Disabled Link').should('class', 'disabled').and('attr', 'href')

        //Verify "h2"/txt is visible
        cy.contains('Nesting Button Groups').should('be.visible')
        cy.contains('Nest button groups to create dropdown menus:').should('be.visible')

        //Verify 2nd row of buttons
        cy.get('.btn-group').contains('Apple').should('not.be.disabled')
        cy.get('.btn-group').contains('Samsung').should('not.be.disabled')

        //Verify dropdown not visible
        cy.get('.dropdown-menu').should('not.be.visible')

        //Verify dropdown content
        cy.get('.btn-group').contains('Sony').click()
        cy.get('.dropdown-menu').should('be.visible')
        cy.get('.dropdown-item').first().click()
        cy.get('.btn-group').contains('Sony').click()
        cy.get('.dropdown-item').last().click()

        //Verify dropdown not visible
        cy.get('.dropdown-menu').should('not.be.visible')

    })

})