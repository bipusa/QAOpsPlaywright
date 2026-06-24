const {test, expect} = require('@playwright/test')

test("Popup validations", async({page}) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    //await page.goto('https://google.com');
    //await page.goBack();
    //await page.goForward();
    await expect(page.locator('#displayed-text')).toBeVisible();
    await page.locator('#hide-textbox').click();
    await expect(page.locator('#displayed-text')).toBeHidden();
    await page.pause();
    await page.locator('#confirmbtn').click();
    await page.on('dialog', dialog => dialog.accept());   //java popup i.e. when there is no html or css locator for the popup events
    await page.locator('#mousehover').hover();
    //switching to child frame located within the main page or frame
    const framepage = page.frameLocator('#courses-iframe');
    await framepage.locator("li a[href*='lifetime-access']:visible").click();
    const textcheck = await framepage.locator('.text h2').textContent();
    console.log(textcheck.split(' ')[1]);


})

test("Screenshot and visual comparison", async({page}) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    //await page.goto('https://google.com');
    //await page.goBack();
    //await page.goForward();
    await expect(page.locator('#displayed-text')).toBeVisible();
    await page.locator('#displayed-text').screenshot({path: "Elementlabelscreenshot.png"});
    await page.locator('#hide-textbox').click();
    await page.screenshot({path: "Screeshot.png"});
    await expect(page.locator('#displayed-text')).toBeHidden();

})

test.skip('visual UI page comparison', async({page}) => {
    await page.goto('https://www.google.com/');
    expect (await page.screenshot()).toMatchSnapshot('landing.png');








})