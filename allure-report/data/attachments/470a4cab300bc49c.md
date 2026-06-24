# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: WebAPITest2.spec.js >> Browser Context Playwright Test
- Location: tests\WebAPITest2.spec.js:20:1

# Error details

```
Error: locator.textContent: Error: strict mode violation: locator('label.ng-star-inserted') resolved to 2 elements:
    1) <label _ngcontent-vlr-c39="" class="ng-star-inserted"> | 6a3bc1f1378febeacdc9b4e5 | </label> aka getByText('| 6a3bc1f1378febeacdc9b4e5 |')
    2) <label _ngcontent-vlr-c39="" class="ng-star-inserted"> | 6a3bc1f1378febeacdc9b4e8 | </label> aka getByText('| 6a3bc1f1378febeacdc9b4e8 |')

Call log:
  - waiting for locator('label.ng-star-inserted')

```

# Page snapshot

```yaml
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
  - text:    
  - generic [ref=e25]:
    - paragraph [ref=e26]: Home | Search
    - heading "Filters" [level=4] [ref=e28]
    - generic [ref=e29]:
      - textbox "search" [ref=e31]
      - generic [ref=e32]:
        - heading "Price Range" [level=6] [ref=e33]
        - generic [ref=e34]:
          - textbox "Min Price" [ref=e36]
          - textbox "Max Price" [ref=e38]
      - generic [ref=e39]:
        - heading "Categories" [level=6] [ref=e40]
        - generic [ref=e42]: 
        - generic [ref=e43]:
          - checkbox [ref=e44]
          - generic [ref=e45]: fashion
        - generic [ref=e46]:
          - checkbox [ref=e47]
          - generic [ref=e48]: electronics
        - generic [ref=e49]:
          - checkbox [ref=e50]
          - generic [ref=e51]: household
      - generic [ref=e52]:
        - heading "Sub Categories" [level=6] [ref=e53]
        - generic [ref=e55]: 
        - generic [ref=e56]:
          - checkbox [ref=e57]
          - generic [ref=e58]: t-shirts
        - generic [ref=e59]:
          - checkbox [ref=e60]
          - generic [ref=e61]: shirts
        - generic [ref=e62]:
          - checkbox [ref=e63]
          - generic [ref=e64]: shoes
        - generic [ref=e65]:
          - checkbox [ref=e66]
          - generic [ref=e67]: mobiles
        - generic [ref=e68]:
          - checkbox [ref=e69]
          - generic [ref=e70]: laptops
      - generic [ref=e71]:
        - heading "Search For" [level=6] [ref=e72]
        - generic [ref=e74]: 
        - generic [ref=e75]:
          - checkbox [ref=e76]
          - generic [ref=e77]: men
        - generic [ref=e78]:
          - checkbox [ref=e79]
          - generic [ref=e80]: women
  - generic [ref=e81]:
    - generic [ref=e82]:
      - generic [ref=e83]:
        - generic [ref=e84]: Showing 3 results |
        - generic [ref=e85]: User can only see maximum 9 products on a page
      - generic [ref=e86]:
        - generic [ref=e88]:
          - img [ref=e89]
          - generic [ref=e90]:
            - heading "ADIDAS ORIGINAL" [level=5] [ref=e91]
            - generic [ref=e93]: $ 11500
            - button "View" [ref=e94] [cursor=pointer]:
              - generic [ref=e95]: 
              - text: View
            - button " Add To Cart" [ref=e96] [cursor=pointer]:
              - generic [ref=e97]: 
              - text: Add To Cart
        - generic [ref=e99]:
          - img [ref=e100]
          - generic [ref=e101]:
            - heading "ZARA COAT 3" [level=5] [ref=e102]
            - generic [ref=e104]: $ 11500
            - button "View" [ref=e105] [cursor=pointer]:
              - generic [ref=e106]: 
              - text: View
            - button " Add To Cart" [ref=e107] [cursor=pointer]:
              - generic [ref=e108]: 
              - text: Add To Cart
        - generic [ref=e110]:
          - img [ref=e111]
          - generic [ref=e112]:
            - heading "iphone 13 pro" [level=5] [ref=e113]
            - generic [ref=e115]: $ 55000
            - button "View" [ref=e116] [cursor=pointer]:
              - generic [ref=e117]: 
              - text: View
            - button " Add To Cart" [ref=e118] [cursor=pointer]:
              - generic [ref=e119]: 
              - text: Add To Cart
    - list "Pagination" [ref=e124]:
      - listitem [ref=e125]:
        - text: «
        - generic [ref=e126]:
          - text: Previous
          - generic [ref=e127]: page
      - listitem [ref=e128]:
        - generic [ref=e129]: You're on page
        - text: "1"
      - listitem [ref=e130]:
        - generic [ref=e131]:
          - text: Next
          - generic [ref=e132]: page
        - text: »
  - generic [ref=e133]: Design and Developed By - Kunal Sharma
```

# Test source

```ts
  1   | const {test, expect, } = require('@playwright/test');
  2   | let webcontext;
  3   | 
  4   | test.beforeAll( async({browser}) => 
  5   | {
  6   |     const context = await browser.newContext();
  7   |     const page = await context.newPage();
  8   |     await page.goto ("https://rahulshettyacademy.com/client");
  9   |     await page.locator('#userEmail').fill('thapa.bipusa@outlook.com');
  10  |     await page.locator('#userPassword').fill('Test@practise0');
  11  |     await page.locator('#login').click();
  12  |     await page.waitForLoadState('networkidle');   //since alltextcontents method is asynchronous, i.e playwright does not wait for this method
  13  |     await context.storageState({path: 'state.json'});
  14  |     webcontext = await browser.newContext({storageState: 'state.json'});
  15  | 
  16  | })
  17  | 
  18  | 
  19  | 
  20  | test('Browser Context Playwright Test',  async () => 
  21  | {
  22  | 
  23  |     const page = await webcontext.newPage();
  24  |     await page.goto ("https://rahulshettyacademy.com/client");
  25  |     const products = page.locator(".card-body");          //list of products name in array
  26  |     const ProductName = 'ZARA COAT 3';
  27  |     const email = 'thapa.bipusa@outlook.com';
  28  |         
  29  |     await page.locator('.card-body b').first().waitFor(); 
  30  |     const Titles = await page.locator('.card-body b').allTextContents();
  31  |     console.log(Titles);
  32  |     const count = await products.count();
  33  |     for (let i =0; i < count; ++i)
  34  |     {
  35  |         if  ( await products.nth(i).locator("b").textContent() === ProductName)
  36  |         {
  37  |             await products.nth(i).locator("text= Add To Cart").click();
  38  |             break;
  39  |         }
  40  |     }
  41  |     await page.locator("[routerlink*='cart']").click();
  42  |     await page.locator('div li').first().waitFor();
  43  |     const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
  44  |     expect(bool).toBeTruthy();
  45  | 
  46  |     await page.locator("text=Checkout").click();
  47  | 
  48  |     await page.getByPlaceholder('Select Country').pressSequentially('Ind', { delay: 150 });
  49  |     const dropdown = page.locator('.ta-results');
  50  |     await dropdown.waitFor();
  51  |     const optionsCount = await dropdown.locator('button').count();
  52  |     for (let i= 0; i < optionsCount; ++i )
  53  |     {
  54  |         const text = await dropdown.locator('button').nth(i).textContent();
  55  |         if (text === ' India')
  56  |         {
  57  |             await dropdown.locator("button").nth(i).click();
  58  |             break;
  59  | 
  60  |         }
  61  |         
  62  |     }
  63  |     await expect(page.locator('.user__name label')).toHaveText(email);
  64  |     await page.locator('.btnn').click();
  65  |     await expect(page.locator('.hero-primary')).toHaveText(' Thankyou for the order. ');
> 66  |     const orderID =  await page.locator('label.ng-star-inserted').textContent();
      |                                                                   ^ Error: locator.textContent: Error: strict mode violation: locator('label.ng-star-inserted') resolved to 2 elements:
  67  |     //console.log(orderID);
  68  | 
  69  |    await page.locator("button[routerlink*='myorders']").click();
  70  |    await page.locator("tbody").waitFor();
  71  |    const rows = await page.locator("tbody tr");
  72  |  
  73  |  
  74  |    for (let i = 0; i < await rows.count(); ++i) {
  75  |       const rowOrderId = await rows.nth(i).locator("th").textContent();
  76  |       if (orderID.includes(rowOrderId)) {
  77  |          await rows.nth(i).locator("button").first().click();
  78  |          break;
  79  |       }
  80  |    }
  81  |    const orderIdDetails = await page.locator(".col-text").textContent();
  82  |    expect(orderID.includes(orderIdDetails)).toBeTruthy();
  83  |  
  84  | });
  85  | 
  86  | test('Test Case 2',  async () => 
  87  | {
  88  | 
  89  |     const page = await webcontext.newPage();
  90  |     await page.goto ("https://rahulshettyacademy.com/client");
  91  |     const products = page.locator(".card-body");          //list of products name in array
  92  |     const ProductName = 'ZARA COAT 3';
  93  |     const email = 'thapa.bipusa@outlook.com';
  94  |         
  95  |     await page.locator('.card-body b').first().waitFor(); 
  96  |     const Titles = await page.locator('.card-body b').allTextContents();
  97  |     console.log(Titles);
  98  | 
  99  | });
  100 |     
  101 | 
  102 | 
  103 | 
  104 | 
  105 | 
  106 | 
  107 | 
  108 |         
  109 | 
  110 | 
```