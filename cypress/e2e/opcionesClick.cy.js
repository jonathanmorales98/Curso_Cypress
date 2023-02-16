/// <reference types = "Cypress" /> 
//para que funcionen los comandos

describe("Opciones de Click ", () => {

        it("Click sencillo", () => {
                cy.visit("https://testingqarvn.com.es/datos-personales/")
                cy.title().should('eq', 'Datos Personales | TestingQaRvn')
                cy.wait(1000)

                cy.get('#wsf-1-field-27').should("be.visible").click()
                cy.get('#top-menu > #menu-item-314 > a').should("be.visible").click()
                cy.get('.et_pb_contact_submit').should("be.visible").click()
            }) //cierre de it

        it("Click Force True", () => {
                cy.visit("https://testingqarvn.com.es/datos-personales/")
                cy.title().should('eq', 'Datos Personales | TestingQaRvn')
                cy.wait(1000)

                cy.get('#wsf-1-field-27').should("be.visible").click()
                cy.get('#top-menu > #menu-item-314 > a').should("be.visible").click()
                cy.get('.et_pb_contact_submit').should("be.visible").click({ force: true })
            }) //cierre de it

        it.only("Click Por Coordenadas (x,y)", () => {
            cy.visit("https://testingqarvn.com.es/datos-personales/")
            cy.title().should('eq', 'Datos Personales | TestingQaRvn')
            cy.wait(1000)

            cy.get('#wsf-1-field-27').should("be.visible").click()
            cy.wait(1500)
            cy.get('#logo').should("be.visible").click(50, 3)
            cy.get('#logo').should("be.visible").click(70, 5)
        })

    }) //cierre de descibe