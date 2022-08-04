/// <reference types= "cypress" />


class TriagerPage {

   get TriagerTitle() {

      return cy.get('.   MuiTypography-root jss48 MuiTypography-body1').contains('Discovery Triager')
      /*  return cy.get('.MuiTypography-root jss48 MuiTypography-body1').then((theElement) => {
             theElement.text();
          }); */
   }

   get SessionCreation() {

      return cy.get('[title="Filter Table"]').last()

   }

   get NGSData() {


      return cy.get('[id="mui-component-select-NGS Data"]')

   }

   get AssayData() {

      return cy.get('[id="mui-component-select-Assay Data"]')
   }

   get NGSDataYes() {

      return cy.get('[data-value="Yes"]')
   }

   get AssayDataYes() {

      return cy.get('[data-value="Yes"]')
   }

   get AssayDataNo() {

      return cy.get('[data-value="No"]')
   }

   get NGSFilerClose() {

      return cy.get('[aria-label="Close"]')

   }

   get NGSProject() {

      return cy.get('[id="QA2020_test2"]')

   }

   get Project() {

      return cy.get('[data-testid="MuiDataTableBodyCell-0-0"]').last()

   }

   get AssayProject() {

      return cy.get('[id="@#$5etrg%&*(h:?//"]')

   }

   get Project_Abeta_mAb() {

      return cy.get('[data-testid="MuiDataTableBodyCell-0-2"]')

   }

   get SessionNameBox() {

      return cy.get('[value="Untitled Triager Session"]')

   }

   get RunButton() {

      return cy.get('[type="button"]').contains('Run')

   }

   get ProjectName() {

      return cy.get('[data-testid="MuiDataTableBodyCell-1-0"]').contains('Demo Project_Test')
   }

   get HarvestButton() {

      return cy.get('[class="MuiButton-label"]').contains('Get Harvests')
   }

   get HarvestmAb_aEGFR91_1() {

      return cy.get('[id="Abeta mAb-aEGFR91.1 "]')
   }

   get HarvestaEGFR91_1(){

      return cy.get('[id="QA2020_test2-aEGFR91.1 "]')
   }

   get HarvestaLILR14_1(){

      return cy.get('[id="QA2020_test2-aLILR14.1 "]')
   }

   get SpeciesAliva() {

      return cy.get('[value="aliva"]')

   }

   get SpeciesHuman() {

      return cy.get('[data-value="human"]')

   }

   get SessionName() {

      return cy.get('[data-testid="MuiDataTableBodyCell-1-0"]').first()
  }

}

export default new TriagerPage()