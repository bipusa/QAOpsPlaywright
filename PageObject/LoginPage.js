class LoginPage {
    constructor (page) 
    {
        this.page = page;
        this.signinbutton = page.locator('#login');
        this.userName = page.locator('#userEmail');
        this.password = page.locator('#userPassword');

    }

    async goTo()
    {
         await this.page.goto ("https://rahulshettyacademy.com/client");
    }

    async validLogin(username, password)
    {
        await this.userName.fill(username);
        await this.password.fill(password);
        await this.signinbutton.click();
        await this.page.waitForLoadState('networkidle');

    }
    
}

module.exports = {LoginPage};
