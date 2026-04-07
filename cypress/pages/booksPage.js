import BasePage from "./basePage";
import { ENV } from "../core/env";
import { CommonLocators } from "./locators/locators";
const keyword = "Design";
const bookName = "Git Pocket Guide";

class BooksPage extends BasePage {
  elements = {
    searchBoxInput: () => cy.get(CommonLocators.SEARCH_BOX_LOCATOR),
    openBookLink: (bookName) =>
      cy.get(CommonLocators.OPEN_BOOK_LOCATOR(bookName)),
    addToCollectionButton: () =>
      cy.get(CommonLocators.ADD_TO_COLLECTION_BUTTON_LOCATOR),
  };

  navigate() {
    cy.visit(ENV.urls.booksURL);
  }

  searchBookForAdd(bookName) {
    this.elements
      .searchBoxInput()
      .should("be.visible").type(bookName);
  }
  searchByKeyWord(keyword) {
    this.elements
      .searchBoxInput()
      .should("be.visible")
      .type(keyword, { delay: 80 });
  }

  verifySearchResults(keyword) {
    cy.get("table tbody").should("contain.text", keyword);
  }

  openBook(bookName) {
    this.elements
      .openBookLink(bookName)
      .should("be.visible")
      .click();
      //cy.url().should("include", "/books?search=");
  }

  addBook() {
    cy.on("window:alert", (text) => {
      expect(text).to.contains("Book added to your collection.");
    });
    this.elements
      .addToCollectionButton()
      .should("be.visible")
      .click();      
  }

    goToProfilePage() {
    cy.get(CommonLocators.PROFILE_LOCATOR)
      .should("be.visible")
      .click(); 
  }

  addBookToCollection(bookName) {
    this.searchBookForAdd(bookName);
    this.openBook(bookName);
    this.addBook();
  }
}
export default BooksPage;
