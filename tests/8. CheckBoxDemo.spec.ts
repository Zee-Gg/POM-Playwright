import {test, expect} from '@playwright/test'

test('Checkbox', async({page})=>{
    await page.goto('https://www.testmuai.com/selenium-playground/checkbox-demo/');
    await page.waitForTimeout(3000);

    const allcheckboxes = await page.locator('input[type="checkbox"]');
    // Assertion
    // await expect(allcheckboxes.first()).toBeChecked(); 
    await expect(allcheckboxes.first()).not.toBeChecked(); 
    
    await allcheckboxes.first().check();
    console.log(await allcheckboxes.first().isChecked());
    
    await page.waitForTimeout(3000);
   
    await allcheckboxes.first().uncheck();
     console.log(await allcheckboxes.first().isChecked());

     console.log(await allcheckboxes.nth(4).isEnabled());


    await page.waitForTimeout(5000);
})