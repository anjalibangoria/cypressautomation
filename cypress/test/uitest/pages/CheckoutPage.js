



class CheckoutPage {

    //checkout options locators
    guestCheckoutRadioBtn = "input[value='guest']"
    continueBtnCheckoutOption = "input[type=button][value=continue i]"
    //Account & Billing Details locators
    firstnameInput = "input[name='firstname']"
    lastnameInput = "input[name='lastname']"
    emailInput = "input#input-payment-email"
    telephoneInput = "input#input-payment-telephone"
    addressInput = "input#input-payment-address-1"
    cityInput = "input#input-payment-city"
    postCodeInput = "input#input-payment-postcode"
    countryDD = "select#input-payment-country"
    regionDD = "select#input-payment-zone"
    continueBtnASGuest = "input#button-guest[value=continue i]"
    //delivery method locators
    shippingMethod = "input[name='shipping_method']"
    continueButtonDeliveryMethod = "input#button-shipping-method[value=continue i]"
    //shipping method locators
    codRadioBtn = "input[name='payment_method'][value='cod']"
    agreeCheckBox = "input[type='checkbox'][name='agree']"
    //payment method locators
    continueButtonPaymentMethod = "input#button-payment-method[value=continue i]"
    continueButtonDeliveryDetails = "input#button-guest-shipping[value=continue i]"

    //totalorder amount
    totalOrderAmount = "#collapse-checkout-confirm tfoot tr:nth-of-type(3) td:nth-of-type(2)"
    confirmOrderBtn = "#button-confirm"

    //success message on checkout page
    successHeader = "#common-success h1"


    /**
     * This method will click on Guest Checkout radio button
     * @returns 
     */
    clickOnGuestCheckoutRadioBtn() {
        cy.get(this.guestCheckoutRadioBtn).click();
        return this;
    }

    /**
     * This method will click on continue button
     * @returns 
     */
    clickOnContinueBtnCheckoutOption() {
        cy.get(this.continueBtnCheckoutOption).click();
        return this;
    }
    /**
     * This will enter first name under biling details
     * @param {*} firstName 
     * @returns 
     */
    enterFirstName(firstName) {
        cy.get(this.firstnameInput).scrollIntoView().clear().type(firstName);
        return this;
    }

    /**
     * This will enter last name under biling details
     * @param {*} firstName 
     * @returns 
     */
    enterLastName(lastName) {
        cy.get(this.lastnameInput).scrollIntoView().clear().type(lastName);
        return this;
    }

    /**
     * This will enter email under biling details
     * @param {*} firstName 
     * @returns 
     */
    enterEmail(email) {
        cy.get(this.emailInput).scrollIntoView().clear().type(email);
        return this;
    }

    /**
    * This will enter telephone under biling details
    * @param {*} firstName 
    * @returns 
    */
    enterTelephone(telephone) {
        cy.get(this.telephoneInput).scrollIntoView().clear().type(telephone);
        return this;
    }

    /**
     * This will enter address under biling details
     * @param {*} firstName 
     * @returns 
     */
    enterAddress(address) {
        cy.get(this.addressInput).scrollIntoView().clear().type(address);
        return this;
    }

    /**
     * This will enter city under biling details
     * @param {*} firstName 
     * @returns 
     */
    enterCity(city) {
        cy.get(this.cityInput).clear().scrollIntoView().type(city);
        return this;
    }

    /**
     * This will enter post code under biling details
     * @param {*} firstName 
     * @returns 
    */
    enterPostcode(postcode) {
        cy.get(this.postCodeInput).scrollIntoView().clear().type(postcode);
        return this;
    }

    /**
     * This will enter country under biling details
     * @param {*} firstName 
     * @returns 
    */
    selectCountry(country) {
        return cy.get(this.countryDD).scrollIntoView().select(country).wait(2000)
    }

    /**
     * This will enter region under biling details
     * @param {*} firstName 
     * @returns 
    */
    selectRegion(region) {
        return cy.get(this.regionDD).scrollIntoView().select(region).wait(2000)
    }

    /**
     * This will click on continue button from biling details
     * @param {*} firstName 
     * @returns 
    */
    clickOnContinueAsGuestButtonFromBilingDetails() {
        return cy.get(this.continueBtnASGuest).click();
    }

    /**
    * This will click on shipping method from Delivery Method 
    * @param {*} firstName 
    * @returns 
    */
    clickOnShippingMethod() {
        return cy.get(this.shippingMethod).click();
    }

    /**
     * This will click on continue from Delivery Method 
     * @param {*} firstName 
     * @returns 
     */
    clickOnConitnueButtonOfDeliveryMethod() {
        return cy.get(this.continueButtonDeliveryMethod).click();
    }

    /**
     * This method will click on Cash On Delivery Radio button under delivery method
     * @returns 
     */
    clickOnCodRadioButton() {
        return cy.get(this.codRadioBtn).click();
    }

    /**
     * This method will click on Agree check box under payment method
     * @returns 
     */
    clickOnAgreeCheckBox() {
        return cy.get(this.agreeCheckBox).click();
    }

    /**
     * This method will click on continue button under payment method
     * @returns 
     */
    clickOnContinueButtonOfPaymentMethod() {
        return cy.get(this.continueButtonPaymentMethod).click();
    }

    /**
    * This method will click on continue button under delivery details
    * @returns 
    */
    clickOnContinueButtonOfDeliveryDetails() {
        return cy.get(this.continueButtonDeliveryDetails).click();
    }

    /**
    * This method will return success message object
    * @returns 
    */
    getSuccessMessage() {
        return cy.get(this.successHeader);
    }

    /**
    * This method will return total order amount which is at bottom of check out page
    * @returns 
    */
    getTotalOrderAmount() {
        return cy.get(this.totalOrderAmount);
    }

    /**
    * This method will click on Confirm Order button which is at bottom of checkout page and it is final step of checkout process
    * @returns 
    */
    clickOnCofirmOrder() {
        return cy.get(this.confirmOrderBtn).click();

    }
}

export default CheckoutPage