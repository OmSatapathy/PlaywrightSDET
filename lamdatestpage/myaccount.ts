import{Page,Locator, expect} from '@playwright/test';
import { error } from 'node:console';
import { read } from 'node:fs';
export class MyAccountPage{
    readonly page:Page;
    readonly myAccountLink:Locator;
    readonly loginLink:Locator;
    readonly emailfeild:Locator;
    readonly passwordfeild:Locator;
    readonly loginButton:Locator;

    readonly errorMessage: string = ' Warning: No match for E-Mail Address and/or Password.'

    constructor(page:Page){
        this.page=page;
        this.myAccountLink=page.locator("(//*[contains(text(),'My account')])[2]");
        this.loginLink=page.locator("(//*[contains(text(),'Login')])[1]");
        this.emailfeild=page.locator("#input-email");
        this.passwordfeild=page.locator("#input-password");
        this.loginButton=page.locator("input[value='Login']");
    }


    async navigateToLoginPage(){
        await this.myAccountLink.hover();
        await this.loginLink.click();
        //await this.page.waitForResponse((response) =>
        //     response.url().includes("https://ecommerce-playground.lambdatest.io/index.php?route=account/login") && response.status() === 200);

        await this.emailfeild.fill("rakesh@gmail.com")
        await this.passwordfeild.fill("rakesh@123")
        await this.loginButton.click();
        
        expect(this.page.locator("div[class='alert alert-danger alert-dismissible']")).toHaveText(this.errorMessage);
    }
}