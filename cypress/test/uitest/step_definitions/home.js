import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import HomePage from '../pages/HomePage';
const homePage = new HomePage();

Given('User navigate to homepage', () => {
    homePage.navigate();
})

When('User click on {string} menu from topbar', (menu) => {
    homePage.clickOnDropDownMenu(menu);
})

When('User click on {string} menu option from top bar', (option) => {
    homePage.clickOnDropDownMenuOption(option);
})

Then('User should see Product Bar', () => {
    homePage.getNavigationProductMenuBar().should('be.visible');
})

Then('User should see {string} menu option from top bar', (menuOption) => {
    homePage.getDropDownMenuOption(menuOption).should('be.visible');
})

Then('User should see success message {string} on Home Page', (message) => {
    homePage.getSuccessMessage().contains(message)
})

Then('User should see Home Page', () => {
    homePage.getCommonHomePageContainer().should('be.visible');
})






