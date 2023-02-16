/// <reference types = "Cypress" /> 
//para que funcionen los comandos

describe("Funciones para Type ", () => {

        it("Type --> ENTER ", () => {
                cy.visit("https://www.google.com/?hl=es")
                cy.title().should('eq', 'Google')
                cy.wait(1500)

                // cy.get("body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input")
                cy.get("[name ='q']")
                    //buscar mediante el nombre
                    .type("cypress io {enter}")

                cy.wait(3000)
                cy.get("#rso > div:nth-child(1) > div > div > div > div > div > div > div > div.yuRUbf > a > h3")
                    //buscar mediante el selector
                    .click()

            }) //cierre de it

    }) //cierre de descibe