const { test, expect } = require("@playwright/test");

test('Calendar Validation', async({page}) => {
    const MonthNumber = "6";
    const Date = "27";
    const Year = "2027";
    const expectedList = [MonthNumber, Date, Year];
   

    await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/offers');
    await page.locator('.react-date-picker__wrapper').click();
    await page.locator('.react-calendar__navigation__label').click();
    await page.locator('.react-calendar__navigation__label__labelText.react-calendar__navigation__label__labelText--from').click();
    await page.getByText(Year).click();
    await page.locator('.react-calendar__year-view__months__month').nth(Number(MonthNumber -1)).click();
    //calendar spec
    await page.locator(`//abbr[text()='${Date}']`).click();
    const inputs =  page.locator('.react-date-picker__inputGroup__input');
 
    for(let i =0; i<expectedList.length;i++)
    {
        const value = await inputs.nth(i).inputValue();
        console.log(value);
        expect(value).toEqual(expectedList[i]);
 
    }



})

