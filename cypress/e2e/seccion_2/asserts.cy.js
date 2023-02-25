/// <reference types = "Cypress" /> 
//para que funcionen los comandos
require('cypress-xpath');

describe("Assert ", () => {

    it("Assert contains", () => {
            cy.visit("https://automationexercise.com/")
            cy.title("eq","Automation Exercise")
            cy.wait(1000)

            cy.get('.shop-menu > .nav').contains("Products").click()
        }) //cierre de it

    it("Assert Find, Eq", () => {
            cy.visit("https://automationexercise.com/")
            cy.title("eq","Automation Exercise")
            cy.wait(1000)

            cy.get('.shop-menu > .nav').contains("Products").click()
            
            cy.get('.choose').find(".nav-pills").eq(2).click()

        }) //cierre de it

    it.only("Assert Validando que es Nuevo y el precio", () => {
            cy.visit("https://automationexercise.com/")
            cy.title("eq","Automation Exercise")
            cy.wait(1000)

            cy.get('.shop-menu > .nav').contains("Products").click()
            
            cy.get('.choose').find(".nav-pills").eq(1).click()


           cy.get('.product-information > :nth-child(7)')
           // cy.get(':nth-child(7) > b')
            .then((e)=>{
                //cy.log(e.text())
                let estado = e.text()
                //cy.log(estado)
                if(estado == "Condition: New"){
                    cy.log("La prenda es nueva")
                }
            })
            cy.get(':nth-child(5) > span')
            .then((e)=>{
                cy.log(e.text())
                let precio = e.text()
                precio = precio.slice(3,8)
                cy.log(precio)

                if(precio > 400){
                    cy.log("la prenda esta fuera del presupuesto")
                    cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
                    cy.wait(3000)
                }else{
                    cy.log("La prenda esta dentro del presupuesto, continua con la compra")
                    cy.get(':nth-child(5) > .btn').click()
                    cy.wait(3000)
                    cy.get('.modal-footer > .btn').click()
                }
            })


        }) //cierre de it

}) //cierre de descibe