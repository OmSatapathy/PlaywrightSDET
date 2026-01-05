import { Page, Locator } from '@playwright/test';
import { HomePageLocators } from '../locators/HomepageLocators';
import { envconfig } from '../utils/envconfig';

export class Homepage {

  readonly page: Page;
  readonly username: Locator;
  readonly password: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.username = page.locator(HomePageLocators.username);
    this.password = page.locator(HomePageLocators.password);
    this.loginButton = page.locator(HomePageLocators.loginButton);
  }

  async navigateToHomepage() {
    await this.page.goto(envconfig.baseURL);
    await this.username.fill(envconfig.username);
    await this.password.fill(envconfig.password);
    await this.loginButton.click();
  }
}
