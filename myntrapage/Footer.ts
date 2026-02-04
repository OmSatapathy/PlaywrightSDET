import { Page, Locator } from '@playwright/test'

export class FooterObject {
    readonly page: Page
    readonly popularSearch: Locator;
    readonly facebookLink: Locator;

    readonly brandName:Locator;

    constructor(page: Page) {
        this.page = page
        this.popularSearch = page.locator("//div[@class='desktop-pSearchlinks']")
        this.facebookLink = page.locator("//a[@class='desktop-facebook']")
        this.brandName = page.locator("//div[@class='vertical-filters-filters brand-container']")
    }


    async scrollToFooter() {
        await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
        await this.popularSearch.waitFor();
        await this.facebookLink.waitFor();
        await this.popularSearch.all().then(async (elements) => {
            for (const element of elements) {
                console.log(await element.textContent());
                if((await element.textContent()) === "Headsphones"){{
                    await element.click();
                } }
            }
        });
    }

    async verifyHeadpone(){
        await this.page.waitForLoadState('networkidle');
        console.log(this.page.url());
        return this.page.url().includes('headsphones');

        await this.brandName.all().then(async (elements) => {
            for (const element of elements) {
                console.log(await element.textContent());
                if((await element.textContent()) === "Noise"){
                    element.check();
                } 
            }
    }
}