// Hook                 | Description                                                |
// | --------------           | ----------------------------------------                        |
// | `beforeAll()`     | Runs once *before all tests* in a file |
// | `afterAll()`        | Runs once *after all tests* in a file    |
// | `beforeEach()` | Runs *before each test*                      |
// | `afterEach()`    | Runs *after each test*                         |

//   beforeAll()
//   Test1
//   Test2
//   afterAll()

//   beforeEach
//   Test1
//   afterEach()

//   beforeEach()
//   Test2
//   afterEach()
import{test, expect} from '@playwright/test'

test('ValidateInventory', async({page})=>{
    await page.goto('https://www.saucedemo.com/')
    await page.locator('#user-name').fill('standard_user');

    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')

    await page.locator('#react-burger-menu-btn').click();
    await page.locator('#logout_sidebar_link').click();
    await page.waitForTimeout(7000);

})


test('AddToCart', async({page})=>{
    await page.goto('https://www.saucedemo.com/')
    await page.locator('#user-name').fill('standard_user');

    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();
    await page.locator('#add-to-cart-sauce-labs-backpack').click();
    expect(await page.locator('.shopping_cart_badge')).toBeVisible();

     await page.locator('#react-burger-menu-btn').click();
    await page.locator('#logout_sidebar_link').click();
    await page.waitForTimeout(7000);

})