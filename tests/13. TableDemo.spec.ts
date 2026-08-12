import {test, expect} from '@playwright/test'

test('TableDemo', async({page})=>{
    await page.goto('https://www.testmuai.com/selenium-playground/table-sort-search-demo/')
    await page. waitForTimeout(4000);

    const allcolumns = await page.locator('thead tr th');
    const columncount = await allcolumns.count();
    console.log("Total Columns = " +columncount);
    expect(columncount).toBe(4);

    const allRows = await page.locator('tbody tr');
    const rowscount = await allRows.count();
    console.log("Total Rows = " +rowscount);
    expect(rowscount).toBe(10);



    await page.waitForTimeout(4000);
})