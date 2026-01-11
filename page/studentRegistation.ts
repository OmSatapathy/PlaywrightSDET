import { Page,Locator } from "@playwright/test";
export class Student{

    private page:Page;
    private firwstNameInput:Locator;
    private emasilInput:Locator;
    private gender:Locator;
    private mobileNumber:Locator;
    private dateOfBirthInput:Locator;
    private subjectsInput:Locator;
    private hobbies:Locator;

    private uplaodFile:Locator;
    private submitButton:Locator;

    constructor(page:Page){
        this.page=page;
        this.firwstNameInput=page.locator('#name');
        this.emasilInput=page.locator('#email');    
        this.gender=page.locator("//input[@type='radio']");
        this.mobileNumber=page.locator('#mobile');
        this.dateOfBirthInput=page.locator('#dob');
        this.subjectsInput=page.locator('#subjectsInput');
        this.hobbies=page.locator("//input[@type='checkbox']");
        this.uplaodFile=page.locator('//input[@type="file"]');
        this.submitButton=page.locator("//input[@type='submit']");
    }


    async fillStudentDetails(firstName:string,email:string,mobile:string){
        await this.firwstNameInput.fill(firstName);
        await this.emasilInput.fill(email);
        await this.mobileNumber.fill(mobile);
       
    }

    async submitForm(){
         await this.gender.nth(1).click();
        await this.hobbies.nth(2).check();
    }

    async uploadFile(filePath:string){
        await this.uplaodFile.setInputFiles(filePath);
        await this.submitButton.click();
    }




} 