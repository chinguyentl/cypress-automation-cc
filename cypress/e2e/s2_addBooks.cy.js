import { ENV } from "../core/env";
import LoginPage from "../pages/loginPage";
import BooksPage from "../pages/booksPage";

let loginData;
const bookName = "Git Pocket Guide";
const loginPage = new LoginPage();
const booksPage = new BooksPage();

beforeEach(() => {
  cy.fixture("loginData").then((data) => {
    loginData = data;
    cy.visit(ENV.urls.loginURL);
    loginPage.login(loginData.email, loginData.password);
    //cy.login(data.email, data.password);
    cy.wait(3000);
  });
});

describe("Scenario add book, search book", () => {
  it("Scenario 2: Add a book to collection", () => {
    cy.get("body").then(($body) => {
      if ($body.text().includes(bookName)) {
        cy.log("Book already exists. Stop here.");
      } 
      else {
        cy.get("#gotoStore").click({ timeout: 3000 });
        booksPage.addBookToCollection(bookName);
      }
    });
  });
});
