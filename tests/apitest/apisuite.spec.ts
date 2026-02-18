import{test,expect,request} from '@playwright/test';

test("verify get request",async({request})=>{
     const response = await request.get("https://jsonplaceholder.typicode.com/posts/1");
     const data = await response.json();
     console.log(data);
     expect(response.status()).toBe(200);
})


test("verift get user details",async({request})=>{

     await request.get("https://api.restful-api.dev/objects").then((response)=>{
          expect(response.status()).toBe(200);
          return response.json();
     }).then((data)=>{
          console.log(data);
          expect(data).toBeDefined();
     }).catch((error)=>{
          console.error("Error fetching user details:", error);
     });

})


test("verify single user",async({request})=>{
     await request.get("https://api.restful-api.dev/objects/7").then((response)=>{
        expect(response.status()).toBe(200);
        return response.json();

     }).then((data)=>{
          console.log(data);
          expect(data).toBeDefined();
          console.log("name of iteam:"+ data.name);
     }).catch((error)=>{
          console.error("Error fetching user details:", error);
     });

})



test("get by id and verify name",async({request})=>{
     await request.get("https://api.restful-api.dev/objects?id=3&id=5&id=10").then((response)=>{
         console.log(response.status());
         expect(response.status()).toBe(200);
         return response.json()
     }).then((data)=>{
            console.log(data);
     }).catch((error)=>{      
          console.error("Error fetching data by ID:", error);
     });
})