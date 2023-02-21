//<reference types = "Cypress" /> 
//para que funcionen los comandos
require('cypress-plugin-tab')

describe("Primer Reto ", () => {

        it(" ", () => {
                cy.visit("https://demoqa.com/webtables")
                cy.wait(1000)
                cy.title().should('eq', "DEMOQA")
                cy.wait(1000)

                //buscar un item
                cy.get('#searchBox').should("be.visible").type("Cierra")
                cy.wait(1000)
                cy.get('#searchBox').should("be.visible").clear()
                
                //agregar un item
                cy.get('#addNewRecordButton').should("be.visible").click()
                cy.wait(1000)
                cy.get('#firstName').should("be.visible").type("Johny").tab()
                .type("Morales").tab()
                .type("jonamor@gmail.com").tab()
                .type("24").tab()
                .type("70000000").tab()
                .type("Sistemas")
                cy.get('#submit').should("be.visible").click()

                //buscar el item creado
                cy.get('#searchBox').should("be.visible").type("Johny")
                cy.wait(1000)
                cy.get('#searchBox').should("be.visible").clear()

                //editar un item
                cy.get("#edit-record-2").should("be.visible").click()
                cy.wait(1000)
                cy.get("#age").should("be.visible").clear().type("50")
                cy.wait(1000)
                cy.get("#salary").should("be.visible").clear().type("50000")
                cy.wait(1000)
                cy.get('#submit').should("be.visible").click()

                //eliminar un item
                cy.wait(2000)
                cy.get("#delete-record-2").should("be.visible").click()

        }); //cierre de it
        Cypress.on('uncaught:exception', (err, runnable) => {
         return false;
        });
    }) //cierre de descibe