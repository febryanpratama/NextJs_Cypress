import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("I open Web page", ()=>{
    cy.visit("http://localhost:3000")
})

When("I see a page, redirect to login page", ()=>{
    cy.visit("http://localhost:3000/login")
})

When("I fill in the form", ()=>{
    cy.get('#username').type("emilys")
    cy.get('#password').type("emilyspass")
})

When('I click the submit button', ()=>{
    cy.get('button[type="submit"]').click()
})

Then('I should see dashboard', ()=>{
    cy.url().should('include', '/dashboard')
})