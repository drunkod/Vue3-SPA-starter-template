describe("Payments", () => {
  beforeEach(() => {
    cy.intercept(
      "GET", // Route all GET requests
      "/api/user", // that have a URL that matches '/users/*'
      { fixture: "user" }
    ).as("getUser");

    cy.visit("/settings");
  });
  it("Shows payments add page", () => {
    //    There should be a stripe iframe
    cy.get(".__PrivateStripeElement > iframe").should("exist");

    // There should be a submit button
    cy.get("button[type=submit]").should("be.visible");

    // The button should be disabled
    cy.get("button[type=submit]").should("be.disabled");
  });
  it.skip("Can be submitted", () => {
    // Fill out the form
    // cy.get("input[name=cardholderName]").type("John Doe");
    // cy.get("input[name=cardNumber]").type("4242424242424242");
    // cy.get("input[name=expiry]").type("12/24");
    // cy.get("input[name=cvc]").type("123");

    // Wait for stripe JS to load
    cy.wait(5000);

    cy.get(".__PrivateStripeElement > iframe")
      .should("have.length", 1)
      .then(($iframe) => {
        const doc = $iframe.contents();
        let input = doc.find("input")[0];
        cy.wrap(input).type("4242424242424242");
        input = doc.find("input")[1];
        cy.wrap(input).clear().type("12").type("42");
        input = doc.find("input")[2];
        cy.wrap(input).type("424");
      });

    // The button should be enabled
    cy.get("button[type=submit]").should("not.be.disabled");

    // Submit the form
    cy.get("button[type=submit]").click();

    // Expect a request to have been made to '/users/1'
    cy.wait("@getUser").its("response.statusCode").should("eq", 200);
  });
});
