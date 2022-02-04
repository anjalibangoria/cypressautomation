Feature: shopping cart

    Background: Navigate to Cart page
        Given User navigate to homepage
        When User click on "Shopping Cart" menu from topbar

    ####This scenario has covered "Add to cart" feature with two products and verify cart quantity as guest user ###
    @regression
    Scenario: Verify add to cart as guest user
        When User enter "iMac" in searchbox and click on search icon
        Then User should see products with name contains "iMac"
        When User click on add to cart button of "1" product from search page
        Then User should see success message "You have added" on search page
        Then User should see cart with "1" items at top of search page
        When User click on "Shopping Cart" menu from topbar
        Then User should see "1" items in cart
        When User enter "Tab" in searchbox and click on search icon
        Then User should see products with name contains "Tab"
        When User click on add to cart button of "1" product from search page
        Then User should see success message "You have added" on search page
        Then User should see cart with "2" items at top of search page
        When User click on "Shopping Cart" menu from topbar
        Then User should see "2" items in cart

    ####This scenario has covered modify cart quantity and verify quantity as guest user ###
    @regression
    Scenario: Verify modify quantity in cart as guest user
        When User enter "iMac" in searchbox and click on search icon
        When User click on add to cart button of "1" product from search page
        When User click on "Shopping Cart" menu from topbar
        Then User should see "1" items in cart
        Then User should see "iMac" with "1" quantity on cart page
        When User edit quantity of "iMac" to "2"
        Then User should see success message "You have modified your shopping cart" on cart page
        Then User should see "iMac" with "2" quantity on cart page
        When User edit quantity of "iMac" to "two"
        Then User should see "iMac" with "2" quantity on cart page


    ####This scenario has covered remove from cart and verify empty card feature as guest user ###
    @regression
    Scenario: Verify remove from cart as guest user
        When User enter "Tab" in searchbox and click on search icon
        When User click on add to cart button of "1" product from search page
        When User click on "Shopping Cart" menu from topbar
        Then User should see "1" items in cart
        Then User should see total of "1" product
        When User remove product "Tab" from cart
        Then User should see cart is empty




