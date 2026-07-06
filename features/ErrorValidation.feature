Feature: Ecommerce login validation
@validation
  Scenario Outline: This is called parameterizing the test scenarios described below
    Given a login to Ecommerce2 application with "<username>" and "<password>"

    Then Verify error message is displayed

    Examples:
      | username                 | password       |
      | thapa.bipusa@outlook.com | Test@practise0 |
      | hello@123.com            | Wrongpassword  |