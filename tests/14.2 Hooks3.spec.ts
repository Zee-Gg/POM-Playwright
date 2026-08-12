import {test, expect, Page} from '@playwright/test'

let page:Page;
test.beforeAll(async({browser})=>{
    page = await browser.newPage();
    await page.goto('https://www.saucedemo.com/')
    await page.locator('#user-name').fill('standard_user');

    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();
})



test.afterAll(async()=>{
    await page.locator('#react-burger-menu-btn').click();
    await page.locator('#logout_sidebar_link').click();
})

test('ValidateInventory', async()=>{
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
    await page.waitForTimeout(7000);
})

test('AddToCart', async()=>{
   
    await page.locator('#add-to-cart-sauce-labs-backpack').click();
    await expect(page.locator('.shopping_cart_badge')).toBeVisible();


    await page.waitForTimeout(7000);

})