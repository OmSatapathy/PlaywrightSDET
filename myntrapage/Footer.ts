import { Page, Locator } from '@playwright/test'

export class FooterObject {
    readonly page: Page
    readonly popularSearch: Locator;
    readonly facebookLink: Locator;

    constructor(page: Page) {
        this.page = page
        this.popularSearch = page.locator("//div[@class='desktop-pSearchlinks']")
        this.facebookLink = page.locator("//a[@class='desktop-facebook']")
    }


    async scrollToFooter() {
        await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
        await this.popularSearch.waitFor();
        await this.facebookLink.waitFor();
        await this.popularSearch.all().then(async (elements) => {
            for (const element of elements) {
                console.log(await element.textContent());
            }
        });
    }
}