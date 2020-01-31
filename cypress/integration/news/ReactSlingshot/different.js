import { Given, Then, Before, When } from "cypress-cucumber-preprocessor/steps";

const url = "http://localhost:3000/fuel-savings";

let myBeforeCount = 0;


Before(() => {
    expect(myBeforeCount).to.be.lessThan(2);
    myBeforeCount += 1;
});

Given(`I open React Slingshot page`, () => {
    cy.visit(url);
});

Then(`I see "Fuel Savings Analysis" in the title`, () => {
    cy.get('h2').should("contain.text", "Fuel Savings Analysis");
});

When(`I fill the data in the boxes`,() => {


    // Preenche o campo 'New Vehicle MPG'
    cy.get(':nth-child(1) > :nth-child(2) > .small').click()
    cy.get(':nth-child(1) > :nth-child(2) > .small').type('4')

    // Preenche o campo 'Trade-in MPG'
    cy.get(':nth-child(2) > :nth-child(2) > .small').click()
    cy.get(':nth-child(2) > :nth-child(2) > .small').type('5')

    // Preenche o campo 'New Vehicle price per gallon'
    cy.get(':nth-child(3) > :nth-child(2) > .small').click()
    cy.get(':nth-child(3) > :nth-child(2) > .small').type('4')

    // Preenche o campo 'Trade-in price per gallon'
    cy.get(':nth-child(4) > :nth-child(2) > .small').click()
    cy.get(':nth-child(4) > :nth-child(2) > .small').type('6')

    // Preenche o campo 'Miles Driven'
    cy.get(':nth-child(5) > :nth-child(2) > .small').click()
    cy.get(':nth-child(5) > :nth-child(2) > .small').type('9')

    // preenche o combox 'miles per'
    cy.get('select').select('year')


});

Then(`I verify the Savings`,() => {
    
    try {
        // valida o valor do mês
        cy.get('td.savings').should('contain','$0.15')

        // valida o valor do ano 1
        cy.get('td.savings').should('contain','$1.80')

        // valida o valor do ano 3
        cy.get('td.savings').should('contain','$5.40')
    }
    catch (Exception) {
        should(Exception)
    }


});


Then(`Case the test pass, click in the botton save and valid of test`, () => {
    // Clica no botao salvar e valida.
    cy.get('[type="submit"]',{ timeout: 30000 }).click()
    cy.get('[type="submit"]').should('contain','Save')

})
