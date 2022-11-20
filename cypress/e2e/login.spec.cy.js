describe("Login to MathWorld", () => {
    it("should go to MathWorld login page", () => {
        cy.visit("http://localhost:8080/signin");
        cy.get(".logo").should("be.visible");
        cy.get("#select-role").click();
        cy.get("#list-item-42-1").click();
        cy.get("#input-email").type("teacheremail@gmail.com");
        cy.get("#input-password").type("Password2022!");
        cy.get(".submit-button").click();
        cy.get(".profile-icon").should("be.visible");
    });

    // cy.get('textarea').should('have.value', 'foo bar baz')
    // // assert the element's text content is exactly the given text
    // cy.get('[data-testid="user-name"]').should("have.text", "Joe Smith");
    // // assert the element's text includes the given substring
    // cy.get('[data-testid="address"]').should("include.text", "Atlanta");
    // // retry until this span does not contain 'click me'
    // cy.get("a").parent("span.help").should("not.contain", "click me");
    // // the element's text should start with "Hello"
    // cy.get('[data-testid="greeting"]')
    //     .invoke("text")
    //     .should("match", /^Hello/);
    // // use cy.contains to find an element with its text
    // // matching the given regular expression
    // cy.contains('[data-testid="greeting"]', /^Hello/);
});
