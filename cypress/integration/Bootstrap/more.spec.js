/// <reference types="cypress" />


describe('', () => {
    beforeEach('Visit', () => {

        //Visit URL
        cy.visit('more.html')

    })

    it.only('List', () => {

        cy.get('#myUL').children('li').as('list')

        //List Header
        cy.get('#myDIV').contains('My To Do List').should('be.visible')

        //Header input bar
        cy.get('#myInput').invoke('attr', 'placeholder').should('eq', 'Title...')

        //Header add button
        cy.get('#myDIV>span').as('add').should('class', 'addBtn').and('be.visible')

        //Check n. of elements in list
        cy.get('@list').its('length').should('be.eq', 6)

        //Add to list
        cy.get('#myInput').type('scoverzi').then(( )=> {
            cy.get('#myDIV>span').click()
        })
        
        //Confirm added
        cy.get('@list').its('length').should('be.eq', 7)
        cy.get('@list').should('contain', 'scoverzi')

        //Check as "done"
        cy.get('')
        //Confirm "done"
        //Remove from list
        //Confirm removed


    })

    it('Collapsible', () => {

        //Collapsible header
        //Collapsible list
        //Open all collapsible
        //Confirm opened collapsible
        //Close all collapsible
        //Confirm closed collapsible
        //Open "section 2"
        //Confirm closed collapsible

    })

    it('Sort', () => {

        //Verify list order
        //Click Sort
        //Verify list should be in ascending alphabetical order
        //Click Sort
        //Verify list should be in descending alphabetical order

    })

    it('Register', () => {

        //Header txt
        //"Name:"
        //First Name is visible
        //Last Name is visible
        //"1,2,3,4" are visible
        //On step "1"
        //No credentials hit "Next"
        //Only username "Next"
        //Only pwd
        //Valid credentials hit "Next"
        //Step "1" done (bulina verde)
        //"Previous" button
        //"Contact Info"
        //"E-mail" visible
        //"Phone" visible
        //"1,2,3,4" are visible
        //On step "2"
        //No credentials hit "Next"
        //Only e-mail
        //Only phone n.
        //Valid credentials hit "Next"
        //Step "1,2" done (bulina verde)
        //"Previous" button
        //"B-day:"
        //"dd"
        //"mm"
        //"yyyy"
        //Each one of them
        //Each two of them
        //Valid credentials hit "Next"
        //Step "1,2,3" done (bulina verde)
        //"Previous" button
        //"Login Info:"
        //"Username..."
        //"Password..."
        //Only Uname
        //Only pwd
        //Valid credentials hit "Submit"

        

    })

})