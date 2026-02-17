import { Page, test, expect, Locator } from '@playwright/test';

export class LamdaTestPage {
    readonly page: Page;
    readonly allcatagories: Locator;
    readonly searchfield: Locator;
    readonly serchbutton: Locator;
    readonly drodown: Locator;

    constructor(page: Page) {
        this.page = page;
        this.allcatagories = page.locator("(//button[@class='btn dropdown-toggle'])[1]");
        this.drodown = page.locator('.dropdown-menu.dropdown-menu-left.show');
        this.searchfield = page.getByPlaceholder('Search For Products');
        this.serchbutton = page.locator('.search-button').first();
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
            if(categoryText === 'Laptops') {
                console.log('Laptops option is selected');
            }
    }

    async serachItemFromSearchField(item: string) {
        await this.searchfield.first().fill(item);
        await this.serchbutton.click();
    }
}