const { expect } = require("@playwright/test");

class CheckoutPage {
    constructor(page) {
        this.page = page;
        this.selectCountryField = page.getByPlaceholder('Select Country');
        this.dropdown = page.locator('.ta-results');
        this.email = page.locator('.user__name label');
        this.placeOrderBtn = page.locator('.btnn');
        this.orderId = page.locator('label.ng-star-inserted').first();
        this.successMsg = page.locator('.hero-primary');
    }

    async gotoCheckoutPage(username) {
        await this.selectCountryField.pressSequentially('Ind', { delay: 150 });
        await this.dropdown.waitFor();

        const optionsCount = await this.dropdown.locator('button').count();

        for (let i = 0; i < optionsCount; i++) {
            const text = await this.dropdown.locator('button').nth(i).textContent();

            if (text.trim() === 'India') {
                await this.dropdown.locator('button').nth(i).click();
                break;
            }
        }

        await expect(this.email).toHaveText(username);
        await this.placeOrderBtn.click();
       
    }

    
    async getSuccessMessage() {
        return await this.successMsg.textContent();
    }

    async getOrderID() {
        return await this.orderId.textContent();
    }
}

module.exports = { CheckoutPage };