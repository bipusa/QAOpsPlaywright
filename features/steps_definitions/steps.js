const { Given, When, Then } = require('@cucumber/cucumber');
const { expect, chromium } = require('@playwright/test');
const { POManager } = require('../../PageObject/POManager');

Given('a login to Ecommerce application with {string} and {string}', { timeout: 100 * 1000 }, async function (username, password) {


    this.username = username;
    const loginPage = this.poManager.getLoginPage();
    await loginPage.goTo();
    await loginPage.validLogin(username, password);
});

When('Add {string} to Cart', async function (productName) {

    const dashboardPage = this.poManager.getDashboardPage();
    await dashboardPage.searchProductAddCart(productName);
    await dashboardPage.navigateToCart();
});

Then('Verify {string} is displayed in the Cart', { timeout: 100 * 1000 }, async function (productName) {


    const cartPage = this.poManager.getCartPage();
    await cartPage.verifyProductInCart(productName);
    await cartPage.goToCheckout();



});




When('Enter valid details and Place the Order', { timeout: 100 * 1000 }, async function () {

    const checkoutPage = this.poManager.getCheckoutPage();
    await checkoutPage.gotoCheckoutPage(this.username);
    await checkoutPage.placeOrder();
    await checkoutPage.getSuccessMessage();


});




Then('Verify order is present in OrderHistory', { timeout: 100 * 1000 }, async function () {
    await expect(msg.trim()).toBe('Thankyou for the order.');
    this.orderId = await checkoutPage.getOrderID();
    await expect(this.orderId).toBeTruthy();

    const ordersPage = this.poManager.getOrdersPage();

    await ordersPage.verifyOrderDetails(this.orderId);

    const orderText = await ordersPage.getOrderDetails();

    await expect(this.orderId.includes(orderText)).toBeTruthy();
});

Given('a login to Ecommerce2 application with {string} and {string}', async function (username, password) {
    //const UserName = this.page.locator('#username');
    //const SignIn = this.page.locator('#signInBtn');
    //const cardTitles = page.locator('.card-title a');
    await this.page.goto("https://rahulshettyacademy.com/loginpagePractise");
    console.log(await this.page.title());
    //css
    await this.page.locator('#username').fill(username);
    //await page.locator ('#userEmail').fill("thapa.bipusa@outlook.com");
    await this.page.locator("[type='password']").fill(password);
    //await page.locator('#userPassword').fill("Test@practise0");
    await this.page.locator('#signInBtn').click();
});

Then('Verify error message is displayed', async function () {
    console.log(await this.page.locator("[style*='block']").textContent());
    await expect(this.page.locator("[style*='block']")).toContainText('Incorrect')

});