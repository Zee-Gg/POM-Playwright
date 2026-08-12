import {test, expect} from '@playwright/test'

test('DropDownTest', async({page})=>{
    await page.goto('https://www.testmuai.com/selenium-playground/input-form-demo/')
    await page.waitForTimeout(4000);

    // Select By LABEL
    // await page.locator('[name= country]').selectOption({label: 'India'});

    // Select by Index
    // await page.locator('[name = country]').selectOption({index:10});

    // Select by Value
    await page.locator('[name= country ]').selectOption({value: 'AU'});


    await page.waitForTimeout(7000);
})