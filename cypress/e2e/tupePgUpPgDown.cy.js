/// <reference types = "Cypress" /> 
//para que funcionen los comandos

describe("Ejemplo de Type PageUp, PageDown ", () => {

        it("Type Page Up ", () => {
                cy.visit("https://testingqarvn.com.es/datos-personales/")
                cy.title().should('eq', 'Datos Personales | TestingQaRvn')
                cy.wait(1000)

                cy.get("#wsf-1-field-21").type('{pageup}')
                cy.wait(2000)

            }) //cierre de it

        it.only("Type Page Down ", () => {
                cy.visit("https://testingqarvn.com.es/datos-personales/")
                cy.title().should('eq', 'Datos Personales | TestingQaRvn')
                cy.wait(1000)

                cy.get("#wsf-1-field-21").type('{pagedown}')

                cy.wait(2000)

            }) //cierre de it

    }) //cierre de descibe