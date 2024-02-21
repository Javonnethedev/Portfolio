describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://chaunceythedev.netlify.app/#");
    //HeaderHome
    cy.get(":nth-child(1) > .nav__link").click();
    //HeaderAbout
    cy.get(":nth-child(2) > .nav__link").click();
    //HeaderSkills
    cy.get(":nth-child(3) > .nav__link").click();
    //HeaderServices
    cy.get(":nth-child(4) > .nav__link").click();
    //HeaderPortfolio
    cy.get(":nth-child(5) > .nav__link").click();
    //HeaderContactme
    cy.get(":nth-child(6) > .nav__link").click();
    //Dark mode toggles
    cy.get("#theme-button").click();
    cy.get("#theme-button").click();
    cy.get("#theme-button").click();
    //Header name link
    cy.get(".nav__logo").click();
    //Contactme Button
    cy.get(".home__data > .button").click();
  });
});
