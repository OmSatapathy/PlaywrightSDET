import { test, expect } from '@playwright/test';
import { PraticsForm } from '../page/PraticsForm';

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

    await page.waitForTimeout(3000);

});
