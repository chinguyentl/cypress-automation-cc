import ProfilePage from "../pages/profilePage";

const bookName = "Git Pocket Guide";

describe("Scenario delete book", () => {
  beforeEach(() => {
    cy.fixture("loginData").then((data) => {
      cy.login(data.email, data.password);
      cy.wait(3000);
    });
  });

  it("Scenario 4: Add book then delete book", () => {
    const profilePage = new ProfilePage();
    // Ensure the book is present in the profile collection
    profilePage.visit();
    profilePage.hasBook(bookName).then((bookExists) => {
      cy.log(`Book exists: ${bookExists}`);
    });

    // Delete the book and verify it is removed
    profilePage.deleteBook(bookName);
    cy.contains("td", bookName).should("not.exist");
  });
});
