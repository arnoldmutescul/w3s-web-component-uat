/// <reference types="cypress" />


describe('moar', () => {
    beforeEach('Visit', () => {

        //Visit URL
        cy.visit('more.html')

    })

    it('List', () => {

        cy.get('#myUL').children('li').as('list')

        //List Header
        cy.get('#myDIV').contains('My To Do List').should('be.visible')

        //Header input bar
        cy.get('#myInput').invoke('attr', 'placeholder').should('eq', 'Title...')

        //Header add button
        cy.get('#myDIV>span').as('add').should('class', 'addBtn').and('be.visible')

        //Check n. of elements in list
        cy.get('#myUL').children('li').its('length').should('be.eq', 6)

        //Add to list
        cy.get('#myInput').type('scoverzi').then(() => {
            cy.get('#myDIV>span').click()
        })
        
        //Confirm added
        cy.get('#myUL').children('li').its('length').should('be.eq', 7)
        cy.get('#myUL').children('li').contains('scoverzi').should('be.visible')

        //Check as "done"
        cy.get('#myUL>li').eq(6).click()

        //Confirm "done"
        cy.get('#myUL>li').eq(6).should('class', 'checked')

        //Remove from list
        cy.get('#myUL>li>span').eq(6).click()

        //Confirm removed
        cy.get('#myUL').children('li').contains('scoverzi').should('not.be.visible')

    })

    it('Collapsible', () => {

        //Collapsible header
        cy.contains('Animated Collapsibles').should('be.visible')
        cy.contains('Collapsible Set:').should('be.visible')

        //Collapsible list
        cy.get('.collapsible').its('length').should('eq', 3)

        //Collapsibles are closed by default
        cy.get('.collapsible').should('not.class', 'active').then(() => {
            cy.get('.content>p').should('not.be.visible').its('length').should('eq', 3)
        })

        //Open all collapsible
        cy.get('.collapsible').contains('Open Section 1').as('os1').click()
        cy.get('.collapsible').contains('Open Section 2').as('os2').click()
        cy.get('.collapsible').contains('Open Section 3').as('os3').click()
        // cy.get('.collapsible').click({multiple: true})
        
        //Confirm collapsibles are open
        cy.get('.collapsible').should('class', 'active').then(() => {
            cy.get('.content>p').should('be.visible').its('length').should('eq', 3)
        })

        //Close all collapsible
        cy.get('@os1').click()
        cy.get('@os2').click()
        cy.get('@os3').click()

        //Confirm closed collapsible
        cy.get('.collapsible').should('not.class', 'active').then(() => {
            cy.get('.content>p').should('not.be.visible').its('length').should('eq', 3)
        })

        //Open "section 2"
        cy.get('@os2').click()

        //Confirm only "2" is open
        cy.get('@os1').should('not.class', 'active')
        cy.get('div[class="content"]').eq(0).children('p').should('not.be.visible')
        cy.get('@os2').should('class', 'active')
        cy.get('div[class="content"]').eq(1).children('p').should('be.visible')
        cy.get('@os3').should('not.class', 'active')
        cy.get('div[class="content"]').eq(2).children('p').should('not.be.visible')

        //Close "2"
        cy.get('@os2').click()

        //Confirm closed collapsible
        cy.get('div[class="content"]').eq(0).children('p').should('not.be.visible')
        cy.get('div[class="content"]').eq(1).children('p').should('not.be.visible')
        cy.get('div[class="content"]').eq(2).children('p').should('not.be.visible')
        // cy.get('.collapsible').should('not.class', 'active').then(() => {
            // cy.get('.content>p').should('not.be.visible')
        // })

    })

    it('Sort', () => {

        //Header txt
        cy.get('p').contains('Click the button to sort the list ascending (A to Z):').should('be.visible')
        cy.get('p').contains('Click again to sort the list descending (Z to A):').should('be.visible')

        //Verify list order
        cy.get('#id01').should('be.visible').then(() => {
            cy.get('#id01>li').eq(0).should('contain', 'Oslo')
            cy.get('#id01>li').eq(1).should('contain', 'Stockholm')
            cy.get('#id01>li').eq(2).should('contain', 'Helsinki')
            cy.get('#id01>li').eq(3).should('contain', 'Berlin')
            cy.get('#id01>li').eq(4).should('contain', 'Rome')
            cy.get('#id01>li').eq(5).should('contain', 'Madrid')
        })
        

        //Click Sort
        cy.get('[onclick="sortListDir()"]').click()

        //Verify list should be in ascending alphabetical order
        cy.get('#id01').should('be.visible').then(() => {
            cy.get('#id01>li').eq(0).should('contain', 'Berlin')
            cy.get('#id01>li').eq(1).should('contain', 'Helsinki')
            cy.get('#id01>li').eq(2).should('contain', 'Madrid')
            cy.get('#id01>li').eq(3).should('contain', 'Oslo')
            cy.get('#id01>li').eq(4).should('contain', 'Rome')
            cy.get('#id01>li').eq(5).should('contain', 'Stockholm')
        })

        //Click Sort
        cy.get('[onclick="sortListDir()"]').click()

        //Verify list should be in descending alphabetical order
        cy.get('#id01').should('be.visible').then(() => {
            cy.get('#id01>li').eq(5).should('contain', 'Berlin')
            cy.get('#id01>li').eq(4).should('contain', 'Helsinki')
            cy.get('#id01>li').eq(3).should('contain', 'Madrid')
            cy.get('#id01>li').eq(2).should('contain', 'Oslo')
            cy.get('#id01>li').eq(1).should('contain', 'Rome')
            cy.get('#id01>li').eq(0).should('contain', 'Stockholm')
        })

    })

    it.only('Register', () => {

        //Header txt
        cy.get('#regForm>h1').should('contain', 'Register:').and('be.visible')

        //"Name:"
        cy.get('#regForm>.tab').eq(0).should('contain', 'Name:').and('be.visible')

        //First Name is visible
        cy.get('#regForm>.tab>p').children('input').as('camp').eq(0).invoke('attr', 'placeholder').should('eq', 'First name...')

        //Last Name is visible
        cy.get('@camp').eq(1).invoke('attr', 'placeholder').should('eq', 'Last name...')

        //"1,2,3,4" are visible
        cy.get('#regForm>div[style]').children('span').as('melina').should('be.visible')

        //On step "1"
        cy.get('@melina').eq(0).should('class', 'active')

        //No credentials hit "Next"
        cy.get('#nextBtn').click()
        cy.get('@camp').eq(0).should('class', 'invalid')
        cy.get('@camp').eq(1).should('class', 'invalid')

        //Only username "Next"
        cy.get('@camp').eq(0).type('blackbelt').then(() => {
            cy.get('#nextBtn').click()
            cy.get('@camp').eq(1).should('class', 'invalid')
        })
        cy.get('@camp').eq(0).should('class', '')
        cy.get('@camp').eq(0).clear()

        //Only pwd
        cy.get('@camp').eq(1).type('isgone').then(() => {
            cy.get('#nextBtn').click()
            cy.get('@camp').eq(0).should('class', 'invalid')
        })
        cy.get('@camp').eq(1).should('class', '')
        cy.get('@camp').eq(1).clear()

        //Valid credentials hit "Next"
        cy.get('@camp').eq(0).type('blackbelt')
        cy.get('@camp').eq(1).type('isgone').then(() => {
            cy.get('#nextBtn').click()
        })

        //Step "1" done (bulina verde)
        cy.get('@melina').eq(0).should('class', 'finish')

        //"Previous" button
        cy.get('#prevBtn').click()
        cy.get('#regForm>.tab').first().should('contain', 'Name:').and('be.visible').then(() => {
            cy.get('#nextBtn').click()
        })

        //"Contact Info"
        cy.get('#regForm>.tab').eq(1).should('contain', 'Contact Info:').and('be.visible')

        //"E-mail" visible
        cy.get('@camp').eq(2).invoke('attr', 'placeholder').should('eq', 'E-mail...')

        //"Phone" visible
        cy.get('@camp').eq(3).invoke('attr', 'placeholder').should('eq', 'Phone...')

        //"1,2,3,4" are visible
        cy.get('@melina').should('be.visible')

        //On step "2"
        cy.get('@melina').eq(1).should('class', 'active')

        //No credentials hit "Next"
        cy.get('#nextBtn').click()
        cy.get('@camp').eq(2).should('class', 'invalid')
        cy.get('@camp').eq(3).should('class', 'invalid')

        //Only e-mail
        cy.get('@camp').eq(2).type('sandoKan@1v1me.irl').then(() => {
            cy.get('#nextBtn').click()
            cy.get('@camp').eq(3).should('class', 'invalid')
        })
        cy.get('@camp').eq(2).should('class', '')
        cy.get('@camp').eq(2).clear()

        //Only phone n.
        cy.get('@camp').eq(3).type('6942069').then(() => {
            cy.get('#nextBtn').click()
            cy.get('@camp').eq(2).should('class', 'invalid')
        })
        cy.get('@camp').eq(3).should('class', '')
        cy.get('@camp').eq(3).clear()

        //Valid credentials hit "Next"
        cy.get('@camp').eq(2).type('sandoKan@1v1me.irl')
        cy.get('@camp').eq(3).type('6942069').then(() => {
            cy.get('#nextBtn').click()
        })

        //Step "1,2" done (bulina verde)
        cy.get('@melina').eq(0).should('class', 'finish')
        cy.get('@melina').eq(1).should('class', 'finish')

        //"Previous" button
        cy.get('#prevBtn').click()
        cy.get('#regForm>.tab').eq(1).should('contain', 'Contact Info:').and('be.visible').then(() => {
            cy.get('#nextBtn').click()
        })

        //"B-day:"
        cy.get('#regForm>.tab').eq(2).should('contain', 'Birthday:').and('be.visible')

        //"dd"
        cy.get('@camp').eq(4).invoke('attr', 'placeholder').should('eq', 'dd')

        //"mm"
        cy.get('@camp').eq(5).invoke('attr', 'placeholder').should('eq', 'mm')

        //"yyyy"
        cy.get('@camp').eq(6).invoke('attr', 'placeholder').should('eq', 'yyyy')

        //Each one of them
        cy.get('@camp').eq(4).type('31').then(() => {
            cy.get('#nextBtn').click()
            cy.get('@camp').eq(5).should('class', 'invalid')
            cy.get('@camp').eq(6).should('class', 'invalid')
        })
        cy.get('@camp').eq(4).should('class', '')
        cy.get('@camp').eq(4).clear()

        cy.get('@camp').eq(5).type('03').then(() => {
            cy.get('#nextBtn').click()
            cy.get('@camp').eq(4).should('class', 'invalid')
            cy.get('@camp').eq(6).should('class', 'invalid')
        })
        cy.get('@camp').eq(5).should('class', '')
        cy.get('@camp').eq(5).clear()

        cy.get('@camp').eq(6).type('1994').then(() => {
            cy.get('#nextBtn').click()
            cy.get('@camp').eq(4).should('class', 'invalid')
            cy.get('@camp').eq(5).should('class', 'invalid')
        })
        cy.get('@camp').eq(6).should('class', '')
        cy.get('@camp').eq(6).clear()

        //Each two of them
        cy.get('@camp').eq(4).type('31')
        cy.get('@camp').eq(5).type('03').then(() => {
            cy.get('#nextBtn').click()
            cy.get('@camp').eq(6).should('class', 'invalid')
        })
        cy.get('@camp').eq(4).clear()
        cy.get('@camp').eq(5).clear()

        cy.get('@camp').eq(4).type('31')
        cy.get('@camp').eq(6).type('1994').then(() => {
            cy.get('#nextBtn').click()
            cy.get('@camp').eq(5).should('class', 'invalid')
        })
        cy.get('@camp').eq(4).clear()
        cy.get('@camp').eq(6).clear()

        cy.get('@camp').eq(5).type('03')
        cy.get('@camp').eq(6).type('1993').then(() => {
            cy.get('#nextBtn').click()
            cy.get('@camp').eq(4).should('class', 'invalid')
        })
        cy.get('@camp').eq(5).clear()
        cy.get('@camp').eq(6).clear()

        //Valid credentials hit "Next"
        cy.get('@camp').eq(4).type('31')
        cy.get('@camp').eq(5).type('03')
        cy.get('@camp').eq(6).type('1993').then(() => {
            cy.get('#nextBtn').click()
        })

        //Step "1,2,3" done (bulina verde)
        cy.get('@melina').eq(0).should('class', 'finish')
        cy.get('@melina').eq(1).should('class', 'finish')
        cy.get('@melina').eq(2).should('class', 'finish')

        //"Previous" button
        cy.get('#prevBtn').click()
        cy.get('#regForm>.tab').eq(2).should('contain', 'Birthday:').and('be.visible').then(() => {
            cy.get('#nextBtn').click()
        })

        //"Login Info:"
        cy.get('#regForm>.tab').eq(3).should('contain', 'Login Info:').and('be.visible')

        //"Username..."
        cy.get('@camp').eq(7).invoke('attr', 'placeholder').should('eq', 'Username...')

        //"Password..."
        cy.get('@camp').eq(8).invoke('attr', 'placeholder').should('eq', 'Password...')

        //Only Uname
        cy.get('@camp').eq(7).type('Username...').then(() => {
            cy.get('#nextBtn').click()
            cy.get('@camp').eq(8).should('class', 'invalid')
        })
        cy.get('@camp').eq(7).should('class', '')
        cy.get('@camp').eq(7).clear()

        //Only pwd
        cy.get('@camp').eq(8).type('Password...').then(() => {
            cy.get('#nextBtn').click()
            cy.get('@camp').eq(7).should('class', 'invalid')
        })
        cy.get('@camp').eq(8).should('class', '')
        cy.get('@camp').eq(8).clear()

        //Valid credentials hit "Submit"
        cy.get('@camp').eq(7).type('Username...')
        cy.get('@camp').eq(8).type('Password...').then(() => {
            cy.get('#nextBtn').click()
        })

        

    })

})