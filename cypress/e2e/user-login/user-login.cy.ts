require("dotenv").config;
describe("Validate login form", () => {
	beforeEach(() => {
		cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
		Cypress.on("uncaught:exception", (/*err, runnable*/) => {
			return false;
		});

		expect(true).to.equal(true);
		cy.visit(`/`);
		cy.contains("a", "Go to login").should("be.visible").click();
		cy.url().should("eq", `${Cypress.config().baseUrl}/login`);

		cy.get('input[name="login"]').should("be.visible");
		cy.get('input[name="password"]').should("be.visible");
		cy.contains("button", "Entrar").should("be.visible");
	});
	it("Validate the form", () => {
		cy.get('input[name="login"]').type("user");
		cy.get('input[name="login"]').should("have.value", "user");
		cy.get('input[name="password"]').type("123");
		cy.get('input[name="password"]').should("have.value", "123");

		cy.contains("button", "Entrar").click();
		cy.contains("span", "Login must be at least 6 characters");
		cy.contains("span", "Password must be at least 8 characters");
	});
	it("Valide user (fail)", () => {
		cy.get('input[name="login"]').type("invalid_user");
		cy.get('input[name="login"]').should("have.value", "invalid_user");
		cy.get('input[name="password"]').type("invalid_password");
		cy.get('input[name="password"]').should("have.value", "invalid_password");

		cy.contains("button", "Entrar").click();
		cy.contains("Login fail: User not found");
	});

	it("Valide user (success)", () => {
		cy.get('input[name="login"]').type("kelvin.newton");
		cy.get('input[name="login"]').should("have.value", "kelvin.newton");
		cy.get('input[name="password"]').type("123456");
		cy.get('input[name="password"]').should("have.value", "123456");

		cy.contains("button", "Entrar").should("be.visible").click();
		cy.contains("Login successfully").should("be.visible");
	});
});
