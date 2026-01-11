import { Page, Location, Locator } from "@playwright/test";
export class seleniumform {

    private page: Page;
    private chackBoxButton: Locator;
    private checkbox: Locator;
    private radioButtonLink: Locator;
    private radioButton: Locator;
    private webTableLink: Locator;
    private webTable: Locator;

    private links: Locator;
    private allLinks: Locator;
    private uploadfileLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.chackBoxButton = page.locator("//*[contains(text(),'Check Box')]");
        this.checkbox = page.locator("//input[@id='c_bs_2']");
        this.radioButtonLink = page.locator("//*[contains(text(),'Radio Button')]");
        this.radioButton = page.locator("//input[@type='radio']").first();
        this.webTableLink = page.locator("//*[contains(text(),'Web Tables')]");
        this.webTable = page.locator("//tbody/tr/td[1]");
        this.links = page.locator("//a[contains(text(),' Links')]").first();
        this.allLinks = page.locator("//*[@class='col-md-8 col-lg-8 col-xl-8']//a");
        this.uploadfileLink = page.locator("//a[contains(text(),' Upload and Download')]");

    }

    async clickOnCheckBoxButton() {
        await this.chackBoxButton.click();
        await this.checkbox.check();
    }

    async clickOnRadioButtonLink() {
        await this.radioButtonLink.click();
        await this.radioButton.check();
    }

    async clickOnWebTableLink() {
        await this.webTableLink.click();
        const rows = await this.webTable.count();
        for (let i = 0; i < rows; i++) {
            console.log(await this.webTable.nth(i).textContent());
        }
    }

    async clickOnLinks() {
        {
            await this.links.click();
            const linkCount = await this.allLinks.count();
            console.log(`Total links: ${linkCount}`);
            for (let i = 0; i < linkCount; i++) {
                const linkText = await this.allLinks.nth(i).textContent();

                console.log(`Text = ${linkText}`);
            }
        }

    }
    async clickOnUploadFileLink() {
        await this.uploadfileLink.click();
    }
}