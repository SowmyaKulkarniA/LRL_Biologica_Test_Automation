/// <reference types= "cypress" />
import { Given } from "cypress-cucumber-preprocessor/steps";
import { When } from "cypress-cucumber-preprocessor/steps";
import { And } from "cypress-cucumber-preprocessor/steps";
import { Then } from "cypress-cucumber-preprocessor/steps";
/* global Given, When, Then */
//import HomePage from "./PageObject/Home"
import TriagerPage from "../PageObject/TriagerPage"
import HomePage from "../PageObject/HomePage"


//const Home = new HomePage()

Given('Navigate to Biologica', () => {

    HomePage.Open()
    cy.wait(12000)

})

And('Validate the page', () => {

    HomePage.Title.should('eq', 'Biologica - Home')

})

When('Navigate to Tools', () => {

    HomePage.Tools.click()

    cy.wait(5000)

})

And('Select "Discovery Triager" from the dropdown', () => {

    HomePage.TriagerButton.click()

    cy.wait(5000)

})

Then('Validate the Triager Page', () => {

    TriagerPage.TriagerTitle.click()

})

When('Navigate to Create New Triager Session', () => {

    cy.log

})

And('Hover over "filter table" and click', () => {

    TriagerPage.SessionCreation.click()
    cy.wait(5000)

})

And('Navigate to "NGS", click on the drop down, select Yes and close the dialogue box', () => {

    TriagerPage.NGSData.click()
    TriagerPage.NGSDataYes.click()
    cy.wait(2000)
    TriagerPage.AssayData.click()
    TriagerPage.AssayDataNo.click()
    cy.wait(2000)
    TriagerPage.NGSFilerClose.click()
    cy.wait(5000)


})

And('Navigate to "Assay Data", click on the drop down, select Yes and close the dialogue box', () => {

    TriagerPage.AssayData.click()
    TriagerPage.AssayDataYes.click()
    cy.wait(2000)
    TriagerPage.NGSFilerClose.click()
    cy.wait(5000)

})

And('Navigate to "Assay Data" and "NGS Data", click on the drop down, select Yes and close the dialogue box', () => {

    TriagerPage.NGSData.click()
    TriagerPage.NGSDataYes.click()
    cy.wait(2000)
    TriagerPage.AssayData.click()
    TriagerPage.AssayDataYes.click()
    cy.wait(2000)
    TriagerPage.NGSFilerClose.click()
    cy.wait(5000)

})

And('Select a NGS project', () => {

    TriagerPage.NGSProject.click()

})

And('Select a project', () => {

    TriagerPage.Project.click()

})

And('Select a Assay project', () => {

    TriagerPage.AssayProject.click()

})

And('Click on "Get harvests"', () => {

    TriagerPage.HarvestButton.click()

})

And('select species as human', () => {

    TriagerPage.SpeciesAliva.last().click()
    TriagerPage.SpeciesHuman.click()
    cy.wait(2000)

})


And('Navigate to "Select NGS Experiments" and Select a single Project', () => {

    TriagerPage.HarvestaEGFR91_1.click()

})

And('Navigate to "Select NGS Experiments" and Select two Project', () => {

    TriagerPage.HarvestaEGFR91_1.click()
    cy.wait(2000)
    TriagerPage.HarvestaLILR14_1.click()
    cy.wait(2000)

})

And('Provide Session name in the "Session Name:" check box', () => {

    TriagerPage.SessionNameBox.clear().type('QA Test')
    cy.wait(5000)

})

Then('Click on "Run"', () => {

    TriagerPage.RunButton.click()
    cy.wait(10000)

})

And('Verify if session created successfully', () => {

    TriagerPage.SessionName.should('eq', 'QA Test')

})

