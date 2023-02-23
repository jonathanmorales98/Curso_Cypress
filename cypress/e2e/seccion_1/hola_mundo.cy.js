// < reference types = "cypress" /> //

describe('Primer Test con Cypress', () => {
    it("Esto es un hola mundo desde Cypress", () => {
        cy.log("Bienvenidos a Cypress")
        cy.visit('https://testingqarvn.com.es/datos-personales/')
        cy.wait(3000)
        cy.get("#wsf-1-field-21").type("Jonathan")
        cy.wait(1000)
        cy.get("#wsf-1-field-22").type("Mor")
        cy.wait(1000)
        cy.get("#wsf-1-field-23").type("jonathanmor@gmail.com")
        cy.wait(1000)
        cy.get("#wsf-1-field-24").type("111111")
        cy.wait(1000)
        cy.get("#wsf-1-field-28").type("calle falsa 123")
        cy.wait(1000)
        cy.get("#wsf-1-field-27").click()
        cy.wait(4000)
    })
})