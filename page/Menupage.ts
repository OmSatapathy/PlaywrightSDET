import { Page, Location, Locator } from '@playwright/test'
import { Allpages } from '../locators/Allpages';

export class Menupage {

    readonly page: Page;
    readonly menuButton: Locator;
    readonly aboutBTN: Locator;
    readonly logoutBTN: Locator;

    constructor(page: Page) {
        this.page = page;
        this.menuButton = page.locator(Allpages.menuButton);
        this.aboutBTN = page.locator(Allpages.aboutBTN);
        this.logoutBTN = page.locator(Allpages.logoutBTN);
    }

    async clickMenuButton() {
        
        await this.menuButton.click();
        await this.aboutBTN.click();
        await this.menuButton.click();
        await this.logoutBTN.click();
        

    }   
}