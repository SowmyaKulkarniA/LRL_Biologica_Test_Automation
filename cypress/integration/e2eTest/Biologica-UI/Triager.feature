Feature: Biologica Triager Session Creation Test Suit

    Background: Validating Login to Biologica Page
        Given Navigate to Biologica
        And Validate the page
        When Navigate to Tools
        And Select "Discovery Triager" from the dropdown
        When Navigate to Create New Triager Session
        And Hover over "filter table" and click

     
    Scenario: Verify Session Creation by Selecting Project with with NGS Data Alone
        And Navigate to "NGS", click on the drop down, select Yes and close the dialogue box
        And Select a NGS project
        And Click on "Get harvests"
        And Navigate to "Select NGS Experiments" and Select a single Project
        And Provide Session name in the "Session Name:" check box
        Then Click on "Run"
        And Verify if session created successfully
        And Auto refresh should be enabled

    
    Scenario: Verify Session Creation by Selecting Project with with Assay Data Alone
        And Navigate to "Assay Data", click on the drop down, select Yes and close the dialogue box
        And Select a Assay project
        And Provide Session name in the "Session Name:" check box
        Then Click on "Run"
        And Verify if session created successfully
        And Auto refresh should be enabled
      

    
    Scenario: Verify Session Creation by Selecting Project with Assay and NGS
        And Navigate to "Assay Data" and "NGS Data", click on the drop down, select Yes and close the dialogue box
        And Select a project
        And Click on "Get harvests"
        And Navigate to "Select NGS Experiments" and Select a single Project
        And Provide Session name in the "Session Name:" check box
        Then Click on "Run"
        And Verify if session created successfully
        And Auto refresh should be enabled


    Scenario: Verify session creation by selecting single harvest data.
    
      And Navigate to "NGS", click on the drop down, select Yes and close the dialogue box
      And Select a NGS project
      And Click on "Get harvests"
      And Navigate to "Select NGS Experiments" and Select a single Project
      And Provide Session name in the "Session Name:" check box
      Then Click on "Run"
      And Verify if session created successfully
      And Auto refresh should be enabled
       
    Scenario: Verify session creation by selecting multi harvest data
    
      And Navigate to "NGS", click on the drop down, select Yes and close the dialogue box
      And Select a NGS project
      And Click on "Get harvests"
      And Navigate to "Select NGS Experiments" and Select two Project
      And Provide Session name in the "Session Name:" check box
      Then Click on "Run"
      And Verify if session created successfully


    Scenario: Verify session creation by selecting different Species
    
      And Navigate to "NGS", click on the drop down, select Yes and close the dialogue box
      And Select a NGS project
      And Click on "Get harvests"
      And select species as human
      And Navigate to "Select NGS Experiments" and Select two Project
      And Provide Session name in the "Session Name:" check box
      And click on "Run"
      And Verify if session created successfully
      And Auto refresh should be enabled   






























