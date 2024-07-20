import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("I open Web page", ()=>{
    cy.visit("http://localhost:3000")
})

Then("I see a page, redirect to register page", ()=>{
    cy.visit("http://localhost:3000/register")
})

When("I fill in the form register", ()=>{
    cy.get('#username').type("usernameterbaru")
    cy.get('#password').type("passwordbaru")
})

When('I click the submit button', ()=>{
    cy.get('button[type="submit"]').click()
})

Then('I should see dashboard', ()=>{
    cy.url().should('include', '/dashboard')
})