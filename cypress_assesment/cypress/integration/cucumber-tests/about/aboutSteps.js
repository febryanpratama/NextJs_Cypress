import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("I open Web page", ()=>{
    cy.visit("http://localhost:3000")
})

When("I see a landing page, redirect to about page", ()=>{
    cy.visit("http://localhost:3000/about")
})


Then('I should see About Page', ()=>{
    cy.url().should('include', '/about')
})