
class CartPage {
    cartProductsRow = "#checkout-cart form tbody tr"
    cartItemQuantityAccordingToProductName = ".//*[@id='checkout-cart']//a[contains(text(), '%PRODUCTNAME%')]/ancestor::td/following-sibling::td//input"
    updateCartButtonAccordingToProductName = ".//*[@id='checkout-cart']//a[contains(text(), '%PRODUCTNAME%')]/ancestor::td/following-sibling::td//button[@data-original-title='Update']"
    removeFromCartAccordingToProductName = ".//*[@id='checkout-cart']//a[contains(text(), '%PRODUCTNAME%')]/ancestor::td/following-sibling::td//button[@data-original-title='Remove']"
    cartTotalAmountRowWise = "#checkout-cart form tbody tr:nth-of-type(%ROW%) td:nth-of-type(6)"
    totalCartAmountBasedOnProductName = ".//*[@id='checkout-cart']//a[contains(text(), '%PRODUCTNAME%')]/ancestor::td/following-sibling::td[4]"
    successMessage = ".alert-success"
    totalAmount = ".//div[@id='accordion']/following-sibling::div//tr[4]/td[2]"
    checkoutBtn = "a:contains('Checkout').btn-primary"

    /**
     * This will return allrows of cart table 
     * @returns product row
     */
    getCartTableRow() {
        return cy.get(this.cartProductsRow);
    }

    /**
     * This will return object of qunatity of given product
     * @param {productName} productName 
     * @returns 
     */
    getQuantityOfProduct(productName) {
        return cy.xpath(this.cartItemQuantityAccordingToProductName.replace("%PRODUCTNAME%", productName));
    }

    /**
     * This will change qunatity of given product
     * @param {productName} productName 
     * @param {quantity} quantity  
     * @returns 
     */
    changeQuantityOfProduct(productName, quantity) {
        cy.xpath(this.cartItemQuantityAccordingToProductName.replace("%PRODUCTNAME%", productName)).click().clear().type(quantity);
        cy.xpath(this.updateCartButtonAccordingToProductName.replace("%PRODUCTNAME%", productName)).click();
        return this;
    }

    /**
     * This will return object of total amount of given row
     * @param {row} row 
     * @returns 
     */
    getTotalAmountForGivenRow(row) {
        return cy.get(this.cartTotalAmountRowWise.replace("%ROW%", row));
    }


    /**
    * This will return object of total amount of given product name
    * @param {row} row 
    * @returns 
    */
    getCartTotalAmountProductNameWise(productName) {
        return cy.xpath(this.totalCartAmountBasedOnProductName.replace("%PRODUCTNAME%", productName));
    }

    /**
     * This will return object of total amount of cart which at bottom of page 
     * @returns 
     */
    getTotalAmount() {
        return cy.xpath(this.totalAmount);
    }

    /**
     * This will click on Checkout Button from cart page
     * @returns 
     */
    clickOnCheckoutButton() {
        return cy.get(this.checkoutBtn).click();
    }

    /**
     * This will remove product from cart based on given product name
     * @param {productName} productName 
     * @returns 
     */
    removeFromCartUsingProductName(productName) {
        return cy.xpath(this.removeFromCartAccordingToProductName.replace("%PRODUCTNAME%", productName)).click().wait(Cypress.config().maxWaitTimeout);

    }

    /**
     * This will return success message of cart page
     * @returns 
     */
    getSuccessMessage() {
        return cy.get(this.successMessage).scrollIntoView();
    }

}

export default CartPage