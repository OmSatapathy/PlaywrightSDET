import { Locator, Page } from "@playwright/test";

export class Search {
    page: Page;
    readonly searchField: Locator
    readonly allbrandNames: Locator
    readonly allPrices: Locator
    readonly radioButton: Locator


    constructor(page: Page) {
        this.page = page;
        this.searchField = page.getByPlaceholder('Search for products, brands and more')
        this.allbrandNames = page.locator('.product-brand')
        this.allPrices = page.locator('.product-price')


        this.radioButton = page.locator("//label[contains(normalize-space(),'Women')]//input[@type='radio']")
    }

    async searchproduct() {
        await this.searchField.click()
        await this.searchField.fill('jeans')
        await this.page.keyboard.press('Enter')
        await this.allPrices.first().waitFor({ state: 'visible' });
        const iteamcount = await this.allbrandNames.count()
        const alltexts = await this.allbrandNames.allInnerTexts()

        for (const singlebrand of alltexts) {
            console.log(singlebrand)

        }

    }

    async findPrice() {
        const allPrice = await this.allPrices.allInnerTexts()
        for (const singleprice of allPrice) {
            console.log(singleprice)
        }
    }
    async selectWomen() {
        await this.page
            .locator('#mountRoot')          // scope
            .locator('label')
            .filter({ hasText: 'Women' })
            .click();

    }

}



// .product-price