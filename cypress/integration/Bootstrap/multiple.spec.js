/// <reference types="cypress" />


describe('Multiple', () => {

    beforeEach('', () => {

        //Visit URL
        cy.visit('/mutiple.html')

    })

    it('Hover', () => {
        //Confirm popover is not visible
        cy.get('[data-bs-toggle="popover"]').should('not.attr', 'aria-describedby')

        //Hover over popover
        cy.get('[data-bs-toggle="popover"]').trigger('mouseover').should('attr', 'aria-describedby')

        //Confirm popover is visible
        cy.get('.popover-header').contains('Header').should('be.visible')
        cy.get('.popover-body').contains('Popover text').should('be.visible')

        //Unhover popover
        cy.get('[data-bs-toggle="popover"]').trigger('mouseout').wait(500)

        //Confirm popover is not visible
        cy.get('[data-bs-toggle="popover"]').should('not.attr', 'aria-describedby')

    })

    it.only('Toast', () => {

        //Toast not visible
        cy.get('.toast').should('not.be.visible')

        //Click toast
        cy.get('#toastbtn').click()

        //Toast is visible
        cy.get('.toast').should('be.visible')

        //Check text
        cy.get('.toast').contains('Toast Header').should('be.visible')
        cy.get('.toast').contains('Some text inside the toast body').should('be.visible')

        //Cloase Toast
        cy.get('[data-bs-dismiss="toast"]').click()

        //Toast not visible
        cy.get('.toast').should('not.be.visible')

    })

    it('Sidebar', () => {

        //Sidebar not visible
        //Open sidebar
        //Confirm sidebar is visible
        //Close sidebar
        //Confirm sidebar is not visible

    })

})