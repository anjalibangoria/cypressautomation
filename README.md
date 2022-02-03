# cypressautomation

Cypress is a next generation api and front end testing tool built for the modern web. This is a sample project which you can use to start your E2E testing with Cypress.
remotes/origin_github/main

Use below command to run UI Test which is under cypress/test/uitest.
**npm run ui-test**

Use below command to run UI Test which is under cypress/test/apitest.
**npm run api-test**

There are different folder for different purpose here.
1. **config**      :- This will be used to set configuration for UI & API test individually. apiconfig.json
	 -> apiconfig.json - all required configurations for api automation are added under this file.
	 -> uiconfig.json  - all required configurations for ui automation are added under this file.
2. **fixtures**    :- This will be used to add required test data files.
3. **Reports**     :- After execution of UI or API test, report will get generate under Reports -> APIReports or Report -> UIReports respectively.
											-> Under APIReports There will be one file with name ExecutionReport.html to see result in html format. It generates html from result json data.
                  		-> Under APIReports There will be one file with name cucumber-html-report/UIExecutionReport.html to see result in html format. It generates html from results 
											
											json data.
4. **screenshots** :- All failure screenshots will get generated here.
5. **support**     :- This folder will be used to set global configuration and great place to put behavior that modifies Cypress under support/index.js
6. **test**        :- All test will be taken care from this location. 
                      For API test, use apitest folder.
                      For UI test, use uitest folder.
7. **Videos**      :- All feature execution vidoes gets generated here if Vidoes flag set to true in config/apiconfig.json or config/uiconfig.json. By Default here it is set it to                       true.
