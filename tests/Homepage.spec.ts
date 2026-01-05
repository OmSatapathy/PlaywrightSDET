import{test,expect} from '@playwright/test';
import{Homepage} from   '../page/Homepage'; 
import { HomePageLocators } from '../locators/HomepageLocators';
import { Menupage } from '../page/Menupage';
import { Allpages } from '../locators/Allpages';


test.describe('Homepage Tests',()=>{

    test.beforeEach('Verity landingapage', async ({page})=>{
        const homepage = new Homepage(page);
        await homepage.navigateToHomepage();
        await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
    })

    test('Verify all pages', async ({page})=>{
        const menupage = new Menupage(page);
        await menupage.clickMenuButton();
        await expect(page.locator(Allpages.aboutBTN)).toHaveText('About');

    })

})