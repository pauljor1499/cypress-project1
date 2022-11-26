describe("Student Login to MathWorld", () => {
    it("Valid login", () => {
        cy.visit("/signin");
        cy.get("h5").should("have.text", "Sign In Account");
        cy.get("#select-role").click();
        cy.get("#list-item-43-0").should("have.text", "Student");
        cy.get("#list-item-43-1").should("have.text", "Teacher");
        cy.get("#list-item-43-0").click();
        cy.get("#input-email").type("student@gmail.com");
        cy.get("#input-password").type("student");
        cy.get("#button-signin").click();
        cy.url().should("eq", "http://localhost:8080/student");
    });

    it("Blank all inputs", () => {
        cy.visit("/signin");
        cy.get("h5").should("have.text", "Sign In Account");
        cy.get("#button-signin").click();
        cy.get(
            ":nth-child(2) > .v-input > .v-input__control > .v-text-field__details > .v-messages > .v-messages__wrapper > .v-messages__message"
        ).should("have.text", "Item is required");
        cy.get(
            ":nth-child(3) > .v-input > .v-input__control > .v-text-field__details > .v-messages > .v-messages__wrapper > .v-messages__message"
        ).should("have.text", "E-mail is required");
        cy.get(
            ":nth-child(4) > .v-input > .v-input__control > .v-text-field__details > .v-messages > .v-messages__wrapper > .v-messages__message"
        ).should("have.text", "Password is required");
    });

    it("Blank role", () => {
        cy.visit("/signin");
        cy.get("h5").should("have.text", "Sign In Account");
        cy.get("#input-email").type("student@gmail.com");
        cy.get("#input-password").type("student");
        cy.get("#button-signin").click();
        cy.get(
            ":nth-child(2) > .v-input > .v-input__control > .v-text-field__details > .v-messages > .v-messages__wrapper > .v-messages__message"
        ).should("have.text", "Item is required");
    });

    it("Blank e-mail", () => {
        cy.visit("/signin");
        cy.get("h5").should("have.text", "Sign In Account");
        cy.get("#select-role").click();
        cy.get("#list-item-43-0").should("have.text", "Student");
        cy.get("#list-item-43-1").should("have.text", "Teacher");
        cy.get("#list-item-43-0").click();
        cy.get("#input-password").type("student");
        cy.get("#button-signin").click();
        cy.get(
            ":nth-child(3) > .v-input > .v-input__control > .v-text-field__details > .v-messages > .v-messages__wrapper > .v-messages__message"
        ).should("have.text", "E-mail is required");
    });

    it("Blank password", () => {
        cy.visit("/signin");
        cy.get("h5").should("have.text", "Sign In Account");
        cy.get("#select-role").click();
        cy.get("#list-item-43-0").should("have.text", "Student");
        cy.get("#list-item-43-1").should("have.text", "Teacher");
        cy.get("#list-item-43-1").click();
        cy.get("#input-email").type("student@gmail.com");
        cy.get("#button-signin").click();
        cy.get(
            ":nth-child(4) > .v-input > .v-input__control > .v-text-field__details > .v-messages > .v-messages__wrapper > .v-messages__message"
        ).should("have.text", "Password is required");
    });

    it("Select teacher role", () => {
        cy.visit("/signin");
        cy.get("h5").should("have.text", "Sign In Account");
        cy.get("#select-role").click();
        cy.get("#list-item-43-0").should("have.text", "Student");
        cy.get("#list-item-43-1").should("have.text", "Teacher");
        cy.get("#list-item-43-1").click();
        cy.get("#input-email").type("student@gmail.com");
        cy.get("#input-password").type("student");
        cy.get("#button-signin").click();
        cy.get("#error-message").should(
            "have.text",
            " Invalid username or password "
        );
    });

    it("Invalid username and password", () => {
        cy.visit("/signin");
        cy.get("h5").should("have.text", "Sign In Account");
        cy.get("#select-role").click();
        cy.get("#list-item-43-0").should("have.text", "Student");
        cy.get("#list-item-43-1").should("have.text", "Teacher");
        cy.get("#list-item-43-0").click();
        cy.get("#input-email").type("xyz@gmail.com");
        cy.get("#input-password").type("xyz");
        cy.get("#button-signin").click();
        cy.get("#error-message").should(
            "have.text",
            " Invalid username or password "
        );
    });

    it("Invalid email", () => {
        cy.visit("/signin");
        cy.get("h5").should("have.text", "Sign In Account");
        cy.get("#select-role").click();
        cy.get("#list-item-43-0").should("have.text", "Student");
        cy.get("#list-item-43-1").should("have.text", "Teacher");
        cy.get("#list-item-43-0").click();
        cy.get("#input-email").type("xyz@gmail.com");
        cy.get("#input-password").type("student");
        cy.get("#button-signin").click();
        cy.get("#error-message").should(
            "have.text",
            " Invalid username or password "
        );
    });

    it("Email without '@' symbol", () => {
        cy.visit("/signin");
        cy.get("h5").should("have.text", "Sign In Account");
        cy.get("#select-role").click();
        cy.get("#list-item-43-0").should("have.text", "Student");
        cy.get("#list-item-43-1").should("have.text", "Teacher");
        cy.get("#list-item-43-0").click();
        cy.get("#input-email").type("studentgmail.com");
        cy.get("#input-password").type("student");
        cy.get("#button-signin").click();
        cy.get(
            ":nth-child(3) > .v-input > .v-input__control > .v-text-field__details > .v-messages > .v-messages__wrapper > .v-messages__message"
        ).should("have.text", "Must be valid e-mail");
    });

    it("Email without dot symbol", () => {
        cy.visit("/signin");
        cy.get("h5").should("have.text", "Sign In Account");
        cy.get("#select-role").click();
        cy.get("#list-item-43-0").should("have.text", "Student");
        cy.get("#list-item-43-1").should("have.text", "Teacher");
        cy.get("#list-item-43-0").click();
        cy.get("#input-email").type("student@gmailcom");
        cy.get("#input-password").type("student");
        cy.get("#button-signin").click();
        cy.get(
            ":nth-child(3) > .v-input > .v-input__control > .v-text-field__details > .v-messages > .v-messages__wrapper > .v-messages__message"
        ).should("have.text", "Must be valid e-mail");
    });

    it("Invalid password", () => {
        cy.visit("/signin");
        cy.get("h5").should("have.text", "Sign In Account");
        cy.get("#select-role").click();
        cy.get("#list-item-43-0").should("have.text", "Student");
        cy.get("#list-item-43-1").should("have.text", "Teacher");
        cy.get("#list-item-43-0").click();
        cy.get("#input-email").type("student@gmail.com");
        cy.get("#input-password").type("xyz");
        cy.get("#button-signin").click();
        cy.get("#error-message").should(
            "have.text",
            " Invalid username or password "
        );
    });
});
