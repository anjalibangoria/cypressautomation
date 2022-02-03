const e = require('random-email');

class SignupPage {

    registerAccountHeading = "#account-register h1"
    continueBtn = "input[type=submit][value=Continue i]"
    agreeCheckBox = "input[type=checkbox][name=agree i]"

    // registration form locators
    firstName = "#input-firstname"
    lastName = "#input-lastname"
    email = "#input-email"
    telephone = "#input-telephone"
    password = "#input-password"
    confirmPassword = "#input-confirm"
    errorMessage = "div .alert"

    /**
     * 
     * @returns "Register Account" Header of Signup Page
     */
    getRegiterAccountHeader() {
        return cy.get(this.registerAccountHeading);
    }

    /**
     * 
     * This will click on Continue button to complete sign up process
     */
    clickOnContinueBtn() {
        cy.get(this.continueBtn).click();
    }

    /**
     * 
     *This will click on "I have read and agree to the Privacy Policy" checkbox to agree terms and condition
     */
    clickOnPrivacyPolicyCheckBox() {
        cy.get(this.agreeCheckBox).click();
    }

    /**
     * This will return object of error message which comes at top of sing up page
     * @returns error message
     */
    getErrorMessage() {
        return cy.get(this.errorMessage);
    }

    /**
     * This will take details from test data using fixture and fill details for registration
     *  data are available at fixtures/testData/SignupDetails.json
     * eg., First Name, Last Name, Email, Telephone, Password, ConfirmPassword
     * @param {string} userType 
     */
    fillDetails(userType) {
        cy.fixture('testData/SignupDetails.json').as('signupDetails');

        //Use alias and identify the object which matched to the information passed from feature file
        cy.get('@signupDetails').then((user) => {
            // find the object respective to UserType passed in
            var data = user.filter(item => (item.UserType == userType));

            //enter all required details for sign up user
            cy.get(this.firstName).clear().type(data[0].firstName);
            cy.get(this.lastName).clear().type(data[0].lastName);

            cy.get(this.email).clear().type(e({ domain: data[0].emailDomain }));
            cy.get(this.telephone).clear().type(data[0].telephone);
            cy.get(this.password).clear().type(data[0].password, { log: false });
            cy.get(this.confirmPassword).clear().type(data[0].passwordConfirm, { log: false });

        });


    }

}

export default SignupPage