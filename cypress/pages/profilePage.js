import BasePage from "./basePage";
import { ENV } from "../core/env";

class ProfilePage extends BasePage {
  visit() {
    super.visit(ENV.urls.profileURL);
  }

  deleteButtonForBook(bookName) {
      cy.contains(bookName)
      .closest("tr")
      .find('span[id^="delete-record-"]').click();
  }

  confirmDelete() {
    cy.get("#closeSmallModal-ok").should("be.visible").click();
  }

  waitForDeleteModalToClose() {
    cy.get('div[role="dialog"].modal.show').should("not.exist");
    // Ensure the page has stabilized before doing further interactions.
    cy.get("#searchBox").should("be.visible");
  }

  searchBook(bookName) {
    // Use typing to clear and re-enter text to avoid detached-element issues
    cy.get("#searchBox")
      .should("be.visible")
      .type("{selectall}{del}")
      .type(bookName, { delay: 100 });
  }

  hasBook(bookName) {
    return cy.get("body").then(($body) => {
      return $body.text().includes(bookName);
    });
  }

  verifyBookExists(bookName) {
   return cy.get("tbody tr", { timeout: 8000 }).then(($rows) => {
      return Array.from($rows).some((row) => row.innerText.includes(bookName));
    });
  }

  ensureBookInCollection(bookName, addBookCallback) {
    this.searchBook(bookName);
    cy.wrap(null).then(() => {
      return this.verifyBookExists(bookName).then((exists) => {
        if (!exists) {
          addBookCallback();
          this.visit();
          this.searchBook(bookName);
        }
      });
    });
  }

  deleteBook(bookName) {
    this.deleteButtonForBook(bookName);
    this.confirmDelete();
    this.waitForDeleteModalToClose();
  }
}
export default ProfilePage;