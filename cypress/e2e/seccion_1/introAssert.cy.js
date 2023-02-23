/// <reference types = "Cypress" /> 
//para que funcionen los comandos

describe("Introducción a los asserts", () => {

        it("Demo de los Asserts", () => {
                cy.visit("https://testingqarvn.com.es/datos-personales/")
                cy.title().should('eq', 'Datos Personales | TestingQaRvn')
                cy.wait(1000)

                cy.get('#wsf-1-field-21').should("be.visible").type("Jota")
                cy.wait(1000)
                cy.get('#wsf-1-field-22').should("be.visible").type("Bonilla")
                cy.wait(1000)
                cy.get('#wsf-1-field-23').should("be.visible").should("be.enabled").type("Bonilla@gmail.com")


            }) //cierre de it

    }) //cierre de descibe