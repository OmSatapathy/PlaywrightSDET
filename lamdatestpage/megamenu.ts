import { Page, Locator, expect } from '@playwright/test'

export class megamenuSection {
    readonly page: Page;
    readonly addonlink: Locator;
    readonly myaccount: Locator;
    readonly megamenu: Locator;

    readonly modules: Locator;
    readonly productlisting: Locator
    readonly allproducts: Locator;
    readonly price: Locator



    constructor(page: Page) {
        this.page = page;
        this.megamenu = page.locator("//*[contains(text(),' Mega Menu')]");
        this.addonlink = page.locator("(//*[contains(text(),' AddOns')])[1]");
        this.myaccount = page.locator("(//*[contains(text(),'My account')])[1]");
        this.modules = page.locator("(//*[contains(text(),'Modules')])[1]");
        this.productlisting = page.locator("(//*[contains(text(),'Product Listing')])[1]");
        this.allproducts = page.locator("#mz-product-listing-37212971")
        this.price = page.locator("//div[@class='price']")

    }
    async clickOnAddonLink() {
        await this.megamenu.hover();
        await this.page.waitForTimeout(2000);
        await this.addonlink.hover();
        await this.page.waitForTimeout(2000);
        await this.modules.click();

        // expect(this.productlisting.textContent()).toContain("Product Listing");
    }

    async findallProducts() {
        await this.allproducts.all().then((elements) => {
            elements.forEach(async (element: Locator) => {
                const text = await element.textContent();
                console.log(text);
            });
        });
    }

    async findPriceOfProducts() {
        await this.price.all().then((elements) => {
            elements.forEach(async (element: Locator) => {
                const text = await element.textContent();
                console.log(text);
            });
        });
    }
}
