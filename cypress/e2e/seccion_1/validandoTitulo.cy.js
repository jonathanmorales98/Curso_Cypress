//para que funcionen los comandos

describe("Seccion 1 Validando el título ", () => {

        it("Tes validar el título ", () => {
                cy.visit("https://testingqarvn.com.es/")
                cy.title().should('eq', 'TestingQaRvn | Mundo del Testing')

                cy.log("La función title funciono bien")

            }) //cierre de it

    }) //cierre de descibe