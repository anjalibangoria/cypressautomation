Feature: Search
    Background: Navigate to Home Page
        Given User navigate to homepage

    #### Search using search bar ####
    @regression
    Scenario: Verify search from searchbar
        Given User navigate to homepage
        When User enter "Apple" in searchbox and click on search icon
        Then User should see products with name contains "Apple"

    #### Search using criteria search box ####
    @regression
    Scenario: Verify search using criteria search
        When User enter "Samsung" in searchbox and click on search icon
        When User change search category to "Tablets"
        When User click on criteria search button
        Then User should see products with name contains "Samsung"
        When User enter "Logitech" in criteria search input box
        When User change search category to "Monitors"
        When User click on criteria search button
        Then User should see "There is no product that matches the search criteria" as product result message
        When User enter "Samsung" in criteria search input box
        When User click on criteria search button
        Then User should see products with name contains "Samsung"
        Then User should see "monitor" in caption details


    ####seach product using product description check box ####
    @regression
    Scenario: Verify search product with product description checkbox
        When User enter "Camera" in searchbox and click on search icon
        When User click select search in product descriptions checkbox
        When User click on criteria search button
        Then User should see products
        When User select "1" product
        Then User should see "Camera" in description
        When User click on home button from navigation breadcrumb
        Then User should see Home Page

    #### search product using navigation bar and verify product caption using regex
    @regression
    Scenario: Verify search using product navigation bar
        When User click on "Monitors" option from "Components" menu
        Then User should see "Display|Monitor" in caption details
        Then User should see left side panel highlighted with "Monitors"
        Then User should see total listed products count and product count from page number section are same
        Then User should see navigation hierarchy "Home, Components, Monitors" in breadcrumb
        When User click on home button from navigation breadcrumb
        Then User should see Home Page


