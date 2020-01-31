import { Given } from "cypress-cucumber-preprocessor/steps";

const url = "http://localhost:3000/fuel-savings";

Given(`Open page React Slingshot`, () => {
    cy.visit(url);
});
