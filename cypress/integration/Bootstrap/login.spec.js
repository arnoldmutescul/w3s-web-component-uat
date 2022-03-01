/// <reference types="cypress" />


describe('Login', () => {

    beforeEach('', () => {

        //Visit url
        cy.visit('login.html')

    })

    it('Login', () => {

        //Visible header
        cy.get('.container>h2').should('contain', 'Stacked form').and('be.visible')

        //Visible Email lable and placeholder
        cy.get('[for="email"]').contains('Email:').as('email').should('be.visible')
        cy.get('#email').should('be.visible').invoke('attr', 'placeholder').should('eq', 'Enter email')

        //Visible Psw lable and placeholder
        cy.get('[for="pwd"]').contains('Password:').as('pwd').should('be.visible')
        cy.get('#pwd').should('be.visible').invoke('attr', 'placeholder').should('eq', 'Enter password')

        //Credentials (valid and invalid but not the case)
        cy.get('@email').type('cyka_blyat@slavaukraina.ua')
        cy.get('@pwd').type('vladimirputin')

        //Checkbox
        cy.get('.form-check>.form-check-label>.form-check-input')
                .should('be.visible')
                .and('not.be.checked')
                .as('checkbox')
                .invoke('attr', 'type')
                .should('eq', 'checkbox')
        cy.get('@checkbox').should('not.be.checked').check()
        cy.get('@checkbox').should('be.checked').uncheck().should('not.be.checked')
        cy.get('.form-check>.form-check-label').contains('Remember me').should('be.visible')

        //Form submit btn
        cy.get('div').children('button').eq(0).as('formSubmit')
        cy.get('@formSubmit').contains('Submit').should('class', 'btn').and('be.visible').click() //.should('class', 'btn') kinda irelevant

    })

    it('Suggestions', () => {

        //"Suggestions" container
        cy.get('#comment').should('be.visible').type("GO RUSSIA!!! You're doing... your best.")
        // cy.get('#comment').contains("GO RUSSIA!!! You're doing... your best")    (cum verific ca exista textul?)

        //"Suggestions" submit btn
        cy.get('div').children('button').eq(1).as('suggestBtn')
        cy.get('@suggestBtn').contains('Submit').should('class', 'btn').and('be.visible').click() //.should('class', 'btn') kinda irelevant

    })

})