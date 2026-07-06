const { Before, After, BeforeStep, AfterStep, Status } = require('@cucumber/cucumber');
const { expect, chromium } = require('@playwright/test');
const { POManager } = require('../../PageObject/POManager');

Before( async function () {
    
        this.browser = await chromium.launch({
            headless: false
        });
        this.context = await this.browser.newContext();
        this.page = await this.context.newPage();
    
        this.poManager = new POManager(this.page);
});

BeforeStep( function () {

});
AfterStep(async function({result})
{
    if(result.status === Status.FAILED){
        await this.page.screenshot({path: "screenshot1.png"});
    }

})
 After( function() {
    console.log("I am the last piece of code to be executed")
 });