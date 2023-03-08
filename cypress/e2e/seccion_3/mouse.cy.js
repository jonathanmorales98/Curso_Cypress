/// <reference types = "Cypress" /> 
//para que funcionen los comandos
import 'cypress-file-upload'
require('@4tw/cypress-drag-drop')
 
describe("Eventos Mouse", () => {

    it("drag and drop", () => {
            cy.visit("https://the-internet.herokuapp.com/drag_and_drop")
            cy.title().should("eq","The Internet")

            cy.get('#column-a').drag('#column-b',{force:true})

        }) //cierre de it

    it.only("drag and drop 2", () => {
            cy.visit("http://demo.seleniumeasy.com/drag-and-drop-demo.html")
            cy.title().should("eq","Selenium Easy Demo - Drag and Drop Demo")
            cy.wait(1000)
            
            cy.get('#todrag > :nth-child(5)').drag('#mydropzone',{force:true})
            cy.wait(1000)
            cy.get('#todrag > :nth-child(4)').drag('#mydropzone',{force:true})
            cy.wait(1000)
            cy.get('#todrag > :nth-child(3)').drag('#mydropzone',{force:true})
            cy.wait(1000)
            cy.get('#todrag > :nth-child(2)').drag('#mydropzone',{force:true})
            cy.wait(1000)
        }) //cierre de it

}) //cierre de descibe