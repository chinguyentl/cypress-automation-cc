import LoginPage from "../pages/loginPage";
import BooksPage from "../pages/booksPage";
import ProfilePage from "../pages/profilePage";

// ***********************************************
// Custom Cypress commands
// ***********************************************

Cypress.Commands.add("login", (email, password) => {
  const page = new LoginPage();
  page.visit();
  page.login(email, password);
});

Cypress.Commands.add("addBookToCollection", (bookName) => {
  const booksPage = new BooksPage();
const profilePage = new ProfilePage();
  booksPage.visit({ timeout: 3000 });
  booksPage.searchForBook(bookName,{ timeout: 3000 });
  booksPage.openBook(bookName, { timeout: 3000 });

  cy.on("window:alert", (text) => {
    expect(text).to.contains("Book added to your collection.");
  });
    cy.get('button').contains('Add To Your Collection').should("be.visible").click()

  // Return to the profile and ensure the book appears
  cy.contains("a.router-link", "Profile", { timeout: 3000 }).click();        
  profilePage.verifyBookExists(bookName).should("exist");
});

Cypress.Commands.add("deleteBookFromProfile", (bookName) => {
  const profilePage = new ProfilePage();
  profilePage.visit();
  profilePage.deleteBook(bookName);
});
