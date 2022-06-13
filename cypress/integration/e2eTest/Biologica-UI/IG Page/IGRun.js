/// <reference types= "cypress" />
import { Given } from "cypress-cucumber-preprocessor/steps";
import { When } from "cypress-cucumber-preprocessor/steps";
import { And } from "cypress-cucumber-preprocessor/steps";
import { Then } from "cypress-cucumber-preprocessor/steps";
/* global Given, When, Then */
//import HomePage from "./PageObject/Home"
import IgPage from "../PageObject/IGPage"
import HomePage from "../PageObject/HomePage"
const inputFile = "../cypress/fixtures/inputFile";




Given('I nagivate to Biologica',() => {              //navigating to Home Page 

    HomePage.Open()
    cy.wait(5000)

}) 


And ('Validate the page', () => {                          //validating the Home Page

    HomePage.Title.should('eq','Biologica - Home')   

})


When ('Navigate to Tools', () => {                         // navigating to the Tools 

    HomePage.Tools.click()

    cy.wait(5000)

})

And ('Naviagte to Immunogenecity Page', () => {                            

    HomePage.ImmunogenecityButton.click()

    cy.wait(5000)

})

Then ('Create a new run', () => {                  //Ig Run



    IgPage.getNewRun().click();
    IgPage.getInputBox().type("Demo Run_Test")
  
    const fileName = "inputFile.fasta"

    cy.fixture(fileName)
    .then((fileContent) => {
      cy.get("input#file_input").attachFile({
        fileContent,

        fileName,
      })

   })

    cy.wait(5000)

    cy.contains("Choose File").click()


    IgPage.getAddProtocol().click({ force: true })
    IgPage
      .getAddProtocol()
      .type("{downarrow}")
      .click({ force: true })
    IgPage.getAddProtocol().click({ force: true })
    IgPage.getRunButton().click({ force: true })

})

And ('Run creation successful', ()=>{


    IgPage.getRunName().invoke('text').then((text1) =>{

        expect(text1).to.eq('Demo Run_Test')
        cy.wait(5000)

    })
})


