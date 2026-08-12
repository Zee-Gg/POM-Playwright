import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/19. loginPage'
import { ProductListPage } from '../pages/19.3 productListPage';

test('ValidateLogin', async({page})=>{
    const loginpage= new LoginPage(page);
    await loginpage.openApplication();
    await loginpage.doLogin();
    expect(await page).toHaveURL('https://www.saucedemo.com/inventory.html')

    await page.waitForTimeout(3000);
})

test('ValidateAddToCart', async({page})=>{

    const loginpage= new LoginPage(page);
    await loginpage.openApplication();
    await loginpage.doLogin();
    expect(await page).toHaveURL('https://www.saucedemo.com/inventory.html')

    const productListPage = new ProductListPage(page);
    await productListPage.clickAddtoCartButton();
    expect (await productListPage.cartBadgeIcon).toHaveText('1');
    await page.waitForTimeout(4000);


   



})