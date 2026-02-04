import { test, expect } from "@playwright/test";
import { FooterObject } from "../myntrapage/Footer";


test('Verify homepage footer', async ({ page }) => {
  const footer = new FooterObject(page);

  await page.goto('https://www.myntra.com/');

  await footer.scrollToFooter();
  await footer.verifyHeadpone();

  await expect(page).toHaveURL(/headphones/i);
});
