import { ENV } from "../core/env";

let loginData;

// Load test data before any tests run.
before(() => {
  cy.fixture("loginData").then((data) => {
    loginData = data;
  });
});

describe("Log in case scenarios", () => {
  it("Log in with valid account", () => {
    cy.login(loginData.email, loginData.password);
    cy.url({ timeout: 10000 }).should("eq", ENV.urls.profileURL);
  });

  it("Log in with invalid account - Incorrect Pass", () => {
    cy.login(loginData.email, loginData.invalidPassword);
    cy.get('#name').should('be.visible').and('have.text', 'Invalid username or password!');
    cy.url().should("eq", ENV.urls.loginURL);
  });
});