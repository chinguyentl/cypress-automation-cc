import ProfilePage from "../pages/profilePage";
import { CommonLocators } from "../pages/locators/locators";
import { ENV } from "../core/env";
import LoginPage from "../pages/loginPage";

const loginPage = new LoginPage();
const profilePage = new ProfilePage();
let loginData;
const bookName = "Git Pocket Guide";

describe("Scenario delete book", () => {
  beforeEach(() => {
    cy.fixture("loginData").then((data) => {
      loginData = data;
      cy.visit(ENV.urls.loginURL);
      loginPage.login(data.email, data.password);
      cy.wait(3000);
    });
  });

  it("Scenario 4: Add book then delete book", () => {
    // Ensure the book is present in the profile collection
    profilePage.hasBook(bookName).then((bookExists) => {
      //có thể dùng verifyBookExists
      cy.log(`Book exists: ${bookExists}`);
    });

    // Delete the book and verify it is removed
    profilePage.deleteBook(bookName);

    cy.contains("td", bookName).should("not.exist");
  });
});
