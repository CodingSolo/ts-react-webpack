describe("sample cypress Test", () => {
    it("visits the site", () => {
        cy.visit("http://localhost:8080");
        cy.get("h1").should("contain", "Hello World!");
    });
});
