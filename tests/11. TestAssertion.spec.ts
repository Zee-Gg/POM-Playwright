// Understanding Assertions , SoftAssertions
// By default  if the assertion fails complete test fails 
// Soft assertions allow the test to keep running and report all failures at the end. This is great for checking multiple independent UI elements.
import {test, expect} from '@playwright/test'

test('Assertions', async({page})=>{
    await page.goto('https://practicetestautomation.com/practice-test-login/');

    const usernamefield = await page.getByLabel('username');

    await expect(usernamefield).toBeVisible();
    // await expect(usernamefield).toBeEnabled();
    await expect.soft(usernamefield).not.toBeEnabled();

    const heading = await page.locator('h2');
    // await expect(heading).toHaveText('Test login')
    // Will Look for partial text
    await expect(heading).toContainText('login');

    await usernamefield.fill('student')
    await page.getByLabel('password').fill('Password123');
    await page.getByRole('button', {name: 'Submit'}).click();

    await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/');
    await expect(page).toHaveTitle('Logged In Successfully | Practice Test Automation ')






    await page.waitForTimeout(5000);


})