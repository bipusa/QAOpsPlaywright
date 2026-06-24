# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ClientAppPOM.spec.js >> Test with Custom Fixture
- Location: tests\ClientAppPOM.spec.js:40:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('text=Checkout')
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 10000ms
  - waiting for locator('text=Checkout')

```

```yaml
- navigation:
  - link "Automation Automation Practice":
    - /url: ""
    - heading "Automation" [level=3]
    - paragraph: Automation Practice
  - link "Get Shortlisted by Recruiters - Take QA Skill Assessments on TechSmartHire":
    - /url: https://techsmarthire.com/
  - list:
    - listitem:
      - button " HOME"
    - listitem
    - listitem:
      - button " ORDERS"
    - listitem:
      - button " Cart"
    - listitem:
      - button "Sign Out"
- heading "My Cart" [level=1]
- button "Continue Shopping❯"
- heading "No Products in Your Cart !" [level=1]
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
> 15 |         await expect(this.checkout).toBeVisible({ timeout: 10000 });
     |                                     ^ Error: expect(locator).toBeVisible() failed
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
  39 |         return this.orderId.textContent();
  40 |       
  41 |     }
  42 | 
  43 | }
  44 | 
  45 | module.exports = {CheckoutPage};
```