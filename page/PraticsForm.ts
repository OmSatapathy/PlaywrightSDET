import { Page, Locator } from "@playwright/test";

export class PraticsForm {

    private page: Page;
    private firstName: Locator;
    private email: Locator;
    private currentAddress: Locator;
    private password: Locator;
    private submitBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.firstName = page.locator("#fullname");
        this.email = page.locator("#email");
        this.currentAddress = page.locator("#address");
        this.password = page.locator("#password");
        this.submitBtn = page.locator("//input[@type='submit']");
    }

    async fillFormDetails(
        firstName: string,
        email: string,
        currentAddress: string,
        password: string
    ) {
        await this.firstName.fill(firstName);
        await this.email.fill(email);
        await this.currentAddress.fill(currentAddress);
        await this.password.fill(password);
    }

    async submitForm() {
        await this.submitBtn.click();
    }
}
