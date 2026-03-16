import BasePage from "./basePage";
import { ENV } from "../core/env";

class BooksPage extends BasePage {
  visit() {
    super.visit(ENV.urls.booksURL);
  }
  get addNewRecordButton() {
    return cy.get(".text-right #addNewRecordButton");
  }
  get searchBox() {
    return cy.get("#searchBox");
  }

  searchForBook(bookName) {
    // Use direct DOM manipulation to avoid 'element detached from DOM' flakiness.
    this.searchBox.should("be.visible").then(($input) => {
      Cypress.$($input).val(bookName).trigger("input", { timeout: 3000 }  );
    });
  }

  openBook(bookName) {
    cy.contains("a", bookName).should("be.visible").click();
  }

  addBookToCollection(bookName) {
    this.searchForBook(bookName);
    this.openBook(bookName);
    this.addNewRecordButton.should("be.visible").click();
  }
}
export default BooksPage;