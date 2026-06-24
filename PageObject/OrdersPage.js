class OrdersPage {
    constructor(page) {
        
        this.orderButton = page.locator("button[routerlink*='myorders']");
        this.orderPage = page.locator("tbody");
        this.orderBody = page.locator("tbody tr");
        this.orderText = page.locator(".col-text");

    }

    async verifyOrderDetails(orderID) {
        await this.orderButton.click();
        await this.orderPage.waitFor();
        const rows = await this.orderBody;


        for (let i = 0; i < await rows.count(); ++i) {
            const rowOrderId = await rows.nth(i).locator("th").textContent();
            if (orderID.includes(rowOrderId)) {
                await rows.nth(i).locator("button").first().click();
                break;
            }
        }
    }

    async getOrderDetails (){
        return this.orderText.textContent();

    }

}
module.exports = {OrdersPage};