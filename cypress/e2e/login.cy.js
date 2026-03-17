import { ENV } from "../core/env";
import LoginPage from "../pages/loginPage";

let loginData;
const loginPage = new LoginPage();
// Load test data and URL before any tests run.
beforeEach(() => {
  cy.fixture("loginData").then((data) => {
    loginData = data;
  });
  cy.visit(ENV.urls.loginURL);
});

describe("Log in case scenarios", () => {
  it("Log in with valid account", () => {
    loginPage.login(loginData.email, loginData.password);
    cy.url({}).should("eq", ENV.urls.profileURL);
  });

  it("Log in with invalid account - Incorrect Pass", () => {
    loginPage.login(loginData.email, loginData.invalidPassword);

    cy.get("#name")
      .should("be.visible")
      .and("have.text", "Invalid username or password!");
    cy.url().should("eq", ENV.urls.loginURL);
  });
});
