import { Page, Locator } from '@playwright/test';
export class homepageLocators {
    readonly page: Page;
    readonly navbar: Locator;
    readonly searchBox: Locator;
    readonly userProfile: Locator;

    constructor(page: Page) {
        this.page = page
        this.navbar = page.locator("//nav[@class ='desktop-navbar']");
        this.searchBox = page.getByPlaceholder('Search for products, brands and more');
        this.userProfile = page.getByText('Profile');
    }

    async navigateToHomePage() {
        await this.page.goto('https://www.myntra.com/');
        await this.navbar.waitFor();
     
    }

    async searchForProduct(productName: string) {
        await this.searchBox.click();
        await this.searchBox.fill(productName);
        await this.searchBox.press('Enter');
    }

    async clickUserProfile() {
        await this.userProfile.click();
    }
}