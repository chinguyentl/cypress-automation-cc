export default class BasePage {
  visit(url) {
    cy.visit(url);
  }

  get(locator, options = {}) {
    return cy.get(locator, options);
  }

  click(locator, options = {}) {
    return this.get(locator, options).should('be.visible').click();
  }

  type(locator, text, options = {}) {
    return this.get(locator, options).should('be.visible').clear().type(text);
  }

  shouldContain(locator, text) {
    return this.get(locator).should('contain.text', text);
  }

  shouldNotContain(locator, text) {
    return this.get(locator).should('not.contain.text', text);
  }
}
