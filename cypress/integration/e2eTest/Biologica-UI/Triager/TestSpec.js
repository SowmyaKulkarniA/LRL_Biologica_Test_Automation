
import TriagerPage from "../PageObject/TriagerPage"
import HomePage from "../PageObject/HomePage"
describe('Test Demo', () => {

    it('Triager Page', () => {



        cy.visit('https://www.google.com.au/');
        cy.wait(5000);
        cy.get('[title="Tools"]').click();
        cy.wait(5000);
        cy.get('.MuiListItemText-root').contains('Discovery Triager').click();
        cy.wait(5000); 
    
        cy.get('[title="Filter Table"]').last().click()
        cy.wait(5000)
        cy.get('[id="mui-component-select-Assay Data"]').click()
        cy.wait(3000)
        cy.get('[data-value="Yes"]').click()
        cy.wait(5000)
        TriagerPage.NGSFilerClose.click()
        cy.wait(5000)


        cy.get('[id="@#$5etrg%&*(h:?//"]').click()
        cy.wait(5000)

       /* TriagerPage.AssayData.click()
        TriagerPage.AssayDataYes.click()
        cy.wait(2000)
        TriagerPage.NGSFilerClose.click()
        cy.wait(5000)
        TriagerPage.NGSProject.click()
        cy.wait(4000)
        TriagerPage.SessionNameBox.clear().type("QA_test") */



    })


})