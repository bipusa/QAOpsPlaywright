const { test, expect } = require('@playwright/test');
const {customtest} = require('../utils/ClientAppPOMcustomfixturefortestdata');
const { POManager } = require('../PageObject/POManager');  //Page Object manager : creates page object and returns them
const dataset = JSON.parse(JSON.stringify(require("../utils/ClientAppPOMTestDate.json")));

for(const data of dataset)
{

test(`Client App login ${data.productname}`, async ({ page }) => {
    // const username = 'thapa.bipusa@outlook.com';

    const poManager = new POManager(page);

    const loginPage = poManager.getLoginPage();
    await loginPage.goTo();
    await loginPage.validLogin(data.username, data.password);

    const dashboardPage = poManager.getDashboardPage();
    await dashboardPage.searchProductAddCart(data.productname);
    await dashboardPage.navigateToCart();

    const checkoutPage = poManager.getCheckoutPage();
    await checkoutPage.gotToCheckoutPage(data.username);

    const orderId = await checkoutPage.getOrderID();

    expect(orderId).toBeTruthy();

    const ordersPage = poManager.getOrdersPage();

    //await ordersPage.goToOrdersPage();
    await ordersPage.verifyOrderDetails(orderId);

    const orderDetailsText = await ordersPage.getOrderDetails();

    expect(orderId.includes(orderDetailsText)).toBeTruthy();
});
}

customtest('Test with Custom Fixture', async ({ page, testDataForOrder }) => {
    // const username = 'thapa.bipusa@outlook.com';

    const poManager = new POManager(page);

    const loginPage = poManager.getLoginPage();
    await loginPage.goTo();
    await loginPage.validLogin(testDataForOrder.username, testDataForOrder.password);

    const dashboardPage = poManager.getDashboardPage();
    await dashboardPage.searchProductAddCart(testDataForOrder.productname);
    await dashboardPage.navigateToCart();

    const checkoutPage = poManager.getCheckoutPage();
    await checkoutPage.gotToCheckoutPage(testDataForOrder.username);

    const orderId = await checkoutPage.getOrderID();

    expect(orderId).toBeTruthy();

    // const ordersPage = poManager.getOrdersPage();

    // //await ordersPage.goToOrdersPage();
    // await ordersPage.verifyOrderDetails(orderId);

    // const orderDetailsText = await ordersPage.getOrderDetails();

    // expect(orderId.includes(orderDetailsText)).toBeTruthy();
});
