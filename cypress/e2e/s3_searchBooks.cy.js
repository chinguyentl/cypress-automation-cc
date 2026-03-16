import { ENV } from "../core/env";
let loginData;

const keyword = "Design";

beforeEach(() => {
  cy.fixture("loginData").then((data) => {
    loginData = data;
    cy.visit(ENV.urls.loginURL);
    cy.login(data.email, data.password);
    cy.wait(3000);
  });
});

describe("Scenario add book, search book", () => {
  it("Scenario 3: Search book with multiple results", () => {
    cy.visit(ENV.urls.booksURL);
    cy.get("#searchBox").clear().type(keyword);

    // Wait until search results render (table rows appear)
    cy.get("table tbody tr", { timeout: 3000 })
      .its("length")
      .should("be.gte", 1);

    cy.get("table tbody tr").each(($row) => {
      cy.wrap($row)
        .find("td")
        .eq(1)
        .find("a")
        .invoke("text")
        .then((text) => {
          expect(text.toLowerCase()).to.include(keyword.toLowerCase());
        });
    });
  });
});
