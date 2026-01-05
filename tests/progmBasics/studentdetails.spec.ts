import { test, expect } from '@playwright/test';
import { time } from 'node:console';

test('Verify Student Registration Form', async ({ page }) => {

  await page.goto('https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php')

  let firstName: string = "Suman Dash";
  let email: string = "suman55@gmail.com";


  await page.getByPlaceholder("First Name").fill(firstName);

  await page.locator("#email").fill(email);

  const values = await page.locator("//input[@type='radio']");
  const count = await values.count();

  for (let i = 0; i < count; i++) {
    await values.nth(i).click();

    await page.waitForTimeout(1000);
  }

})


test('filling students details', async ({ page }) => {

  await page.goto('https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php')

  const formData: { [key: string]: string } = {
    firstName: "Dibakar",
    email: "diba@gmail.com",
    mobile: "73665444"

  }

  const locators: { [key: string]: string } = {
    firstName: "#name",
    email: "#email",
    mobile: "#mobile"
  }

  for (let value in formData) {
    if (locators[value]) {
      await page.locator(locators[value]).fill(formData[value]);
      await page.waitForTimeout(1000);
    }
  }

})



test('working with webtable', async ({ page }) => {
  await page.goto('https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php')

  await page.locator("//button[text()=' Elements']").hover()

  await page.locator("//button[text()=' Elements']").click();
  await page.locator("//a[text()=' Web Tables']").click();

  await page.locator('table tbody tr').first().click({ timeout: 5000 });
  const rows = await page.locator('table tbody tr').all()
  const rowCount = await rows.length;
  console.log("Total number of rows: " + rowCount);

  for (let row of rows) {
    const salary =   await row.locator('td').nth(4).textContent();
    console.log(salary);
    const salaryvalue  = Number(salary?.trim());

    if(salaryvalue >= 12000){
         await row.locator('.delete-wrap.confirmdeletebtn').click(); 
         
    }
  }

})

test('Amazon website navigation', async ({ page }) => {
  await page.goto('https://www.amazon.in/')
 
  await page.waitForTimeout(2000);

   const navItems = await page.$$("#nav-xshop-container ul li");

   for(const item of navItems){
      const text = await item.$('a');
      const value = await text?.innerText();
      console.log(value);

      if(value?.trim() === 'Mobiles'){
         await text?.click();
         break;
      }
   }
})



test('Button disables', async ({ page }) => {

  await page.goto("https://www.amazon.in/");
  await page.waitForTimeout(2000);
  await page.getByPlaceholder("Search Amazon.in").fill("iphone 13 pro max");
  await page.getByPlaceholder("Search Amazon.in").press('Enter');
  await page.waitForTimeout(2000);

  let nextBTNcount =0;

  const nextButton = await page.locator("//a[contains(text(), 'Next')]");
   await nextButton.scrollIntoViewIfNeeded();

     await page.waitForTimeout(2000);

while(nextBTNcount >0  && await nextButton.isVisible() == true){
      await nextButton.click();
      await page.waitForLoadState('domcontentloaded')
      nextBTNcount++;
}
  

})