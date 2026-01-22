import{test,request,expect} from '@playwright/test';


test('Find tshirts',async({request})=>{
    const res =  await request.post('https://www.myntra.com/beacon/user-data?rawQuery=t-shirt');
     expect(res.ok()).toBeTruthy();

  const allvalue = await res.json();
  console.log(allvalue);
})

