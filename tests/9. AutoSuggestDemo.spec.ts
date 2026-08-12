import {test, expect} from '@playwright/test'

test('AutoSuggest', async({page})=>{
    await page.goto('https://www.youtube.com/@LetsLearnQA')
    await page.getByPlaceholder('Search').fill('playwright');
    await page.waitForSelector('.ytSuggestionComponentLeftContainer');
    const allsuggestions = await page.locator('.ytSuggestionComponentLeftContainer')
    const count = await allsuggestions.count();

    for(let i = 0; i< count; i++){
        const text = await allsuggestions.nth(i).textContent();
        console.log(text);
        expect(text).toContain('playwright');
    }

    await page.waitForTimeout(8000);
});
