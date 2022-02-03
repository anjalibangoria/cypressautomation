class LoginPage {

    email = "#input-email"
    password = "#input-password"
    loginBtn = "input[value=Login i]"

    /**
     * This will login based on user type which is mention under "fixtures" folder in "LoginCredentials.json"
     * @param {*} userType 
     */
    loginBasedOnUserType(userType) {

        //read credential json file and then alias it
        cy.fixture('testData/LoginCredentials.json').as('loginCredentials');

        //Use alias and identify the object which matched to the information passed from feature file
        cy.get('@loginCredentials').then((user) => {

            // Find the object corresponding to UserType passed in
            var data = user.filter(item => (item.UserType == userType));

            //enter email and password
            cy.get(this.email).clear().type(data[0].Email);
            cy.get(this.password).clear().type(data[0].Password, { log: false });
        });

    }

    /**
     * This will click on Login button
     * @returns 
     */
    login() {
        cy.get(this.loginBtn).click();
        return this;
    }
}

export default LoginPage