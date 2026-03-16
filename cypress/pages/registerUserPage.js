import BasePage from "./basePage";
import { ENV } from "../core/env";

class RegisterPage extends BasePage {
  visit() {
    super.visit(ENV.urls.registerURL);
  }

  get firstNameInput() {
    return cy.get("#firstname");
  }

  get lastNameInput() {
    return cy.get("#lastname");
  }

  get usernameInput() {
    return cy.get("#userName");
  }

  get passwordInput() {
    return cy.get("#password");
  }

  get registerButton() {
    return cy.get("#register");
  }

  register({ firstName, lastName, userName, password }) {
    this.firstNameInput.should("be.visible").type(firstName);
    this.lastNameInput.should("be.visible").type(lastName);
    this.usernameInput.should("be.visible").type(userName);
    this.passwordInput.should("be.visible").type(password);
    this.registerButton.should("be.visible").and("not.be.disabled").click();
  }
}

export default RegisterPage;
