/// <reference types = "Cypress" /> 
//para que funcionen los comandos
require('cypress-plugin-tab')

describe("Ejemplo función Tab ", () => {

        it("Type con Tab ", () => {
                cy.visit("https://testingqarvn.com.es/datos-personales/")
                cy.title().should('eq', 'Datos Personales | TestingQaRvn')
                cy.wait(1000)

                cy.get('#wsf-1-field-21').type("Jonathan").tab()
                    .type("Morales").tab()
                    .type("jonathanmorbon@gmail.com")

            }) //cierre de it

    }) //cierre de descibe