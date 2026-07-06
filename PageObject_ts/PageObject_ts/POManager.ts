
import { LoginPage } from '../PageObject_ts/LoginPage';
import { DashboardPage } from '../PageObject_ts/DashboardPage';
import { CheckoutPage } from '../PageObject_ts/CheckoutPage';
import { OrdersPage }  from '../PageObject_ts/OrdersPage';
import { Page } from '@playwright/test';
export class POManager {
    page: Page;  
    loginPage: LoginPage;   //datatype is class object therefore LoginPage class name is defined as datatype
    dashboardPage: DashboardPage;
    checkoutPage: CheckoutPage;
    ordersPage: OrdersPage;

    constructor(page: Page) {
        this.page = page;

        this.loginPage = new LoginPage(page);
        this.dashboardPage = new DashboardPage(page);
        this.checkoutPage = new CheckoutPage(page);
        this.ordersPage = new OrdersPage(page);
    }

    getLoginPage() {
        return this.loginPage;
    }

    getDashboardPage() {
        return this.dashboardPage;
    }

    getCheckoutPage() {
        return this.checkoutPage;
    }

    getOrdersPage() {
        return this.ordersPage;
    }
}

module.exports = { POManager };