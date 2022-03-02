/// <reference types="cypress" />


describe('D.S.C.R', () => {

    beforeEach('Visit', () => {

    //Visit url
    cy.visit('many.html')
        
    })

    it('Dropdown', () => {
        
        //Verify text
        cy.get('div').eq(0).contains('Select list (select one):').should('be.visible')

        //Verify number of options
        cy.get('#sel1').children('option').eq(3)

        //Verify current option
        cy.get('#sel1').should('value', '1')

        //Verify unselected option
        cy.get('#sel1').should('not.value', '2')

        //Select and confirm
        cy.get('#sel1').select('3').should('value', '3')

        //Verify unselected
        cy.get('#sel1').should('not.value', '1')
    })

    it('Slider', () => {

        //Get initial value
        cy.get('#customRange').should('be.visible').and('value', '50')

        //Modify Value
        // cy.get('#customRange').type('{leftArrow}, {leftArrow}')   //requires JS , pretty sure

        //Confirm current value
        
    })

    it('Radio', () => {

        //Verify current selection
        cy.get('#radio1').should('be.checked')

        //Change selection
        cy.get('#radio2').should('not.be.checked').check().should('be.checked')

        //Confirm changed selection
        cy.get('#radio1').should('not.be.checked')

        //Verify unselectable selection
        cy.get('div').eq(1).children('div').eq(2).children('input').should('attr', 'disabled')
        
    })

    it.only('Credentials', () => {
        
        //Blank credentials
        //Only username
        //Only pwd
        //Verify Checkbox
        //Checkbox on
        //Confirm Checkbox
        //Uncheck(box)
        //Confirm Checkbox

    })

})