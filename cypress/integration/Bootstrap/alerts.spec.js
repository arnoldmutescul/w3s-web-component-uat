/// <reference types="cypress" />


describe('Alerts', () => {

    it('Alerts', () => {

        //Visit URL
        cy.visit('/alerts.html')

        //Main Container should be visible
        cy.get('[class="container mt-3"]').should('be.visible').as('all')


        //Check text
        cy.get('@all').contains('Alerts')
        cy.get('@all').contains('The button with class="btn-close"')
        cy.get('@all').contains('The alert-dismissible')
        // cy.get('@all').contains('Alerts').should('be.visible')  (e nevoie daca confirm ca vad container???)
        // cy.get('@all').contains('The button with class="btn-close"').should('be.visible')
        // cy.get('@all').contains('The alert-dismissible').should('be.visible')

        //Check URL
        //cy.get('@all').children('.alert').should('be.visible')
        cy.get('.alert-info .alert-link').contains('change or action.').should('attr', 'href')
        cy.get('.alert-warning .alert-link').contains('might need attention.').should('attr', 'href')
        cy.get('.alert-primary .alert-link').contains('important action.').should('attr', 'href')
        cy.get('.alert-secondary .alert-link').contains('important action.').should('attr', 'href')
        cy.get('.alert-light .alert-link').contains('alert.').should('attr', 'href')

        //Check if Alerts are visible (???daca interactionez cu toate, e nevoie?)
        cy.get('@all').children('.alert').should('be.visible')
        // y no work??? cy.get('.alert-dark').children('.btn-close').should('attr', 'button')

        //Close all
        //Check if closed
        cy.get('.alert>button').click({ multiple: true }) //BIG NONO
        // cy.get('.alert-success').children('.btn-close').click()
        // cy.get('.alert-info').children('.btn-close').click()
        // cy.get('.alert-warning').children('.btn-close').click()
        // cy.get('.alert-danger').first().should('contain', 'Danger!').as('danger')
        // cy.get('@danger').children('.btn-close').click()
        // cy.get('.alert-primary').children('.btn-close').click()
        // cy.get('.alert-secondary').children('.btn-close').click()
        // cy.get('.alert-dark').children('.btn-close').click()
        // cy.get('.alert-light').children('.btn-close').click()
        // cy.get('.alert-danger').children('.btn-close').click()

        // //Check if closed
        cy.get('@all').children('.alert').should('be.visible')
        // ??? x-ray? (be.visible) yields passed

    })

})