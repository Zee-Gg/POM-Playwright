import {test, expect} from '@playwright/test'

test('LoginTest', async({page})=>{
    await page.goto('https://practicetestautomation.com/practice-test-login/')
    // Valodate by Page Title
    await expect(page).toHaveTitle('Test Login | Practice Test Automation')
    // Login Steps
    await page.getByLabel('username').fill('student')
    await page.getByLabel('password').fill('Password123')
    await page.getByRole('button',{name:'Submit'}).click()

    // Validate successful Login
    await expect(page).toHaveTitle('Logged In Successfully | Practice Test Automation')
    await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/')

    // Logout
    await page.getByRole('link', {name:'Log out'}).click();
    await page.waitForTimeout(4000);
    await expect(page).toHaveURL('https://practicetestautomation.com/practice-test-login/')


    await page.waitForTimeout(9000);





})