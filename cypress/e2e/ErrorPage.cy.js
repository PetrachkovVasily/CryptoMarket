describe("Error Page E2E", () => {
  it("return from error page", () => {
    cy.visit("/");
    cy.get("input[id='search']").type("sdfsdfsndfslk");
    cy.get("img[id='serchIcon']").click();
    cy.get("main button").contains("Return to main page").click();
  });
});
