class CheckoutPage {
  engagementNameTextField = "[data-test='engagement-name-input']";
  createEngagementButton = "[data-test='next-button']";

  enterEngagementName(engagementName) {
    cy.get(this.engagementNameTextField)
      .should("be.visible")
      .type(engagementName)
      .type("{enter}");
  }

  clickOnCreateEngagementButton() {
    //create engagement
    cy.get(this.createEngagementButton).should("be.visible").click();
  }
}

export const checkoutPage = new CheckoutPage();
