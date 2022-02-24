/// <reference types="cypress" />


describe('Modal', () => {
    it('Modal', () => {
        //Visit url
        //Check if text is visible
        //Check if button is visible / if clickable
        cy.visit('/modal.html')
        cy.contains('Modal Example').should('be.visible')
        cy.contains('Click on the button to open the modal.').should('be.visible')
        cy.get('button[type="button"]').contains('Open modal').as('openModal')
        cy.get('@openModal').click()

        //Check if the modal(popup) is visible
        //Check modal's contents visibility / readability
        cy.get('div[class="modal-content"]').should('be.visible')
        cy.get('div[class="modal-header"]').contains('Modal Heading').should('be.visible')
        cy.get('[class="btn-close"]').should('be.visible').click()
        cy.get('[id="myModal"]').should('not.be.visible')
        cy.get('@openModal').click()
        cy.get('div[class="modal-body"]').contains('Modal body..').should('be.visible')
        cy.get('div[class="modal-footer"]').contains('Close').should('be.visible').click()

        //Check if popup is closed
        cy.get('[id="myModal"]').should('not.be.visible')

    })
})