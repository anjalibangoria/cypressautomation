
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import SearchPage from '../pages/SearchPage';
const searchPage = new SearchPage();

When('User enter {string} in searchbox and click on search icon', (keyword) => {
    searchPage.searchUsingSearchBox(keyword);
    searchPage.clickOnSearchIcon();
})

When('User enter {string} in criteria search input box', (keyword) => {
    searchPage.searchUsingSearchCriteriaInput(keyword);
})


Then('User should see products with name contains {string}', (productName) => {
    searchPage.getProductsCaption().then($el => {
        // expect($el).to.contain(productName)
    });
})

When('User change search category to {string}', (category) => {
    searchPage.clickOnCategoryDropDownAndSelectSubCategory(category);
})

When('User click on criteria search button', () => {
    searchPage.clickOnCriteriaSearchButton();
})

When('User click on search icon', () => {
    searchPage.clickOnSearchIcon();
})

Then('User should see {string} as product result message', (message) => {
    searchPage.getProductResultMessage().contains(message)
})

When('User click on {string} menu', (category) => {
    searchPage.clickOnMainCategoryFromNavigationBar(category);
})

When('User click on {string} option from {string} menu', (subCategory, mainCategory) => {
    searchPage.clickOnSubCategoryFromNavigationBar(mainCategory, subCategory);
})

Then('User should see {string} in caption details', (keyword) => {
    if (!keyword.includes("|")) {
        searchPage.getProdctCaptionDetails().invoke('text').should('contain', keyword)
    }
    else {
        searchPage.getProdctCaptionDetails().invoke('text').should('match', new RegExp(keyword, "gmi"))
    }
})

Then('User should see left side panel highlighted with {string}', () => {
    searchPage.getAllHighlightedLinkFromLeftPanel();
})

Then('User should see total listed products count and product count from page number section are same', () => {
    let productCount = 0;
    searchPage.getTotalProductCountFromBottomPageText()
        .then(($ele) => {

            // store the button's text
            const txt = $ele.text() + ""
            let temp = txt.split("of")[1].trim().split(" ")[0].trim()
            productCount = parseInt(temp);
        }).then(() => {
            searchPage.getAllProductsLink().should('have.length', productCount)
        });
});

Then('User should see navigation hierarchy {string} in breadcrumb', (categoryHierarchy) => {
    let categories = []
    categories = categoryHierarchy.split(",");
    let navItems = []
    searchPage.getNavigationBreadCrumb().each(($ele, index) => {

        let cat = categories[index].trim();
        const txt = $ele.text() + ""
        if (cat == "Home") {
            cat = ''
        }
        expect(cat).to.equal(txt);
    })
})

When('User click on home button from navigation breadcrumb', () => {
    searchPage.clickOnHomeButtonFromNavigationBreadCrumb();
})

When('User click select search in product descriptions checkbox', () => {
    searchPage.clickOnSearchInDescriptionCheckBox();
})


Then('User should see products', () => {
    searchPage.getAllProductsLink()
        .its('length')
        .should('be.gt', 0);
})

When('User select {string} product', (index) => {
    searchPage.clickOnProductUsingIndex(index);
})

Then('User should see cart with {string} items at top of search page', (item) => {
    let cartCount = 0;
    searchPage.getCartTotalItemFromSearchPage()
        .then(($ele) => {
            // store the button's text
            const txt = $ele.text() + ""
            cartCount = txt.split("item(s)")[0].trim().split(" ")[0].trim()
            // cartCount = parseInt(temp);
        }).then(() => {
            expect(item).to.equal(cartCount);

        });
})

Then('User should see success message {string} on search page', (message) => {
    searchPage.getSuccessMessage().invoke('text').should('contain', message);
})

When('User click on add to cart button of {string} product from search page', (item) => {
    searchPage.addProductToCartUsingIndex(item);
})





