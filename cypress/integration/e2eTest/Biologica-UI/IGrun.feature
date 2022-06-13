Feature: Biologica Immunogenicity Regression Suit

    Background: Validating Login to Biologica Page
        Given Navigate to Biologica
        And Validate the page
        When Navigate to Tools
        And Select "Calculate Immunogenicity" from the dropdown

     
    Scenario: Verify Run Creation
        And Navigate to "New Run" button and Click
        And Provide a "Run Name"
        And Navigate to "Choose File" and Click
        And Add Protocols 
        Then Click on "Run"
        And Verify Run created successfully

      Scenario: Verify Run Creation
        And Navigate to "New Run" button and Click
        And Provide a "Run Name"
        And Navigate to "Choose File" and Click
        And Add Protocols 
        Then Click on "Run"
        And Verify Run created successfully    


       
