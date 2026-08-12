import {test, expect} from '@playwright/test'

test('AsyncAwaitDemo', async({page})=>{
    await page.goto('https://bstackdemo.com/')
    await expect(page).toHaveTitle('StackDemo');
    await page.locator('#signin').click();

    await page.waitForTimeout(5000);
})