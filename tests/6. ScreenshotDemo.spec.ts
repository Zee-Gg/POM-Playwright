import {test, expect} from '@playwright/test'

test('Screenshot' , async({page})=>{
    await page.goto('https://www.testmuai.com/selenium-playground/')
    await page.waitForTimeout(3000);

    // Viewport Screenshot
    // await page.screenshot({path:'ViewPort.png' });

    // Full page
    // await page.screenshot({path:'fullpage.png', fullPage:true});

    // Element Screenshot
    const ele1 = await page.getByText('Get Started Free');
    await ele1.screenshot({path:'ele1.png'})
})