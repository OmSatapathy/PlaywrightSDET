import { test, expect } from '@playwright/test';
import { LamdaTestPage } from '../lamdatestpage/homepage';
import { megamenuSection } from '../lamdatestpage/megamenu';

test.beforeEach(async ({ page }) => {
    await page.goto("https://ecommerce-playground.lambdatest.io/");
    await page.waitForResponse((response) => response.url().includes("https://ecommerce-playground.lambdatest.io/") && response.status() === 200);
})


test("verify the dropdown options", async ({ page }) => {

    const lamdaTestPage = new LamdaTestPage(page);
    await lamdaTestPage.navigateToHomePage();
    await lamdaTestPage.seachItemFromDropdown();

    await lamdaTestPage.serachItemFromSearchField('bag');
    await page.locator("#entry_212456").textContent().then((text) => {
        console.log(text);
        expect(text).toContain('bag');
    });

    await lamdaTestPage.verifyShopByCatagory()

})


test("Verify mega menu options", async ({ page }) => {

    const megamenuobj = new megamenuSection(page);
    await megamenuobj.clickOnAddonLink();
    await megamenuobj.findallProducts();
    await page.waitForResponse((response) => response.url().includes("https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/page&page_id=10") && response.status() === 200);
    await megamenuobj.findPriceOfProducts();

})