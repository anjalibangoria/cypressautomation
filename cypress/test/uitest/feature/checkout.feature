Feature: Checkout

    ####This scenario will wrok for find product, add to cart, checkout product as guest and comfirm order###
    @regression
    Scenario: Verify checkout as guest user
        Given User navigate to homepage
        When User enter "HP LP" in searchbox and click on search icon
        Then User should see products with name contains "HP LP"
        When User select "1" product
        When User click on add to cart button of "1" product from product details page
        When User click on "Shopping Cart" menu from topbar
        Then User should see cart amount of "HP LP" product and total amount are same
        When User click on Checkout Button from cart page
        When User click on Guest Checkout button
        When User enter first name as "testfirstname" last name as "testlastname" email as "anjalidemo@gmail.com" telephone as "9989898988" address as "pune" city as "pune" post code as "410022" country as "India" region as "Maharashtra"
        When User select "Flat Shipping Rate" as Delivery Method
        When User select "Cash On Delivery" as Payment Method
        When User select Terms & condition checkbox under Payment Method
        When User click on Continue button of Payment Method
        Then User see total order amount under confirm order
        When User click on Confirm Order button under Confirm Order
        Then User should see success message "Your order has been placed" on Checkout Page





