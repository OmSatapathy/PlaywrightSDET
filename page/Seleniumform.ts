import { Page,Location, Locator } from "@playwright/test";
export class seleniumform {

    private page: Page;
    private chackBoxButton: Locator;
    private checkbox: Locator;
    private radioButtonLink: Locator;
    private radioButton: Locator;
    private webTableLink: Locator;
    private webTable: Locator;

    constructor(page: Page) {
        this.page = page;
        this.chackBoxButton = page.locator("//*[contains(text(),'Check Box')]");
        this.checkbox= page.locator("//input[@id='c_bs_2']");
        this.radioButtonLink = page.locator("//*[contains(text(),'Radio Button')]");)
        this.radioButton = page.locator("//input[@type='radio']").first();
        this.webTableLink = page.locator("//*[contains(text(),'Web Tables')]");
        this.webTable = page.locator("//tbody/tr/td[1]");
        
        }

        async clickOnCheckBoxButton(){
            await this.chackBoxButton.click();
            await this.checkbox.check();
        }

        async clickOnRadioButtonLink(){
            await this.radioButtonLink.click();
            await this.radioButton.check();
        }

        async clickOnWebTableLink(){
            await this.webTableLink.click();
            const rows = await this.webTable.count();
            for (let i = 0; i < rows; i++) {
                console.log(await this.webTable.nth(i).textContent());
            }
        }
    }