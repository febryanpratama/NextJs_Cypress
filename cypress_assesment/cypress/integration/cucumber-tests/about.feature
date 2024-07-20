Feature: About to Application

  Scenario: About Page
    Given I open Web page
    When I see a landing page, redirect to about page
    Then I should see About Page