// <reference types = "Cypress" /> 
//para que funcionen los comandos
require('cypress-xpath');

describe("Select ", () => {

    it("Select uno ", () => {
            cy.visit("https://demo.seleniumeasy.com/basic-select-dropdown-demo.html ")
            cy.title().should("eq","Selenium Easy Demo - Automate All Scenarios")
            cy.wait(1000)

            cy.get('#select-demo').should("be.visible").select("Friday").should("have.value","Friday")
            cy.wait(3000)
            cy.get('#select-demo').should("be.visible").select("Saturday").should("have.value","Saturday")

        }) //cierre de it
    
    it("Select Autocompletado ", () => {
            cy.visit("https://www.google.com/")
            cy.title().should("eq","Google")
            cy.wait(1000)

            cy.get("[name='q']").should("be.visible").type("Ferrari").type("{enter}")
            cy.get('.rQEFy NZmxZe').click()
        
        }) //cierre de it
    
    it.only("Select Multiselect ", () => {
            cy.visit("https://demo.seleniumeasy.com/basic-select-dropdown-demo.html ")
            cy.title().should("eq","Selenium Easy Demo - Automate All Scenarios")
            cy.wait(1000)

            cy.get('#multi-select').should("be.visible").select(["California", "Ohio", "Washington"]).
            then(()=>{
                cy.get('#printMe').should("be.visible").click()
            })
        
        }) //cierre de it

}) //cierre de descibe