/// <reference types = "Cypress" /> 
//para que funcionen los comandos

describe("Referencias Windows", () => {

    it("Windows propiedad charset", () => {

            cy.visit("https://testsheepnz.github.io/random-number.html")
            //validar el nombre de la página en la que se encuentra
            cy.title("eq","The Number Game")
            cy.wait(1000)

            //Validar que la página contenga el charset UTF-8
            cy.document().should("have.property","charset").and("eq","UTF-8")

        }) //cierre de it

    it.only("Windows url", () => {

            cy.visit("https://testsheepnz.github.io/random-number.html")
            //validar el nombre de la página en la que se encuentra
            cy.title("eq","The Number Game")
            cy.wait(1000)

            //Validar la url de la página
            cy.url().should("include","random-number.html")
            //validar toda la url de la página
            cy.url().should("eq","https://testsheepnz.github.io/random-number.html")

        }) //cierre de it

}) //cierre de descibe