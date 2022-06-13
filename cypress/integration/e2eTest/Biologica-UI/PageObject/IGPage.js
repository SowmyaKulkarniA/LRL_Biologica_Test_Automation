/// <reference types= "cypress" />

class IgPage{

getIG(){
        return cy.get('a[href="/sequence-analysis"]')
    }

getNewRun(){
    return cy.contains("New Run")
}

getInputBox(){
    return cy.get('input#outlined-full-width')
}

getTextArea(){
    return cy.get('textarea#outlined-multiline-flexible')
}

getAddProtocol(){
    return cy.get('input#react-select-4-input')
}

getRunButton(){
   return  cy.get('.MuiButton-contained > .MuiButton-label')
    //return cy.contains('Run').last()
}

getRunName (){

    return cy.get('[data-testid="MuiDataTableBodyCell-0-0"]')
}


}

export default new IgPage