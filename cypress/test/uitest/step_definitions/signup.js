import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import SignupPage from '../pages/SignupPage';

const signupPage = new SignupPage();

Then('User should see {string} page title', (header) => {
    signupPage.getRegiterAccountHeader().contains(header);
})

When('User click on Continue button', () => {
    signupPage.clickOnContinueBtn();
})

Then('User should see error message {string}', (message) => {
    signupPage.getErrorMessage().should('be.visible');
    signupPage.getErrorMessage().contains(message);
})

Then('User Click on privacy policy checkbox', () => {
    signupPage.clickOnPrivacyPolicyCheckBox();
})

When('User fill details for RegisterAccount as {string}', (userType) => {
    signupPage.fillDetails(userType);
})








