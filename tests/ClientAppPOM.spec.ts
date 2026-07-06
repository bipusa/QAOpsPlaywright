
import {test, expect} from '@playwright/test'
import { customtest } from '../utils_ts/ClientAppPOMcustomfixturefortestdata';
import {POManager} from '../PageObject_ts/PageObject_ts/POManager'; //Page Object manager : creates page object and returns them
const dataset = JSON.parse(JSON.stringify(require("../utils_ts/ClientAppPOMTestData.json")));
//import dataset from "../utils/ClientAppPOMTestData.json";
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
    await checkoutPage.gotoCheckoutPage(data.username);

    const orderId: any = await checkoutPage.getOrderID();

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
    await checkoutPage.gotoCheckoutPage(testDataForOrder.username);

    const orderId = await checkoutPage.getOrderID();

    expect(orderId).toBeTruthy();

    // const ordersPage = poManager.getOrdersPage();

    // //await ordersPage.goToOrdersPage();
    // await ordersPage.verifyOrderDetails(orderId);

    // const orderDetailsText = await ordersPage.getOrderDetails();

    // expect(orderId.includes(orderDetailsText)).toBeTruthy();
});
