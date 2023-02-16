//<reference types = "Cypress" /> 
//para que funcionen los comandos

describe("Primer Reto ", () => {

        it(" ", () => {
                cy.visit("https://demoqa.com/webtables")
                cy.title().should('eq', "ToolsQA")
                cy.wait(1000)

            }) //cierre de it

    }) //cierre de descibe