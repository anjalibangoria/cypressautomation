
class SearchPage {
    //search and category related locators
    searchBox = "input[name='search']"
    searchIcon = "#search button"
    criteriaSearchInput = "#input-search"
    criteriaSearchButton = "#button-search"
    categoryDropDown = "[name=category_id]"
    categoryDropDownListUsingValue = "option"
    searchInProductDescriptionCheckBox = "input#description[type=checkbox]"


    //navigation bar related locators
    navigationBarMainCategory = "nav#menu ul.navbar-nav li>a:contains('%MAINCATEGORY%')"
    //we cant go to parent using css so used xpath here
    navigationBarSubCategory = "..//li//a[contains(text(),'%SUBCATEGORY%')]"

    navigationHierachyBreadcrumb = ".breadcrumb li"
    homeButtonNavigationBreadcrumb = ".breadcrumb li:nth-of-type(1)"
    leftPanelHighledLink = "a.active"

    //product result page locators
    productLayoutSection = "#content .product-layout"
    productTitle = ".caption"
    //can't use following sibling in css so used xpath
    noProductResultMessage = ".//div[@id='content']//input[@id='button-search']/following-sibling::p"
    successMessage = ".alert-success"
    allproductLink = ".product-layout .image"
    productLink = "a"
    productLinkUsingIndex = ".product-layout:nth-of-type(%INDEX%) .image a"
    productsCaptionDetails = ".product-layout .caption p:nth-of-type(1)"
    totalProductCount = ".row .text-right"

    // cart related locatros on search page
    individualProductAddToCartButton = ".//div[contains(@class,'product-layout')][%INDEX%]//span[contains(text(),'Add to Cart')]//ancestor::button"
    cartTotal = "#cart-total"

    /**
     * This enter keyword in search box
     * @param {*} keyword 
     * @returns 
     */
    searchUsingSearchBox(keyword) {
        cy.get(this.searchBox).clear().type(keyword);
        return this;
    }

    /**
     * This will search using search criteria input box
     * @param {*} keyword 
     * @returns 
     */
    searchUsingSearchCriteriaInput(keyword) {
        cy.get(this.criteriaSearchInput).clear().type(keyword);
        return this;
    }

    /**
     * This will click on criteria search button
     * @returns 
     */
    clickOnCriteriaSearchButton() {
        cy.get(this.criteriaSearchButton).click();
        return this;
    }

    /**
     * This will click on search icon which is top of page
     * @returns 
     */
    clickOnSearchIcon() {
        cy.get(this.searchIcon).click();
        return this;
    }

    /**
     * This will return object of caption of listed product
     * @returns 
     */
    getProductsCaption() {
        return cy.get(this.productLayoutSection).find(this.productTitle);
    }

    /**
     * This will click category select drop down and choose subcategory from dropdown
     * @param {*} category 
     * @returns 
     */
    clickOnCategoryDropDownAndSelectSubCategory(subCategory) {
        return cy.get(this.categoryDropDown).select(subCategory).wait(2000);
    }

    /**
     * This will return product result message after search operation
     * @returns 
     */
    getProductResultMessage() {
        return cy.xpath(this.noProductResultMessage);
    }

    /**
     * This will click on Main Product Category which is on product navigation bar
     * @param {*} mainCategory 
     * @returns 
     */
    clickOnMainCategoryFromNavigationBar(mainCategory) {
        cy.get(this.navigationBarMainCategory.replace("%MAINCATEGORY%", mainCategory)).scrollIntoView().click({ force: true });
        return this;
    }

    /**
     * This will click on Sub Product Category which is on product navigation bar
     * @param {*} mainCategory 
     * @param {*} subCategory 
     * @returns 
     */
    clickOnSubCategoryFromNavigationBar(mainCategory, subCategory) {


        let subCategoryLoc = this.navigationBarSubCategory
        // .replace("%MAINCATEGORY%", mainCategory);
        subCategoryLoc = subCategoryLoc.replace("%SUBCATEGORY%", subCategory);
        cy.get(this.navigationBarMainCategory.replace("%MAINCATEGORY%", mainCategory)).xpath(subCategoryLoc).click({ force: true });
        return this;
    }

    /**
     * This will return all products link after search operation
     * this all product are result of our search operation
     * @returns 
     */
    getAllProductsLink() {
        return cy.get(this.allproductLink).find(this.productLink);
    }

    /**
     * This will click on product nth position
     * @param {*} index 
     * @returns 
     */
    clickOnProductUsingIndex(index) {
        return cy.get(this.productLinkUsingIndex.replace("%INDEX%", index)).click();
    }


    /**
    * This will return object of product caption details
    * @returns 
    */
    getProdctCaptionDetails() {
        return cy.get(this.productsCaptionDetails)
    }

    /**
    * This will return object of highlighted link from left side panel
    * ex, if i select monitor, monitor option will be highlighted and I see montiors as result
    * @returns 
    */
    getAllHighlightedLinkFromLeftPanel() {
        return cy.get(this.leftPanelHighledLink);
    }

    /**
     * This will return object of navigation BreadCrumb which is below Product navigation menu bar
     * @returns 
     */
    getNavigationBreadCrumb() {
        return cy.get(this.navigationHierachyBreadcrumb);
    }

    /**
     * This will click on Home Buttom from navigation Bread Crumb
     * @returns 
     */
    clickOnHomeButtonFromNavigationBreadCrumb() {
        return cy.get(this.homeButtonNavigationBreadcrumb).click();
    }

    /**
     * This will click on "Search in product descriptions" check box
     * @returns 
     */
    clickOnSearchInDescriptionCheckBox() {
        return cy.get(this.searchInProductDescriptionCheckBox).click();
    }

    /**
     * This will return Total product results count from Bottom page test
     * eg., Showing 1 to 1 of 1 (1 Pages)
     * @returns 
     */
    getTotalProductCountFromBottomPageText() {
        return cy.get(this.totalProductCount);

    }

    /**
     * This will add product to cart from listed product based on given nth position
     * @param {*} index 
     * @returns 
     */
    addProductToCartUsingIndex(index) {
        return cy.xpath(this.individualProductAddToCartButton.replace("%INDEX%", index)).scrollIntoView().click();


    }

    /**
     * This will return success message which is on search page
     * @returns 
     */
    getSuccessMessage() {
        return cy.wait(Cypress.config().maxWaitTimeout).get(this.successMessage).scrollIntoView();
    }

    /**
     * This will return Total Items count in Cart from search page. This cart count shown at top of page and right hand side of search box
     */
    getCartTotalItemFromSearchPage() {
        return cy.get(this.cartTotal);
    }


}

export default SearchPage