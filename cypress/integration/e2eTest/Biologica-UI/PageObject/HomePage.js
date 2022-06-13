/// <reference types= "cypress" />


class HomePage{

    Open() {

       cy.visit('https://biologica-qa.am.lilly.com/')

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

