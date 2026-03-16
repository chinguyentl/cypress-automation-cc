import { ENV } from "../core/env";

class RegisterPage {
  visit() {
    cy.visit(ENV.urls.registerURL);
  }

  fillFirstName(firstName) {
    cy.get('#firstname').type(firstName)
  }

  fillLastName(lastName) {
    cy.get('#lastname').type(lastName)
  }

  fillUserName(userName) {
    cy.get('#userName').type(userName)
  }

  fillPassword(password) {
    cy.get('#password').type(password)
  }

  clickRegister() {
    cy.get('#register').click()
  }

  registerUser(firstName, lastName, userName, password) {
    this.fillFirstName(firstName)
    this.fillLastName(lastName)
    this.fillUserName(userName)
    this.fillPassword(password)
    this.clickRegister()
}
}

export default RegisterPage