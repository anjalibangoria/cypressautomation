
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import CartPage from '../pages/CartPage';
const cartPage = new CartPage();

Then('User should see {string} items in cart', (itemCount) => {
    cartPage.getCartTableRow().its('length')
        .should('eq', parseInt(itemCount));
})

Then('User should see {string} with {string} quantity on cart page', (productName, quantity) => {
    cartPage.getQuantityOfProduct(productName).invoke('attr', 'value')
        .then(($val) => {
            const style1 = $val
            expect(quantity).to.equal($val);
            $val.should('eq',quantity);
        })
})

When('User edit quantity of {string} to {string}', (productName, newQuantity) => {
    cartPage.changeQuantityOfProduct(productName, newQuantity);
})

Then('User should see success message {string} on cart page', (message) => {
    cartPage.getSuccessMessage().invoke('text').should('contain', message);
})

When('User remove product {string} from cart', (productName) => {
    cartPage.removeFromCartUsingProductName(productName);
})

Then('User should see total of {string} product', (row) => {
    cartPage.getTotalAmountForGivenRow(row).should('be.visible');
})

Then('User should see cart amount of {string} product and total amount are same', (productName) => {
    cartPage.getCartTotalAmountProductNameWise(productName).invoke('text')
        .then(($val) => {
            cartPage.getTotalAmount().invoke('text').should('eq', $val);
        })
})

When('User click on Checkout Button from cart page', () => {
    cartPage.clickOnCheckoutButton();
})

Then('User should see cart is empty', () => {
    cartPage.getCartTableRow().should('not.exist');
})










