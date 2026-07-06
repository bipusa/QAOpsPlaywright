import {test, expect, Page, Locator } from '@playwright/test';
export class CheckoutPage {
    
    checkout: Locator;
    selectCountryField: Locator;
    dropdown: Locator;
    email: Locator;
    button: Locator;
    orderplacedtext: Locator;
    orderId: Locator;

    constructor(page: Page) {
        this.checkout = page.locator("text=Checkout");
        this.selectCountryField = page.getByPlaceholder('Select Country');
        this.dropdown = page.locator('.ta-results');
        this.email = page.locator('.user__name label');
        this.button = page.locator('.btnn');
        this.orderplacedtext = page.locator('.hero-primary');
        this.orderId= page.locator('label.ng-star-inserted').first();

    }

    async gotoCheckoutPage(username: string) {
        await expect(this.checkout).toBeVisible({ timeout: 10000 });

        await this.checkout.click();
        await this.selectCountryField.pressSequentially('Ind', { delay: 150 });
        await this.dropdown.waitFor();
        const optionsCount = await this.dropdown.locator('button').count();
        for (let i = 0; i < optionsCount; ++i) {
            const text = await this.dropdown.locator('button').nth(i).textContent();
            if (text === ' India') {
                await this.dropdown.locator("button").nth(i).click();
                break;

            }

        }
        await expect(this.email).toHaveText(username);
        await this.button.click();

    }
    async getSuccessMessage () {
        return this.orderplacedtext.textContent();
    }

    async getOrderID () {
        return this.orderId.textContent();
      
    }

}

module.exports = {CheckoutPage};