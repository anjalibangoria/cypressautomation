
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
const homePage = new HomePage();
const loginPage = new LoginPage();

When('User login as {string}', (userType) => {
    loginPage.loginBasedOnUserType(userType);
})

When('User navigate to Login Page and login as {string}', (userType) => {
    homePage.clickOnDropDownMenu("My Account");
    homePage.clickOnDropDownMenuOption("Login");
    loginPage.loginBasedOnUserType(userType);
    loginPage.login();
})

When('User click on Login button', () => {
    loginPage.login();
})

