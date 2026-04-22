const {test, expect} = require('@playwright/test');

test('Browser Context Playwright Test',  async ({page}) => 
{
    //chrome - plugins, cookies
    const products = page.locator(".card-body");          //list of products name in array
    const ProductName = 'ZARA COAT 3';
    const email = 'thapa.bipusa@outlook.com';
    await page.goto ("https://rahulshettyacademy.com/client");
    await page.getByPlaceholder('email@example.com').fill('thapa.bipusa@outlook.com');
    await page.getByPlaceholder('enter your passsword').fill('Test@practise0');
    await page.getByRole('button', {name: 'Login'}).click();

    await page.waitForLoadState('networkidle');   //since alltextcontents method is asynchronous, i.e playwright does not wait for this method
    await page.locator('.card-body b').first().waitFor(); 
    await page.locator('.card-body').filter({hasText: "ZARA COAT 3"}).getByRole('button', {name: 'Add to Cart'}).click();
    await page.getByRole('listitem').getByRole('button', {name: 'Cart'}).click();
    
    await page.locator('div li').first().waitFor();
    const bool = await expect(page.getByText('ZARA COAT 3')).toBeVisible();
    console.log(bool);
    await page.getByText('Checkout').click();

    
    await page.getByPlaceholder('Select Country').pressSequentially('Ind', { delay: 150 });
    await page.getByRole('button', {name: 'India'}).nth(1).click();
    await page.getByText('Place Order').click();
    
    await expect(page.getByText(' Thankyou for the order. ')).toBeVisible();
    
    
});
    







        

