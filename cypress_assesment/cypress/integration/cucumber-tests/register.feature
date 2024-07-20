Feature: Register to Application

  Scenario: Register Account
    Given I open Web page
    When I see a page, redirect to register page
    When I fill in the form register
    When I click the submit button
    Then I should see dashboard