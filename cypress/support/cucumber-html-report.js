const report = require("../../node_modules/multiple-cucumber-html-reporter");
report.generate({
    jsonDir: "cypress/reports/UIReports/cucumber-json", 
    reportPath: "cypress/reports/UIReports/cucumber-html-report",
    reportName: "UI Automation Report",
    pageTitle: "UI Automation Report",
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: true,
    screenshotsDir:"cypress/reports/UIReports/screenshots",
    metadata: {
        browser: {
            name: "chrome",
            version: "97",
        },
        device: "Local test machine",
        platform: {
            name: "Windows",
            version: "10",
        },
    },
});