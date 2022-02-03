class ProductDetailsPage {

    productsDescription = "#tab-description"
    addToCartButton = "#button-cart"


    /**
     * This will return object of product description
     * @returns 
     */
    getProductDescriptionText() {
        return cy.get(this.productsDescription);
    }

    /**
    * This will add product to cart product details page
    * @returns 
    */
    clickOnAddToCartBtn() {
        return cy.get(this.addToCartButton).click();
    }

}

export default ProductDetailsPage