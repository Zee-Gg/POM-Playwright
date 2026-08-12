import {test, expect} from '@playwright/test'

test('AlertDemo', async({page})=>{
    await page.goto('https://www.testmuai.com/selenium-playground/javascript-alert-box-demo/')
    await page.waitForTimeout(3000);

    page.on('dialog' , async dialog =>{
    
        //  await dialog.accept()
        // await dialog.dismiss()
        await dialog.accept('PlaywrightTS')
        console.log(await dialog.message());

    })

    // await page.locator('//*[@id="__next"]/div/main/section[2]/div/div/div/div[1]/p/button').click();
    // await page.locator('//*[@id="__next"]/div/main/section[2]/div/div/div/div[2]/div/p[1]/buttons').click();
    await page.locator('//*[@id="__next"]/div/main/section[2]/div/div/div/div[3]/p[1]/button').click();


    await page.waitForTimeout(10000)

})