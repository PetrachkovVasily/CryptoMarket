describe("Cion Page E2E", () => {
  it("open brief modal", () => {
    cy.visit("/coin/bitcoin");
    cy.get("header button").first().click();
  });
  it("close brief modal", () => {
    cy.visit("/coin/bitcoin");
    cy.get("header button").first().click();
    cy.get("dialog").click({ multiple: true, force: true }, 15, 40);
  });
  it("open add modal", () => {
    cy.visit("/coin/bitcoin");
    cy.get("button[id='addCoinToBriefBtn']").first().click();
  });
  it("close add modal", () => {
    cy.visit("/coin/bitcoin");
    cy.get("button[id='addCoinToBriefBtn']").first().click();
    cy.get("dialog").click({ multiple: true, force: true }, 15, 40);
  });
  it("return from error page", () => {
    cy.visit("/coin/bitcoin");
    cy.get("button").contains("Return to main page").click();
  });
  it("change selection", () => {
    cy.visit("/coin/bitcoin");
    cy.get("select").select("1 hour");
    cy.get("select").select("12 hours");
    cy.get("select").select("1 day");
  });
  it("trying to enter bid number in add modal", () => {
    cy.visit("/coin/bitcoin");
    cy.get("button[id='addCoinToBriefBtn']").first().click();
    cy.get("input[id='addCoin']").type(1000).should("have.text", "");
  });
  it("trying to enter negative number in add modal", () => {
    cy.visit("/coin/bitcoin");
    cy.get("button[id='addCoinToBriefBtn']").first().click();
    cy.get("input[id='addCoin']").type(-1).should("have.text", "");
  });
  it("trying to enter big number in brief modal", () => {
    cy.visit("/coin/bitcoin");
    cy.get("button[id='addCoinToBriefBtn']").first().click();
    cy.get("input[id='addCoin']").type("10");
    cy.get("dialog button").first().click();

    cy.get("dialog").click({ multiple: true, force: true }, 15, 40);
    cy.get("header button").first().click();
    cy.get("dialog input").first().type(1000).should("have.text", "");
  });
  it("trying to enter negative number in brief modal", () => {
    cy.visit("/coin/bitcoin");
    cy.get("button[id='addCoinToBriefBtn']").first().click();
    cy.get("input[id='addCoin']").type("10");
    cy.get("dialog button").first().click();

    cy.get("dialog").click({ multiple: true, force: true }, 15, 40);
    cy.get("header button").first().click();
    cy.get("dialog input").first().type(-1).should("have.text", "");
  });
  it("add coins to brief", () => {
    cy.visit("/coin/bitcoin");
    cy.get("button[id='addCoinToBriefBtn']").first().click();
    cy.get("input[id='addCoin']").type("100").should("have.text", "");
  });
  it("remove coins from brief", () => {
    cy.visit("/coin/bitcoin");
    cy.get("button[id='addCoinToBriefBtn']").first().click();
    cy.get("input[id='addCoin']").type("10");
    cy.get("dialog button").first().click();

    cy.get("dialog").click({ multiple: true, force: true }, 15, 40);
    cy.get("header button").first().click();
    cy.get("dialog input").first().type("5");
    cy.get("dialog button").first().click();

    cy.get("dialog input").first().type("10");
    cy.get("dialog button").first().click();
  });
});
