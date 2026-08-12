// How to handle multiple browser tabs
// playwright uses three-tier structure to manage your automation session:
// Browser: this is the physical instance of the browser(Chromium , Firefox, webKit)
// BrowserContext: this is an isolated "incognito-like "session within the browser. It has its own cookies , local storage , and permissions
// page: This is a single tab or window within a Browsercontext
import {test, expect} from '@playwright/test'

test('MultiTabs', async({page, context})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    const pagepromise = context.waitForEvent('page');

    await page.getByRole('link', {name: "OrangeHRM, Inc"}).click();

    const newpage = await pagepromise;
    console.log(await newpage.title());
    await page.bringToFront();
    console.log(await page.title());

    await page.waitForTimeout(5000);
})