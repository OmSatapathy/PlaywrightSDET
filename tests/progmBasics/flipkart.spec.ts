import { test, expect } from '@playwright/test';

test('verify flipkart mobile details', async ({ page }) => {

    await page.goto('https://www.flipkart.com/');
    await page.getByPlaceholder('Search for Products, Brands and More').fill('Mobile');
    await page.keyboard.press('Enter');

    // wait for search results
    await page.locator('.jIjQ8S').first().waitFor();

    const items = await page.locator('.jIjQ8S');
    const count = await items.count();

    console.log(`Total products found: ${count}`);

    const brandName = await page.locator('.RG5Slk').allTextContents();
    const price = await page.locator("//div[@class='hZ3P6w DeU9vF']").allTextContents();

    for (let i = 0; i < count; i++) {
        console.log(`${brandName[i]} - Price: ${price[i]}`);
    }


    const uniqueBrands = new Set(brandName);
    console.log(`Total unique brands: ${uniqueBrands.size}`)

});

test(`implement map`, async ({ page }) => {

    await page.goto('https://www.flipkart.com/');

    await page.getByPlaceholder('Search for Products, Brands and More').fill('Mobile');
    await page.keyboard.press('Enter');


    await page.locator('.jIjQ8S').first().waitFor();

    const items = await page.locator('.jIjQ8S');
    const count = await items.count();


    const productMap = new Map<string, string>();

    for (let i = 0; i < count; i++) {
        const brand = await items.nth(i).locator('.RG5Slk').textContent();
        const price = await items.nth(i).locator("//div[@class='hZ3P6w DeU9vF']").textContent();
        
        if (brand && price) {
            productMap.set(brand, price);
        }
    }


    for (const [key, value] of productMap) {
        console.log(`${key} ===> ${value}`);
    }
});


test('verify headerlinks', async ({ page }) => {

    await page.goto('https://www.flipkart.com/');
    await page.locator(".vpQU2r").first().waitFor({ timeout: 30000 });
    const headerLinks = await page.locator('.vpQU2r').all();

    const headerTexts = await Promise.all(
        headerLinks.map(link => link.textContent())
    );

    console.log(headerTexts.map(text => text?.trim()));

    const homeLink = headerLinks.find((_, index) => headerTexts[index]?.includes("Home & Furniture"));
    if(homeLink){
           await homeLink.hover(); 
           await homeLink.click();
    }
})


test('find number of links in footer', async ({ page }) => {

    await page.goto('https://www.flipkart.com/');

    await page.locator("//a[@class='idDDkQ']").last().waitFor({ timeout: 30000 });

    const footerLinks = await page.locator("//a[@class='idDDkQ']").all();
 
    for(const link of footerLinks){
        const linkText = await link.textContent();
        console.log(linkText?.trim());
    }
    
})



test('find top deals', async ({ page }) => {

    await page.goto('https://www.flipkart.com/');

   const topDealLocator = page.locator("//*[@class='faikzn']");
   await topDealLocator.first().waitFor({ timeout: 30000 });
   const topDeals = await topDealLocator.all();

   const dealTexts: string[] = [];

   for(const deal of topDeals){
        const dealText = await deal.textContent();
        if(dealText) {
            dealTexts.push(dealText.trim());
            console.log(dealText.trim());
        }
   }

   expect(dealTexts.some(text => text.includes('Monitor'))).toBeTruthy();
})


test('verify footer sections', async ({ page }) => {

    await page.goto('https://www.flipkart.com/');
    await page.locator("//div[@class='x3q9HG']").first().waitFor({ timeout: 30000 });

       const footerLinks = await page.locator("//a[@class='XnhcQm']").all();

       for(const link of footerLinks){
           const linkText = await link.textContent();
          // console.log(linkText?.trim());
           console.log(linkText?.toUpperCase());
       }

})


test('verify dropdown', async ({ page }) => {

    await page.goto('https://www.flipkart.com/');

    await page.getByPlaceholder('Search for products, brands and more').click();
    await page.getByPlaceholder('Search for products, brands and more').fill('Mobile');
    await page.keyboard.press('Enter');

    await page.locator(".hbnjE2").nth(0).selectOption({ index: 2});
    await page.waitForTimeout(1000);
    await page.locator(".hbnjE2").nth(1).selectOption({ index: 3 });
    await page.waitForTimeout(3000);
})