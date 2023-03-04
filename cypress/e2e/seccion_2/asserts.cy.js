/// <reference types = "Cypress" /> 
//para que funcionen los comandos
require('cypress-xpath');

describe("Asserts", () => {

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

    it("Assert Validando que es Nuevo y el precio", () => {
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

        it("Assert Have.text y Contain.text", () => {
            cy.visit("https://demoqa.com/text-box")
            cy.title("eq","DEMOQA")
            cy.wait(1000)

            cy.get('#userName').type("Username")
            cy.get('#userEmail').type("user@username.com")
            cy.get('#submit').click()
            cy.get('#name').should("have.text","Name:Username")
            cy.get('#name').should("contain.text","Username")
        }) //cierre de it

        it("Assert Have.text más then", () => {
            cy.visit("https://demoqa.com/text-box")
            cy.title("eq","DEMOQA")
            cy.wait(1000)

            cy.get('#userName').type("Jonathan")
            cy.get('#userName').should("have.value","Jonathan")
            .then(()=>{
                cy.get('#userEmail').type("user@username.com")
                cy.get('#submit').click()
            })

        })// cierre de it

        it("Assert have.class", () => {
            cy.visit("https://demoqa.com/text-box")
            cy.title("eq","DEMOQA")
            cy.wait(1000)

            cy.get("#userName").should("be.visible").should("have.class","mr-sm-2")
            .then(()=>{
                cy.get('#userName').type("Jonathan")
            })

        })// cierre de it

        it("Assert have.class y función and", () => {
            cy.visit("https://demoqa.com/text-box")
            cy.title("eq","DEMOQA")
            cy.wait(1000)

            cy.get("#userName").should("be.visible").and("have.class","mr-sm-2")
            .then(()=>{
                cy.get('#userName').type("Jonathan")
            })

        })// cierre de it

        it("Assert not.have.class ", () => {
            cy.visit("https://demoqa.com/text-box")
            cy.title("eq","DEMOQA")
            cy.wait(1000)

            cy.get("#userName").should("be.visible").and("not.have.class","mr-sm-22")
            .then(()=>{
                cy.get('#userName').type("Jonathan")
            })

        })// cierre de it

        it.only("Assert length y css ", () => {
            cy.visit("http://demo.seleniumeasy.com/table-pagination-demo.html")
            cy.title("eq","Selenium Easy - Table with Pagination Demo")
            cy.wait(1000)

            cy.get("#myTable >tr >td").should("have.length",91).and("have.css","padding", "8px")
            

        })// cierre de it
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
           });
}) //cierre de descibe