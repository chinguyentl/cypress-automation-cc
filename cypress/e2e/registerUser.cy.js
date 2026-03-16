import RegisterPage from "../pages/registerUserPage";
import { ENV } from "../core/env";

let registerUserData;

before(() => {
  cy.fixture("registerUserData").then((data) => {
    registerUserData = data;
  });
});

describe("Register Successfully", () => {
  const registerPage = new RegisterPage();

  it("Register successfully and show alert", () => {
    const randomUser = `user${Date.now()}`;

    cy.visit(ENV.urls.registerURL, {
      onBeforeLoad(win) {
        cy.stub(win, "alert").as("alertStub");
      },
    });

    registerPage.register({
      firstName: registerUserData.firstName,
      lastName: registerUserData.lastName,
      userName: randomUser,
      password: registerUserData.password,
    });

    cy.on("window:alert", (text) => {
      expect(text).to.contains("User Registered Successfully.");
    });
  });
});
