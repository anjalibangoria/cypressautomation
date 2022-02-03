
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import ProductDetailsPage from '../pages/ProductDetailsPage';

const productDetailsPage = new ProductDetailsPage();

Then('User should see {string} in description', (keyword) => {
    productDetailsPage.getProductDescriptionText(keyword);
})

When('User click on add to cart button of {string} product from product details page', (item) => {
    productDetailsPage.clickOnAddToCartBtn(item);
})