Feature: React Slingshot

  I want to open React Slingshot page

  Scenario: Opening a React Slingshot network page and input data
    Given I open React Slingshot page
    Then I see "Fuel Savings Analysis" in the title
    When I fill the data in the boxes
    Then I verify the Savings
    Then Case the test pass, click in the botton save and valid of test