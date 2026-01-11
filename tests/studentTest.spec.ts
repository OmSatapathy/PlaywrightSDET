import{test,expect} from'@playwright/test';
import { Student } from '../page/studentRegistation';

test.beforeEach(async({page})=>{
    await page.goto('https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php');
    await page.waitForLoadState();
})

test('Student Registration Form',async({page})=>{

    const studentDetails=new Student(page);
    await studentDetails.fillStudentDetails("Suman Dash","suman@gmail.com","9876543210");

    // Assertions to verify that the fields are filled correctly
    await expect(page.locator('#name')).toHaveValue('Suman Dash');
    await expect(page.locator('#email')).toHaveValue('suman@gmail.com');

    await studentDetails.submitForm();
    await studentDetails.uploadFile('C:\\Users\\pc\\Downloads\\Interview Questions\\SQL.pdf');
  
})