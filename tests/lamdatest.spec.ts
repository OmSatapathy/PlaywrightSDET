import { test, expect } from '@playwright/test';
import { LamdaTestPage } from '../lamdatestpage/homepage';


test("verify the dropdown options", async ({ page }) => {

    const lamdaTestPage = new LamdaTestPage(page);
    await lamdaTestPage.navigateToHomePage();
    await lamdaTestPage.seachItemFromDropdown();

    await lamdaTestPage.serachItemFromSearchField('bag');
    await page.locator("#entry_212456").textContent().then((text) => {
        console.log(text);
        expect(text).toContain('bag');
    });

})