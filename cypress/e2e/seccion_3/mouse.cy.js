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

    it("drag and drop 2", () => {
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

    it.only("drag and drop 2", () => {
            cy.visit("https://www.way2automation.com/")
            cy.title().should("eq","Get Online Selenium Certification Course | Way2Automation")
            cy.wait(1000)
            
            cy.contains("All Courses").trigger("mouseover")
            cy.wait(5000)
            cy.get('#menu-item-27580 > :nth-child(1)').trigger("mouseover")
            cy.wait(1000)
            cy.contains("Video Tutorial").trigger("mouseover")
            cy.wait(5000)
    
            //cy.get('.eicon-close').should("be.visible").click({force:true})

            
            
        }) //cierre de it
        

}) //cierre de descibe