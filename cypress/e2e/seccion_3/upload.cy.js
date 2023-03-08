/// <reference types = "Cypress" /> 
//para que funcionen los comandos
import 'cypress-file-upload'

describe("File Upload", () => {

    it("Cargando Imágenes", () => {
            cy.visit("https://demoqa.com/automation-practice-form")
            cy.title().should("eq","DEMOQA")
            cy.wait(1000)

            const ruta = " img_1.png"

            cy.get('#uploadPicture').attachFile(ruta)
            cy.wait(1000)



        }) //cierre de it
    Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });
}) //cierre de descibe