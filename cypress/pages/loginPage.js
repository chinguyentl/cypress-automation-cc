import BasePage from "./basePage";
import { ENV } from "../core/env";

class LoginPage extends BasePage {
  visit() {
    super.visit(ENV.urls.loginURL);
  }

  get usernameInput() {
    return cy.get("#userName", { timeout: 10000 });
  }

  get passwordInput() {
    return cy.get("#password");
  }

  get loginButton() {
    return cy.get("#login", { timeout: 10000 });
  }

  login(email, password) {
    this.usernameInput.should("be.visible").and("not.be.disabled").clear().type(email);
    this.passwordInput.should("be.visible").and("not.be.disabled").clear().type(password);
    this.loginButton.should("be.visible").and("not.be.disabled").click();
  }
}

export default LoginPage;
