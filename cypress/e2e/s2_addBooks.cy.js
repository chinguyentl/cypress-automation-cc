import { ENV } from "../core/env";
let loginData;
const bookName = "Git Pocket Guide";
beforeEach(() => {
  cy.fixture("loginData").then((data) => {
    loginData = data;
    cy.visit(ENV.urls.loginURL);
    cy.login(data.email, data.password);
    cy.wait(3000);
  });
});

describe("Scenario add book, search book", () => {
  it("Scenario 2: Add a book to collection", () => {
    cy.visit(ENV.urls.profileURL);

    cy.get("body").then(($body) => {
      if ($body.text().includes(bookName)) {
        cy.log("Book already exists. Stop here.");
      } else {
        cy.get("#gotoStore").click({ timeout: 3000 });

        cy.addBookToCollection(bookName);
        cy.on("window:alert", (text) => {
          expect(text).to.contains("Book added to your collection.");
        });
      }
    });
  });
});
