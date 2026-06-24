
const { LoginPage } = require('../PageObject/LoginPage');
const { DashboardPage } = require('../PageObject/DashboardPage');
const { CheckoutPage } = require('../PageObject/CheckoutPage');
const { OrdersPage } = require('../PageObject/OrdersPage');
class POManager {
    constructor(page) {
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