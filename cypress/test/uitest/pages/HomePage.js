
class HomePage {
    menulink = "a[title*='%MENU%' i]"
    menuOption = "ul.dropdown-menu li a:link[href$=%OPTION% i]"
    navigationProductBar = "#menu.navbar"
    successHeader = "#common-success h1"
    commonHomeContainer = "#common-home"
    shoppingCartLink = "a[title = 'Shopping Cart']"

    /**
     * navigate to home page
     */
    navigate() {
        cy.visit(Cypress.config().baseUrl)
    }

    /**
     * This will click on menu from top bar
     */
    clickOnDropDownMenu(menu) {
        cy.get(this.menulink.replace("%MENU%", menu)).scrollIntoView().click();
    }

    /**
     * After click on main, click on menu option from top bar
     */
    clickOnDropDownMenuOption(option) {
        cy.get(this.menuOption.replace("%OPTION%", option), { timeout: Cypress.config().maxElementTimeout }).scrollIntoView().click();
        return this;
    }

    /**
    * After click on main, get menu option from top bar 
    * @returns menuOption
    */
    getDropDownMenuOption(option) {
        return cy.get(this.menuOption.replace("%OPTION%", option)).scrollIntoView();
    }

    /**
     * This will return product navigation menu bar
     * @returns product navigation bar
     */
    getNavigationProductMenuBar() {
        return cy.get(this.navigationProductBar);
    }

    /**
     * This will verify home page 
     * @returns common home page container 
     */
    getCommonHomePageContainer() {
        return cy.get(this.commonHomeContainer);
    }

    /**
    * After complete sign up procces there is success message comes at top of home page
    * @returns success message
    * 
    */
    getSuccessMessage() {
        return cy.get(this.successHeader);
    }

    /**
     * This will click on Shopping cart link to nagivate to shopping cart page
     * @returns 
     */
    clickOnShoppingCartLink() {
        return cy.get(this.shoppingCartLink);
    }
}

export default HomePage