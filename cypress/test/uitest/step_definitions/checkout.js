import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import CheckoutPage from '../pages/CheckoutPage';
const checkoutPage = new CheckoutPage();

When('User click on Guest Checkout button', () => {
    checkoutPage.clickOnGuestCheckoutRadioBtn();
    checkoutPage.clickOnContinueBtnCheckoutOption();

})

When('User enter first name as {string} last name as {string} email as {string} telephone as {string} address as {string} city as {string} post code as {string} country as {string} region as {string}', (firstname, lastname, email, telephone, address, city, postcode, country, region) => {
    checkoutPage.enterFirstName(firstname);
    checkoutPage.enterLastName(lastname);
    checkoutPage.enterEmail(email);
    checkoutPage.enterTelephone(telephone);
    checkoutPage.enterAddress(address);
    checkoutPage.enterCity(city);
    checkoutPage.enterPostcode(postcode);
    checkoutPage.selectCountry(country);
    checkoutPage.selectRegion(region);
    checkoutPage.clickOnContinueAsGuestButtonFromBilingDetails();
})


When('User click on Continue button of Delivery Details', () => {
    checkoutPage.clickOnConitnueButto();
})

When('User select {string} as Delivery Method', (method) => {
    //for now there is only one method is supported
    if (method == "Flat Shipping Rate")
        checkoutPage.clickOnShippingMethod();
    checkoutPage.clickOnConitnueButtonOfDeliveryMethod();
})


When('User select {string} as Payment Method', (method) => {
    //for now only cod is supported by application
    if (method == "Cash On Delivery")
        checkoutPage.clickOnCodRadioButton();
})

When('User select Terms & condition checkbox under Payment Method', () => {
    checkoutPage.clickOnAgreeCheckBox();
})

When('User click on Continue button of Payment Method', () => {
    checkoutPage.clickOnContinueButtonOfPaymentMethod();
})

When('User see total order amount under confirm order', () => {
    checkoutPage.getTotalOrderAmount().should('be.visible');
})

When('User click on Confirm Order button under Confirm Order', () => {
    checkoutPage.clickOnCofirmOrder();
})

Then('User should see success message {string} on Checkout Page', (message) => {
    checkoutPage.getSuccessMessage().contains(message)
})



