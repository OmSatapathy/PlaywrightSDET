import{Browser,Page,test,expect} from '@playwright/test';
import { homepageLocators } from '../myntrapage/homepage';

test.describe('Myntra Home Page Test Suite',()=>{
  
    test.beforeEach('Navigate to Home Page and Verify Elements',async ({page})=>{    
        const homePage= new homepageLocators(page);
        await homePage.navigateToHomePage();
        await expect(homePage.navbar).toBeVisible();
    })

    test('search product test',async ({page})=>{
        const homepage = new homepageLocators(page);
        await homepage.navigateToHomePage();
        await homepage.searchForProduct('t-shirt');
        await expect(page).toHaveURL('https://www.myntra.com/t-shirt?rawQuery=t-shirt');

    })


    test('click user profile test',async ({page})=>{
        const homepage = new homepageLocators(page);
        await homepage.navigateToHomePage();
        await homepage.clickUserProfile();
        await expect(page.getByText('Login / Signup')).toBeVisible();
    })

})