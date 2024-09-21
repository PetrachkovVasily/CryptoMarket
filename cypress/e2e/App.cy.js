describe("App E2E", () => {
  it("qwqerwer", () => {
    cy.visit("/");
    cy.get("input").should("have.value", "");
  });
});
