Feature: Login to Application
    
    As a valid user
    I want to log in into Application

    Scenario: Valid Login
        Given I open Web page
        When I see a page, redirect to login page 
        When I fill in the form
        When I click the submit button
        Then I should see dashboard

