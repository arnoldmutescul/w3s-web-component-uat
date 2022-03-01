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

    it('Toast', () => {

        //Toast not visible
        cy.get('.toast').should('not.be.visible')

        //Click toast
        cy.get('#toastbtn').click().wait(500)

        //Toast is visible
        cy.get('.toast').should('be.visible')

        //Check text
        cy.get('.toast').contains('Toast Header').should('be.visible')
        cy.get('.toast').contains('Some text inside the toast body').should('be.visible')

        //Cloase Toast
        cy.get('[data-bs-dismiss="toast"]').click().wait(500)

        //Toast not visible
        cy.get('.toast').should('not.be.visible')

    })

    it('Sidebar', () => {

        //Sidebar not visible
        cy.get('#demo').should('not.be.visible')

        //Open sidebar
        cy.get('.container-fluid>.btn').contains('Open Offcanvas Sidebar').click().wait(500) //not w/ wait but w/ intercept if i have what to intercept

        //Confirm sidebar is visible
        cy.get('#demo').should('be.visible')

        //Verify sidebar
        cy.get('#demo>.offcanvas-header>.offcanvas-title').contains('Heading')
        cy.get('#demo>.offcanvas-body').children('p').should('length', '3')
        cy.get('#demo>.offcanvas-body').children('button').contains('A Button').should('be.visible').click()
        cy.get('#demo>.offcanvas-header>.btn-close').should('be.visible').as('closeSidebar')

        //Close sidebar
        cy.get('@closeSidebar').click().wait(500)

        //Confirm sidebar is not visible
        cy.get('#demo').should('not.be.visible')

    })

})