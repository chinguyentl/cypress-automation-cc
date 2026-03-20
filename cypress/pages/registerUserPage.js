import BasePage from "./basePage";
import { ENV } from "../core/env";
import { REGISTER_PAGE_LOCATORS } from "./locators/locators";

class RegisterPage extends BasePage {
  elements = {  
    firstNameInput: () => cy.get(REGISTER_PAGE_LOCATORS.FIRST_NAME_LOCATOR),
    lastNameInput: () => cy.get(REGISTER_PAGE_LOCATORS.LAST_NAME_LOCATOR),
    usernameInput: () => cy.get(REGISTER_PAGE_LOCATORS.USER_NAME_LOCATOR),
    passwordInput: () => cy.get(REGISTER_PAGE_LOCATORS.PASSWORD_LOCATOR),
    registerButton: () =>
      cy.get(REGISTER_PAGE_LOCATORS.REGISTER_BUTTON_LOCATOR),
  };

  navigate() {
    cy.visit(ENV.urls.registerURL);
  }

  inputfirstName(firstName) {
    this.elements.firstNameInput().should("be.visible").clear().type(firstName);
  }

  inputlastName(lastName) {
    this.elements.lastNameInput().should("be.visible").clear().type(lastName);
  }

  inputusername(userName) {
    this.elements.usernameInput().should("be.visible").clear().type(userName);
  }

  inputpassword(password) {
    this.elements.passwordInput().should("be.visible").clear().type(password);
  }

  inputUserData({ firstName, lastName, userName, password }) {
    this.inputfirstName(firstName);
    this.inputlastName(lastName);
    this.inputusername(userName);
    this.inputpassword(password);
  }

  clickregisterButton() {
    this.elements.registerButton().click();
  }

  register({ firstName, lastName, userName, password }) {
    this.inputUserData({ firstName, lastName, userName, password });
    this.clickregisterButton();
  }
}

export default RegisterPage;
