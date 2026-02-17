import { Page, test, expect, Locator } from '@playwright/test';

export class LamdaTestPage {
    readonly page: Page;
    readonly allcatagories: Locator;
    readonly searchfield: Locator;
    readonly serchbutton: Locator;
    readonly drodown: Locator;
    readonly catagory: Locator;
    readonly topcatagory: Locator;

    constructor(page: Page) {
        this.page = page;
        this.allcatagories = page.locator("(//button[@class='btn dropdown-toggle'])[1]");
        this.drodown = page.locator('.dropdown-menu.dropdown-menu-left.show');
        this.searchfield = page.getByPlaceholder('Search For Products');
        this.serchbutton = page.locator('.search-button').first();
        this.catagory = page.getByText('Shop by Category');
        this.topcatagory = page.locator('#entry_217840')
    }

    async navigateToHomePage() {
        await this.page.goto('https://ecommerce-playground.lambdatest.io/');
    }
    async seachItemFromDropdown() {
        await this.allcatagories.click();
        const dropdownOptions = await this.drodown.allTextContents();
        console.log(dropdownOptions);

        await this.page.locator("(//a[contains(text(),'Laptops')])[1]").click();

        const categoryText = await this.allcatagories.textContent();
        if (categoryText === 'Laptops') {
            console.log('Laptops option is selected');
        }
    }

    async serachItemFromSearchField(item: string) {
        await this.searchfield.first().fill(item);
        await this.serchbutton.click();
    }

    async verifyShopByCatagory() {
        await this.catagory.click();

        await this.topcatagory.textContent().then((text) => {
            console.log(text);
            expect(text).toContain(' Washing machine');
        })

        const allLinks = await this.topcatagory.locator('a').all();
        console.log(allLinks.length);
        for (const link of allLinks) {
            if (await link.textContent() == ' Washing machine') {
                await link.click();
                break;
                const linkText = await link.textContent();
                console.log(linkText);
            }

        }
    }
}