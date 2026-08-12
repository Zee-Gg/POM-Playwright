import {test, expect} from '@playwright/test'
import loginData from '../testdata/loginData.json'


test('LoginTest', async({page})=>{
    await page.goto('https://practicetestautomation.com/practice-test-login/');

    // Login Steps
    // await page.getByLabel('username').fill('student')
    await page.getByLabel('username').fill(loginData.username)
    // await page.getByLabel('password').fill('Password123')
    // await page.getByRole('button',{name:'Submit'}).click()
    await page.getByLabel('password').fill(loginData.password)
    await page.getByRole('button',{name:'Submit'}).click()

    await page.waitForTimeout(5000);
})
