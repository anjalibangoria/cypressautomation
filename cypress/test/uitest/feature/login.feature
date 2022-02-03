Feature: Login
    Background: Navigate to Home Page
        Given User navigate to homepage

    #####Signup operation using new user details data ###
    @regression
    Scenario: Verify Signup
        When User click on "My Account" menu from topbar
        When User click on "Register" menu option from top bar
        Then User should see "Register Account" page title
        When User fill details for RegisterAccount as "NewUserWithSamePassword"
        When User click on Continue button
        Then User should see error message "You must agree to the Privacy Policy"
        When User Click on privacy policy checkbox
        When User click on Continue button
        Then User should see success message "Your Account Has Been Created" on Home Page
        When User click on "My Account" menu from topbar
        Then User should see "Logout" menu option from top bar
        Then User click on "Logout" menu option from top bar

    #####Login with invalid user and verify error message #####
    @regression
    Scenario Outline: Verify Login with invalid email and password
        When User click on "My Account" menu from topbar
        When User click on "Login" menu option from top bar
        When User login as "<UserType>"
        When User click on Login button
        Then User should see error message "<ExpectedErrorMessage>"

        Examples:
            | UserType                      | ExpectedErrorMessage                        |
            | ValidUserAndInvalidPassword   | No match for E-Mail Address and/or Password |
            | InvalidUserAndValidPassword   | No match for E-Mail Address and/or Password |
            | InvalidUserAndInvalidPassword | No match for E-Mail Address and/or Password |




    ####Login with valid user and verify login succesfully ###
    @regression
    Scenario: Verify Login with valid email and password
        When User click on "My Account" menu from topbar
        When User click on "Login" menu option from top bar
        When User login as "ValidUser"
        When User click on Login button
        Then User should see Product Bar
        When User click on "My Account" menu from topbar
        Then User should see "Logout" menu option from top bar
        Then User should see Product Bar
        When User click on home button from navigation breadcrumb
        Then User should see Home Page




