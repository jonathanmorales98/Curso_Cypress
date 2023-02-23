//<reference types = "Cypress" /> 
//para que funcionen los comandos
require('@cypress/xpath');

describe("Segundo Reto ", () => {

    it("Probando la Aplicación ", () => {
            cy.visit("http://computer-database.gatling.io/computers")
            cy.title().should('eq',"Computers database")
            cy.wait(1000)

            //buscar elemento
            cy.xpath("//input[contains(@id,'searchbox')]").type("ACE")
            cy.wait(1000)
            cy.get('#searchsubmit').should("be.visible").click()

            //agregar elemento
            cy.get('#add').should("be.visible").click()
            cy.get('#name').should("be.visible").type("ASUS Laptop")
            cy.get('#introduced').should("be.visible").type("2012-12-12")
            cy.get('#discontinued').should("be.visible").type("2022-12-12")
            //añadir select
            cy.get('#company').should("be.visible").select("MOS Technology").should("have.value","7")
            cy.wait(1500)
            cy.get('.primary').should("be.visible").click()

            //buscar elemento creado
            cy.xpath("//input[contains(@id,'searchbox')]").type("ASUS")
            cy.wait(1000)
            cy.get('#searchsubmit').should("be.visible").click()

        }) //cierre de it

}) //cierre de descibe