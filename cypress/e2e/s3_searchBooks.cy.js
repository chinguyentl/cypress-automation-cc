import { ENV } from "../core/env";
import LoginPage from "../pages/loginPage";
import BooksPage from "../pages/booksPage";
import ProfilePage from "../pages/profilePage";
const loginPage = new LoginPage();
const booksPage = new BooksPage();
const profilePage = new ProfilePage();
let loginData;
const keyword = "Design";

beforeEach(() => {
  cy.fixture("loginData").then((data) => {
    loginData = data;
    cy.visit(ENV.urls.loginURL);
    loginPage.login(loginData.email, loginData.password);
    cy.wait(5000);
  });
});

describe("Scenario add book, search book", () => {
  it("Scenario 3: Search book with multiple results", () => {
    profilePage.goToBooksPage();
    booksPage.searchByKeyWord(keyword);
    booksPage.verifySearchResults(keyword);
  });
});
