Feature: Placing order in Ecommerce application
@Regression //tags 
Scenario: Place order and verify in Order History

  Given a login to Ecommerce application with "thapa.bipusa@outlook.com" and "Test@practise0"

  When Add "ZARA COAT 3" to Cart

  Then Verify "ZARA COAT 3" is displayed in the Cart

  When Enter valid details and Place the Order
 
  Then Verify order is present in OrderHistory