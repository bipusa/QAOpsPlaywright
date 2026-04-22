const {test, expect, } = require('@playwright/test');
let webcontext;

test.beforeAll( async({browser}) => 
{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto ("https://rahulshettyacademy.com/client");
    await page.locator('#userEmail').fill('thapa.bipusa@outlook.com');
    await page.locator('#userPassword').fill('Test@practise0');
    await page.locator('#login').click();
    await page.waitForLoadState('networkidle');   //since alltextcontents method is asynchronous, i.e playwright does not wait for this method
    await context.storageState({path: 'state.json'});
    webcontext = await browser.newContext({storageState: 'state.json'});

})



test('Browser Context Playwright Test',  async () => 
{

    const page = await webcontext.newPage();
    await page.goto ("https://rahulshettyacademy.com/client");
    const products = page.locator(".card-body");          //list of products name in array
    const ProductName = 'ZARA COAT 3';
    const email = 'thapa.bipusa@outlook.com';
        
    await page.locator('.card-body b').first().waitFor(); 
    const Titles = await page.locator('.card-body b').allTextContents();
    console.log(Titles);
    const count = await products.count();
    for (let i =0; i < count; ++i)
    {
        if  ( await products.nth(i).locator("b").textContent() === ProductName)
        {
            await products.nth(i).locator("text= Add To Cart").click();
            break;
        }
    }
    await page.locator("[routerlink*='cart']").click();
    await page.locator('div li').first().waitFor();
    const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
    expect(bool).toBeTruthy();

    await page.locator("text=Checkout").click();

    await page.getByPlaceholder('Select Country').pressSequentially('Ind', { delay: 150 });
    const dropdown = page.locator('.ta-results');
    await dropdown.waitFor();
    const optionsCount = await dropdown.locator('button').count();
    for (let i= 0; i < optionsCount; ++i )
    {
        const text = await dropdown.locator('button').nth(i).textContent();
        if (text === ' India')
        {
            await dropdown.locator("button").nth(i).click();
            break;

        }
        
    }
    await expect(page.locator('.user__name label')).toHaveText(email);
    await page.locator('.btnn').click();
    await expect(page.locator('.hero-primary')).toHaveText(' Thankyou for the order. ');
    const orderID =  await page.locator('label.ng-star-inserted').textContent();
    //console.log(orderID);

   await page.locator("button[routerlink*='myorders']").click();
   await page.locator("tbody").waitFor();
   const rows = await page.locator("tbody tr");
 
 
   for (let i = 0; i < await rows.count(); ++i) {
      const rowOrderId = await rows.nth(i).locator("th").textContent();
      if (orderID.includes(rowOrderId)) {
         await rows.nth(i).locator("button").first().click();
         break;
      }
   }
   const orderIdDetails = await page.locator(".col-text").textContent();
   expect(orderID.includes(orderIdDetails)).toBeTruthy();
 
});

test('Test Case 2',  async () => 
{

    const page = await webcontext.newPage();
    await page.goto ("https://rahulshettyacademy.com/client");
    const products = page.locator(".card-body");          //list of products name in array
    const ProductName = 'ZARA COAT 3';
    const email = 'thapa.bipusa@outlook.com';
        
    await page.locator('.card-body b').first().waitFor(); 
    const Titles = await page.locator('.card-body b').allTextContents();
    console.log(Titles);

});
    







        

