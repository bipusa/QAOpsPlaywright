const {test, expect} = require('@playwright/test');

test('Playwright specific locators practice',  async ({page}) => 
{
    await page.goto("https://rahulshettyacademy.com/angularpractice/");
    await page.getByLabel('Check me out if you Love IceCreams!').click(); // any text that has tag label in console inspection
    await page.getByLabel('Employed').check();
    await page.getByLabel('Gender').selectOption('Female');
    await page.getByPlaceholder('Password').fill('ABC123');
    await page.getByRole('button', {name: 'Submit'}).click();
    const result = await page.getByText('Success! The Form has been submitted successfully!.').isVisible();
    expect(result).toBeTruthy();
    console.log(result);
    await page.getByRole('link', {name: "Shop"}).click();
    await page.locator('app-card-list').textContent();
    await page.locator('app-card').filter({hasText : 'Nokia Edge'}).getByRole('button').click();








})