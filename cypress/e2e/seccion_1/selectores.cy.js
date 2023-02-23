// <reference types="Cypress" /> 
//para que funcionen los comandos
require('@cypress/xpath');

describe("Tipos de Selectores ", () => {

    it("Selector por ID", () => {
            cy.visit("https://demoqa.com/text-box")
            cy.wait(1000)
            cy.title().should('eq', "DEMOQA")
            cy.wait(1000)
            cy.get("#userName").should("be.visible").type("Carlos")
            cy.get('#userEmail').should("be.visible").type("demo@gmail.com")
    }) //cierre de it

    it("Selector por Atributo", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.wait(1000)
        cy.title().should('eq', "DEMOQA")
        cy.wait(1000)
        cy.get("[placeholder='Full Name']").should("be.visible").type("Carlos")
    }) //cierre de it
    
    it("Selector por Xpath", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.wait(1000)
        cy.title().should('eq', "DEMOQA")
        cy.wait(1000)
        cy.xpath("//*[@id='userName']").should("be.visible").type("Carlos")
        cy.wait(1000)
        cy.xpath("(//input[contains(@autocomplete,'off')])[1]").should("be.visible").type(" Aldana")
        cy.wait(1000)
        cy.xpath("//textarea[contains(@id,'currentAddress')]").should("be.visible").type("Calle falsa 123")
    }) //cierre de it

    it("Selector por Contains", () => {
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.wait(1000)
        cy.title().should('eq', "DEMOQA")
        cy.wait(1000)
        cy.get(".custom-control-label").contains("Female").click()
        cy.wait(1000)
        cy.get(".custom-control-label").contains("Other").click()
    }) //cierre de it

    it.only("Selector por CopySelector", () => {
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.wait(1000)
        cy.title().should('eq', "DEMOQA")
        cy.wait(1000)
        cy.get("#userNumber").should("be.visible").type("3197183431")
        
    }) //cierre de it

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
       });

}) //cierre de descibe