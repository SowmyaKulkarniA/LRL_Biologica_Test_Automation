/// <reference types= "cypress" />


class HomePage{

    Open() {

    
      // cy.intercept("https://biologica-qa.am.lilly.com").as("Pagewait")
       cy.visit('/');
       //wait("@Pagewait")

    }

    get Title() {

        return cy.title()
    }

    get Tools() {

        return cy.get('[title="Tools"]')
    }

    get TriagerButton() {

        return cy.get('.MuiListItemText-root').contains('Discovery Triager')
    }

    get ImmunogenecityButton() {

        return cy.get('.MuiListItemText-root').contains('Calculate Immunogenicity')
    }
}

export default new HomePage()

