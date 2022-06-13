Feature: Biologica Triager Features test Suit

    Background: Validating Login to Biologica Page
        Given Navigate to Biologica
        And Validate the page
        When Navigate to Tools
        And Select "Discovery Triager" from the dropdown
      
    Scenario: Verify Search Button on Triager Session Table
        When Navigate and click on "Search" button
        And Type any text or part of text for searching
        And Verify the projects gets searched properly
        Then Close the Search tab

    Scenario: Verify Download Button on TRiager Session Table
        When Navigate and click on "Download" button
        And Verify The Table contents gets downloaded successfully
        
