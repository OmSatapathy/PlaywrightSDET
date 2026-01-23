import { test, expect } from '@playwright/test'


test.use({
    viewport: { width: 1200, height: 1000 },
});

test('Alert handling', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/")

    page.on('dialog', dialog => dialog.accept());
    await page.locator('#alertBtn').click();

    console.log('button clicked')
});



test('conformation popup alert', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.waitForLoadState('load')

    await page.locator('#promptBtn').scrollIntoViewIfNeeded()

    await page.on('dialog', d => d.accept())
    const alertButtonText = await page.locator('#promptBtn').innerText();
    console.log(alertButtonText);
    await page.locator('#promptBtn').click()

})