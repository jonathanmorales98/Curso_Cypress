/// <reference types = "Cypress" /> 
//para que funcionen los comandos

describe(" ", () => {

    it("RadioButton ", () => {
            cy.visit("https://demo.seleniumeasy.com/basic-radiobutton-demo.html ")
            cy.title().should("eq","Selenium Easy Demo - Radio buttons demo for Automation")

            cy.get('.panel-body > :nth-child(3) > input').check()
        }) //cierre de it

}) //cierre de descibe