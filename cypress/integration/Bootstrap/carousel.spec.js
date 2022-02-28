/// <reference types="cypress" />


describe('Carousel', () => {
    it('Carousel', () => {

        //Visit URL
        cy.visit('carousel.html')

        //Check txt
        cy.contains('Carousel Example').should('be.visible')
        cy.contains('The following example shows how to create a basic carousel with indicators and controls.').should('be.visible')

        //Check 1st img is visible
        cy.get('img[src="pictures/la.jpg"]').as('LA')
        cy.get('@LA').should('be.visible')

        //Check other img not visible
        cy.get('img[src="pictures/chicago.jpg"]').as('CC')
        cy.get('@CC').should('not.be.visible')
        cy.get('img[src="pictures/ny.jpg"]').as('NY')
        cy.get('@NY').should('not.be.visible')

        //Check when 2nd img is visible, 1st shouldn't be
        cy.get('[data-bs-slide-to="1"]').click()
        cy.get('@LA').should('not.be.visible')
        cy.get('@CC').should('be.visible')

        //right/left arrows
        cy.get('.carousel-control-prev').click()
        cy.get('@LA').should('be.visible')
        cy.get('.carousel-control-next').click()
        cy.get('@CC').should('be.visible')
        
        //Carousel inner
        cy.get('[data-bs-slide-to="1"]').click()
        cy.get('@CC').should('be.visible')
        cy.get('[data-bs-slide-to="2"]').click()
        cy.get('@CC').should('not.be.visible')
        cy.get('@NY').should('be.visible')
        cy.get('[data-bs-slide-to="0"]').click()
        cy.get('@NY').should('not.be.visible')
        cy.get('@LA').should('be.visible')


    })

})