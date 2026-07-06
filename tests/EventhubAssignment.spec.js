
const {test, expect} = require ('@playwright/test');

test('Eventhub Assignment', async({page}) => {
    const userID = 'thapa.bipusa@outlook.com';
    const userpassword = 'Eventhub@1234';
    const date = '';

    await page.goto('https://eventhub.rahulshettyacademy.com/login');
    await page.getByPlaceholder('you@email.com').fill(userID);
    await page.getByPlaceholder('••••••').fill('Eventhub@1234');
    await page.getByRole('button').click();

    await expect(page.locator('.bg-gray-900.text-gray-400.mt-auto')).toBeVisible();

    await page.getByText('Admin').click();
    await page.getByText('Manage Events').nth(0).click();
    expect(page.locator('.text-lg.font-bold.text-gray-900.mb-2')).toBeVisible();

    await page.getByPlaceholder('Event title').fill('Musical Concert Event');
    await page.getByPlaceholder('Describe the event…').fill('Lets gather to celebrate love for music!!!');
    await page.getByLabel('category').selectOption('Concert');
    await page.getByLabel('city').fill('Mumbai');
    await page.getByLabel('Venue').fill('xyz Central Mall, street 12');
    await page.locator('[id="event-date-&-time"]').pressSequentially('12112026000230pm');
    await page.getByPlaceholder('0.00').fill('21.00');
    await page.getByText('Total Seats').fill('10');
    await page.locator('#add-event-btn').click();
    //await page.pause();




















} )
