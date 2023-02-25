/// <reference types = "Cypress" /> 
//para que funcionen los comandos
require('cypress-xpath');

describe("Tercer Reto ", () => {

    it("Reto de Select", () => {
            cy.visit("https://demo.seleniumeasy.com/jquery-dual-list-box-demo.html")
            cy.title("eq","Selenium Easy - JQuery Dual List Box Demo")
            cy.wait(1000)

            cy.get(':nth-child(1) > .form-control').should("be.visible").select(["Maria Eduarda","Manuela","Sophia"])
            .then(()=>{
                cy.get('.pAdd').should("be.visible").click()
                .then(()=>{
                    cy.wait(1000)
                    cy.get('.pAddAll').should("be.visible").click()
                    .then(()=>{
                        cy.wait(1000)
                        cy.get('.pRemoveAll').should("be.visible").click()
                        .then(()=>{
                            cy.wait(1000)
                            cy.log("Se han removido todos los elementos")
                        })
                    })
                })
            })

        }) //cierre de it

}) //cierre de descibe