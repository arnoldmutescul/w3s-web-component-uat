/// <reference types="cypress" />


describe('Home Page', () => {

    it('Home Page', () => {

        //Visit page
        cy.visit('/home.html')

        //Body containers are visible
        cy.get('[class="container-fluid p-5 bg-primary text-white text-center"]').should('be.visible')
        cy.get('.mt-5>.row').children('div').should('length', '3').and('be.visible')

        // cy.get('[data-cy="column-one"]').contains('Column 1').should('be.visible')
        // cy.get('[data-cy="column-two"]').contains('Column 2').should('be.visible')
        // cy.get('[data-cy="column-three"]').contains('Column 3').should('be.visible')
        //this
    })

})