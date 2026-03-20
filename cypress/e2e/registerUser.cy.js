import RegisterPage from "../pages/registerUserPage";
import { ENV } from "../core/env";

 const registerPage = new RegisterPage();
let registerUserData;

beforeEach(() => {
  cy.fixture("registerUserData").then((data) => {
    registerUserData = data;
  });
  cy.visit(ENV.urls.registerURL);
});

describe("Register Successfully", () => { 

  it("Register successfully and show alert", () => {
    const randomUser = `user${Date.now()}`;

    registerPage.register({
      firstName: registerUserData.firstName,
      lastName: registerUserData.lastName,
      userName: randomUser,
      password: registerUserData.password
    });

    cy.on("window:alert", (text) => {
      expect(text).to.contains("User Registered Successfully.");
    });
  });
});
