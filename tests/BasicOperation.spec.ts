import { test, expect } from '@playwright/test';
import { PraticsForm } from '../page/PraticsForm';
import { seleniumform } from '../page/Seleniumform';

test('Automation Practice Form', async ({ page }) => {

    await page.goto('https://www.tutorialspoint.com/selenium/practice/text-box.php');

    const practiceForm = new PraticsForm(page);

    await practiceForm.fillFormDetails(
        "Suman Dash",
        "suman.dash@example.com",
        "flat 345, some street, some city",
        "suma45^RR"
    );

    await practiceForm.submitForm();

    // ✅ Assertions instead of wait
    await expect(page.locator('#output')).toBeVisible();
    await expect(page.locator('#name')).toHaveValue('Suman Dash');
    await expect(page.locator('#email')).toHaveValue('suman.dash@example.com');

});


test.only('validate button functinality', async ({ page }) => {

     await page.goto('https://www.tutorialspoint.com/selenium/practice/text-box.php');

     const formDetails = new seleniumform(page);

     await formDetails.clickOnCheckBoxButton();

     await page.waitForTimeout(3000);

     await formDetails.clickOnRadioButtonLink();
     await page.waitForTimeout(3000);

     await formDetails.clickOnWebTableLink();
     await page.waitForTimeout(3000);

});

