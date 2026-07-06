const {test, expect} = require('@playwright/test');

test('@Web Browser Context Playwright Test',  async ({browser}) => 
{
    //chrome - plugins, cookies
    const context = await browser.newContext();
    const page = await context.newPage();
    const UserName = page.locator('#username');
    const SignIn = page.locator('#signInBtn');
    const cardTitles = page.locator('.card-title a');
    await page.goto("https://rahulshettyacademy.com/loginpagePractise");
    console.log(await page.title()); 
    //css
    await page.locator('#username').fill("rahulshetty");
    //await page.locator ('#userEmail').fill("thapa.bipusa@outlook.com");
    await page.locator("[type='password']").fill("Learning@830$3mK2");
    //await page.locator('#userPassword').fill("Test@practise0");
    await page.locator('#signInBtn').click();
    //await page.locator('#login').click();
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText('Incorrect') //partial string is enough to compare
    await UserName.fill("");    //For edit purpose, erasing the existing data
    await UserName.fill("rahulshettyacademy");
    await SignIn.click();
    console.log(await page.locator('.card-title a').first().textContent());
    console.log(await page.locator('.card-title a').nth(1).textContent());
    const allTitles = await cardTitles.allTextContents();
    console.log(allTitles);

});

test('@Web UI Control',  async ({page}) => 
{
 
    await page.goto("https://rahulshettyacademy.com/loginpagePractise");
    //get title - assertion
    //console.log(await page.title());   //provides output in the console
    //await expect(page).toHaveTitle("Google");  //assertion
    const UserName = page.locator('#username');
    const SignIn = page.locator('#signInBtn');
    await page.locator('select.form-control').selectOption('consult');
    await page.locator('.radiotextsty').nth(1).click();
    await page.locator('#okayBtn').click();
    await expect(page.locator('.radiotextsty').nth(1)).toBeChecked();
    await page.locator('#terms').click();
    await expect(page.locator('#terms')).toBeChecked();
    await page.locator('#terms').uncheck();
    //await expect (await page.locator('#terms').isChecked()).toBeFalsy();
    await expect (page.locator('#terms')).not.toBeChecked();
    await expect(page.locator("[href*='documents-request']")).toHaveAttribute('class', 'blinkingText');
    //await page.pause();
    
});

test('Child window handling', async({browser}) =>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise");

    const [newPage] = await Promise.all([
        context.waitForEvent('page'),    //listen for any new page pending, fulfilled or rejected
        page.locator("[href*='documents-request']").click(),
    ])                                      // new page is opened

    const text = await newPage.locator('.red').textContent();
    const arrayText = text.split('@');
    const domain = arrayText[1].split(' ')[0];
    //console.log(domain);
    await page.locator('#username').fill(domain);
    
    console.log(await page.locator('#username').inputValue());


    








})




