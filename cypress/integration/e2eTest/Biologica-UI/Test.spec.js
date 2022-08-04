describe ('test_bio', () => {

    const options = {

   
        username: "dash_swetapadma@lilly.com",
        password: "Alliswell@123",
    
        appUrl: "https://biologica-qa.am.lilly.com/",
    };
      before(function (){
        
        cy.task("LcciLogin", options);
        cy.wait(10000);
    });
      
      beforeEach(() => {
        // Cypress starts out with a blank slate for each test
        // so we must tell it to visit our website with the `cy.visit()` command.
        // Since we want to visit the same URL at the start of all our tests,
        // we include it in our beforeEach function so that it runs before each test
       // cy.visit('https://biologica-qa.am.lilly.com/');
        Cypress.Cookies.preserveOnce("lilly.id");
      })
    

    it ("login", function () {

        cy.visit('/');
        cy.wait(5000);

    })
    
})