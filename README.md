# cypress automation

Cypress is a next generation api and front end testing tool built for the modern web. This is a sample project which you can use to start your E2E testing with Cypress.
remotes/origin_github/main

Installation
------------
1. Install node from https://nodejs.org/en/download/.

2. Use `npm` package manager

		npm install


Usage
-----
To run UI Test which is under cypress/test/uitest.
		
	npm run ui-test
	
	For Headless Mode, use below command.
	npm run ui-test:headless

To run API Test which is under cypress/test/apitest.		
		
	npm run api-test



Project Information
-------------------
There are different folder for different purpose here.
1. **config**      :- This will be used to set configuration for UI & API test individually.

			apiconfig.json - all required configurations for api automation are added under this file. 
			uiconfig.json  - all required configurations for ui automation are added under this file.
3. **fixtures**    :- This will be used to add required test data files.
4. **Reports**     :- After execution of UI or API test, report will get generate under Reports -> APIReports or Report -> UIReports respectively. There will be one file with ExecutionReport.html to see result in HTML format. It generates from result json data.
4. **screenshots** :- All failure screenshots will get generated here.
5. **support**     :- This folder will be used to set global configuration and great place to put behavior that modifies Cypress under support/index.js
6. **test**        :- All test will be taken care from this location. Use apitest folder for adding api test cases in TDD Way, uitest folder for adding ui test cases in BDD way.
7. **Videos**      :- All feature execution vidoes gets generated here if Vidoes flag set to true in config/apiconfig.json or config/uiconfig.json. 
