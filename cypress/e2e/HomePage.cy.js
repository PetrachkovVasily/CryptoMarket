describe("Home Page E2E", () => {
  it("search coin", () => {
    cy.visit("/");
    cy.get("input[id='search']")
      .type("bitcoin")
      .should("have.value", "bitcoin");
    cy.get("img[id='serchIcon']").click();
  });
  it("navigate to error page", () => {
    cy.visit("/");
    cy.get("input[id='search']").type("sdfsdfsndfslk");
    cy.get("img[id='serchIcon']").click();
  });
  it("pagination", () => {
    cy.visit("/");
    cy.get("button").contains("Next").click();
    cy.get("button").contains("Previous").click();
    cy.get("button").contains("Previous").click();
  });
  it("navigate to coin page", () => {
    cy.visit("/");
    cy.get("tbody tr h3").contains("Bitcoin").click();
  });
  it("remove coins from brief", () => {
    cy.visit("/");
    cy.get("tbody button").first().click();
    cy.get("input[id='addCoin']").type("100").should("have.text", "");
    cy.get("button[id='addToBriefBtn']").click();
    cy.visit("/");
    cy.get("header button").first().click();
    cy.get("section input").first().type("10");
    cy.get("section button").first().click();
    cy.get("section input").first().type("100");
    cy.get("section button").first().click();
  });
  it("change selection", () => {
    cy.visit("/");
    cy.get("select").select("Price");
    cy.get("select").select("Market cap");
    cy.get("select").select("24h %");
  });
});
