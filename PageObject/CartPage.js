const { expect } = require('@playwright/test');

class CartPage {

    constructor(page) {
        this.page = page;
        this.products = page.locator(".cartSection h3");
        this.checkout = page.locator("text=Checkout");
    }

    async verifyProductInCart(productName) {
    const product = this.page.locator(`h3:has-text("${productName}")`);
    await expect(product).toBeVisible();
}

    async goToCheckout() {
        await this.checkout.click();
    }
}

module.exports = { CartPage };