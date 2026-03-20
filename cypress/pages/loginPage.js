import BasePage from "./basePage";
import { ENV } from "../core/env";
import { LOGIN_PAGE_LOCATORS } from "./locators/locators";

class LoginPage extends BasePage {
  elements = {
    usernameInput: () =>
      cy.get(LOGIN_PAGE_LOCATORS.USER_NAME_LOCATOR),
    passwordInput: () =>
      cy.get(LOGIN_PAGE_LOCATORS.PASSWORD_LOCATOR),
    loginButton: () =>
      cy.get(LOGIN_PAGE_LOCATORS.LOGIN_BUTTON_LOCATOR),
  };

  navigate() {
    cy.visit(ENV.urls.loginURL);
  }

  inputUsername(username) {
    this.elements.usernameInput().should("be.visible")
      .clear().type(username);
  }
  inputPassword(password) {
    this.elements.passwordInput().should("be.visible")
      .clear().type(password);
  }
  inputAccount(username, password) {
    this.inputUsername(username);
    this.inputPassword(password);
  }
  clickLoginButton() {
    this.elements.loginButton().click();
  }

  login(username, password) {
    this.inputAccount(username, password);
    this.clickLoginButton();
  }
}

export default LoginPage;
