import { test, expect, Browser, chromium } from '@playwright/test'
import { Page } from '@playwright/test'
import { Search } from '../myntrapage/searchobject'

let page: Page;

test.use({
  viewport: { width: 1600, height: 1200 },
});

test('browser launch', async ({ page }) => {

    await page.goto('https://www.myntra.com');

    const search = new Search(page);
    await search.searchproduct();
    await search.findPrice(); // 

    await search.selectWomen()

    await page.waitForTimeout(3000)


})


