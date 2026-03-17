import BasePage from "./basePage";
import { ENV } from "../core/env";

class BooksPage extends BasePage {
  visit() {
    super.visit(ENV.urls.booksURL);
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
    cy.contains("a", bookName).should("be.visible").click( { timeout: 3000 } );
  }
  
  addBook() { 
    cy.on("window:alert", (text) => {
    expect(text).to.contains("Book added to your collection.");
  });
  cy.get('button').contains('Add To Your Collection').should("be.visible").click({ timeout: 3000 } )
}

  addBookToCollection(bookName) {
    this.searchForBook(bookName);
    this.openBook(bookName);
   this.addBook();
  }
}
export default BooksPage;