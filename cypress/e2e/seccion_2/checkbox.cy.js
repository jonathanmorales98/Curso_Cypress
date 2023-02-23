//<reference types = "Cypress" /> 
//para que funcionen los comandos
require('cypress-xpath');

describe("Checkbox ", () => {

    it("Checkbox uno", () => {
        cy.visit('https://demo.seleniumeasy.com/basic-checkbox-demo.html')
        cy.wait(1000)
        cy.title().should('eq',"Selenium Easy - Checkbox demo for automation using selenium")

        cy.get("[type='checkbox']").check().should("be.checked")
        cy.wait(1000)
        cy.get("[type='checkbox']").uncheck().should("not.be.checked")

    }) //cierre de it

    it.only("Checkbox por selección", () => {
        cy.visit('https://demo.seleniumeasy.com/basic-checkbox-demo.html')
        cy.wait(1000)
        cy.title().should('eq',"Selenium Easy - Checkbox demo for automation using selenium")

        cy.get('#isAgeSelected').check().should("be.checked")
        cy.xpath("//*[@id='easycont']/div/div[2]/div[2]/div[2]/div[4]/label/input").check().should("be.checked")
       

    }) //cierre de it

}) //cierre de descibe