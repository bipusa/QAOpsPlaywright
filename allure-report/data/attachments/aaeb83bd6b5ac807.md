# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ClientAppPOM.spec.js >> Client App login ADIDAS ORIGINAL
- Location: tests\ClientAppPOM.spec.js:9:1

# Error details

```
Error: locator.textContent: Error: strict mode violation: locator('label.ng-star-inserted') resolved to 2 elements:
    1) <label _ngcontent-djr-c39="" class="ng-star-inserted"> | 6a3bc1f0378febeacdc9b4d4 | </label> aka getByText('| 6a3bc1f0378febeacdc9b4d4 |')
    2) <label _ngcontent-djr-c39="" class="ng-star-inserted"> | 6a3bc1f0378febeacdc9b4d7 | </label> aka getByText('| 6a3bc1f0378febeacdc9b4d7 |')

Call log:
  - waiting for locator('label.ng-star-inserted')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e3]:
    - navigation [ref=e5]:
      - generic [ref=e7]:
        - link "Automation Automation Practice":
          - /url: ""
          - generic [ref=e8] [cursor=pointer]:
            - heading "Automation" [level=3] [ref=e9]
            - paragraph [ref=e10]: Automation Practice
      - text: 
      - link "Get Shortlisted by Recruiters - Take QA Skill Assessments on TechSmartHire" [ref=e11] [cursor=pointer]:
        - /url: https://techsmarthire.com/
      - list [ref=e12]:
        - listitem [ref=e13] [cursor=pointer]:
          - button " HOME" [ref=e14]:
            - generic [ref=e15]: 
            - text: HOME
        - listitem
        - listitem [ref=e16] [cursor=pointer]:
          - button " ORDERS" [ref=e17]:
            - generic [ref=e18]: 
            - text: ORDERS
        - listitem [ref=e19] [cursor=pointer]:
          - button " Cart" [ref=e20]:
            - generic [ref=e21]: 
            - text: Cart
        - listitem [ref=e22] [cursor=pointer]:
          - button "Sign Out" [ref=e23]:
            - generic [ref=e24]: 
            - text: Sign Out
    - table [ref=e26]:
      - rowgroup [ref=e27]:
        - 'row "Thankyou for the order. You can see all the Orders in Orders History Page | 6a3bc1f0378febeacdc9b4d4 | | 6a3bc1f0378febeacdc9b4d7 | Queen ZARA COAT 3 Qty: 1 $ 11500 Ready to Ship Queen ADIDAS ORIGINAL Qty: 1 $ 11500 Ready to Ship Items in your order may ship separately. View your order for shipping updates. Click To Download Order Details in CSV Questions? We''re on call. Monday to Friday 9am - 9pm Saturday to Sunday 10am - 6pm dummywebsite@rahulshettyacademy.com" [ref=e28]':
          - 'cell "Thankyou for the order. You can see all the Orders in Orders History Page | 6a3bc1f0378febeacdc9b4d4 | | 6a3bc1f0378febeacdc9b4d7 | Queen ZARA COAT 3 Qty: 1 $ 11500 Ready to Ship Queen ADIDAS ORIGINAL Qty: 1 $ 11500 Ready to Ship Items in your order may ship separately. View your order for shipping updates. Click To Download Order Details in CSV Questions? We''re on call. Monday to Friday 9am - 9pm Saturday to Sunday 10am - 6pm dummywebsite@rahulshettyacademy.com" [ref=e29]':
            - table [ref=e30]:
              - rowgroup [ref=e31]:
                - row [ref=e32]:
                  - cell [ref=e33]
                - row [ref=e34]:
                  - cell [ref=e35]
                - row [ref=e36]:
                  - cell [ref=e37]
                - row "Thankyou for the order. You can see all the Orders in Orders History Page | 6a3bc1f0378febeacdc9b4d4 | | 6a3bc1f0378febeacdc9b4d7 |" [ref=e38]:
                  - cell "Thankyou for the order. You can see all the Orders in Orders History Page | 6a3bc1f0378febeacdc9b4d4 | | 6a3bc1f0378febeacdc9b4d7 |" [ref=e39]:
                    - table [ref=e40]:
                      - rowgroup [ref=e41]:
                        - row "Thankyou for the order. You can see all the Orders in Orders History Page | 6a3bc1f0378febeacdc9b4d4 | | 6a3bc1f0378febeacdc9b4d7 |" [ref=e42]:
                          - cell "Thankyou for the order. You can see all the Orders in Orders History Page | 6a3bc1f0378febeacdc9b4d4 | | 6a3bc1f0378febeacdc9b4d7 |" [ref=e43]:
                            - table [ref=e44]:
                              - rowgroup [ref=e45]:
                                - row "Thankyou for the order." [ref=e46]:
                                  - cell "Thankyou for the order." [ref=e47]:
                                    - heading "Thankyou for the order." [level=1] [ref=e48]
                                - row "You can see all the Orders in Orders History Page" [ref=e49]:
                                  - cell "You can see all the Orders in Orders History Page" [ref=e50]:
                                    - text: You can see all the Orders in
                                    - generic [ref=e51] [cursor=pointer]: Orders History Page
                                - row "| 6a3bc1f0378febeacdc9b4d4 | | 6a3bc1f0378febeacdc9b4d7 |" [ref=e52]:
                                  - cell "| 6a3bc1f0378febeacdc9b4d4 | | 6a3bc1f0378febeacdc9b4d7 |" [ref=e53]:
                                    - generic [ref=e54]: "| 6a3bc1f0378febeacdc9b4d4 |"
                                    - generic [ref=e55]: "| 6a3bc1f0378febeacdc9b4d7 |"
                - row [ref=e56]:
                  - cell [ref=e57]
                - 'row "Queen ZARA COAT 3 Qty: 1 $ 11500 Ready to Ship Queen ADIDAS ORIGINAL Qty: 1 $ 11500 Ready to Ship Items in your order may ship separately. View your order for shipping updates. Click To Download Order Details in CSV" [ref=e58]':
                  - 'cell "Queen ZARA COAT 3 Qty: 1 $ 11500 Ready to Ship Queen ADIDAS ORIGINAL Qty: 1 $ 11500 Ready to Ship Items in your order may ship separately. View your order for shipping updates. Click To Download Order Details in CSV" [ref=e59]':
                    - table [ref=e60]:
                      - rowgroup [ref=e61]:
                        - row [ref=e62]:
                          - cell [ref=e63]
                        - generic [ref=e64]:
                          - 'row "Queen ZARA COAT 3 Qty: 1 $ 11500 Ready to Ship" [ref=e65]':
                            - cell "Queen" [ref=e66]:
                              - img "Queen" [ref=e67]
                            - 'cell "ZARA COAT 3 Qty: 1" [ref=e68]':
                              - generic [ref=e69]: ZARA COAT 3
                              - generic [ref=e70]: "Qty: 1"
                            - cell "$ 11500 Ready to Ship" [ref=e71]:
                              - generic [ref=e72]: $ 11500
                              - strong [ref=e74]: Ready to Ship
                          - 'row "Queen ADIDAS ORIGINAL Qty: 1 $ 11500 Ready to Ship" [ref=e75]':
                            - cell "Queen" [ref=e76]:
                              - img "Queen" [ref=e77]
                            - 'cell "ADIDAS ORIGINAL Qty: 1" [ref=e78]':
                              - generic [ref=e79]: ADIDAS ORIGINAL
                              - generic [ref=e80]: "Qty: 1"
                            - cell "$ 11500 Ready to Ship" [ref=e81]:
                              - generic [ref=e82]: $ 11500
                              - strong [ref=e84]: Ready to Ship
                        - row "Items in your order may ship separately. View your order for shipping updates." [ref=e85]:
                          - cell "Items in your order may ship separately. View your order for shipping updates." [ref=e86]:
                            - text: Items in your order may ship separately.
                            - text: View your order for shipping updates.
                        - row "Click To Download Order Details in CSV" [ref=e87]:
                          - button "Click To Download Order Details in CSV" [ref=e88] [cursor=pointer]
                - row [ref=e89]:
                  - cell [ref=e90]
                - row "Questions? We're on call. Monday to Friday 9am - 9pm Saturday to Sunday 10am - 6pm dummywebsite@rahulshettyacademy.com" [ref=e91]:
                  - cell "Questions? We're on call. Monday to Friday 9am - 9pm Saturday to Sunday 10am - 6pm dummywebsite@rahulshettyacademy.com" [ref=e92]:
                    - table [ref=e93]:
                      - rowgroup [ref=e94]:
                        - row [ref=e95]:
                          - cell [ref=e96]
                        - row "Questions? We're on call." [ref=e97]:
                          - cell "Questions? We're on call." [ref=e98]
                        - row "Monday to Friday 9am - 9pm" [ref=e99]:
                          - cell "Monday to Friday 9am - 9pm" [ref=e100]
                        - row "Saturday to Sunday 10am - 6pm" [ref=e101]:
                          - cell "Saturday to Sunday 10am - 6pm" [ref=e102]
                        - row "dummywebsite@rahulshettyacademy.com" [ref=e103]:
                          - cell "dummywebsite@rahulshettyacademy.com" [ref=e104]: dummywebsite@rahulshettyacademy.com
                        - row [ref=e105]:
                          - cell [ref=e106]
                - row [ref=e107]:
                  - cell [ref=e108]
                - row
  - generic "Order Placed Successfully" [ref=e110] [cursor=pointer]
```

# Test source

```ts
  1  | import { expect } from '@playwright/test';
  2  | class CheckoutPage {
  3  |     constructor(page) {
  4  |         this.checkout = page.locator("text=Checkout");
  5  |         this.selectCountryField = page.getByPlaceholder('Select Country');
  6  |         this.dropdown = page.locator('.ta-results');
  7  |         this.email = page.locator('.user__name label');
  8  |         this.button = page.locator('.btnn');
  9  |         this.orderplacedtext = page.locator('.hero-primary');
  10 |         this.orderId= page.locator('label.ng-star-inserted');
  11 | 
  12 |     }
  13 | 
  14 |     async gotToCheckoutPage(username) {
  15 |         await expect(this.checkout).toBeVisible({ timeout: 10000 });
  16 | 
  17 |         await this.checkout.click();
  18 |         await this.selectCountryField.pressSequentially('Ind', { delay: 150 });
  19 |         await this.dropdown.waitFor();
  20 |         const optionsCount = await this.dropdown.locator('button').count();
  21 |         for (let i = 0; i < optionsCount; ++i) {
  22 |             const text = await this.dropdown.locator('button').nth(i).textContent();
  23 |             if (text === ' India') {
  24 |                 await this.dropdown.locator("button").nth(i).click();
  25 |                 break;
  26 | 
  27 |             }
  28 | 
  29 |         }
  30 |         await expect(this.email).toHaveText(username);
  31 |         await this.button.click();
  32 | 
  33 |     }
  34 |     async getSuccessMessage () {
  35 |         return this.orderplacedtext.textContent();
  36 |     }
  37 | 
  38 |     async getOrderID () {
> 39 |         return this.orderId.textContent();
     |                             ^ Error: locator.textContent: Error: strict mode violation: locator('label.ng-star-inserted') resolved to 2 elements:
  40 |       
  41 |     }
  42 | 
  43 | }
  44 | 
  45 | module.exports = {CheckoutPage};
```