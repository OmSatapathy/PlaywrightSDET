import{test,expect} from'@playwright/test';
import { userInfo } from 'node:os';

test('verify amazon footer links',async({page})=>{

     await page.goto('https://www.amazon.in/')
     await page.locator('#navFooter').scrollIntoViewIfNeeded();

     const links =await page.$$("//div[@class='navFooterVerticalRow navAccessibility']//a")
     console.log(links.length);

     for(const link of links ){
        const linkText =await link.textContent();
        console.log(linkText);

        if(linkText?.trim().includes('Your Account')){
            await link.click();
            await page.waitForLoadState('domcontentloaded');
            break;
        }

        console.log(await page.title());
     }
})


test(`datadriven test for arrays`, async ({ page }) => {

    await page.goto('https://www.saucedemo.com/')
   const users = [
    
    {username:'standard_user', password:'secret_sauce'},
    {username:'locked_out_user', password:'secret_sauce'},
    {username:'problem_user', password:'secret_sauce'},
    {username:'performance_glitch_user', password:'secret_sauce'}
   ]


   for(const {username, password} of users){

    console.log(`Testing with username: ${username} and password: ${password}`);

    if(username === 'locked_out_user'){
        await page.locator('#user-name').fill(username);
        await page.locator('#password').fill(password);
        await page.locator('[value="Login"]').click();
        await page.waitForLoadState('domcontentloaded');

        await page.waitForTimeout(2000);
   }   
   }
})