import{test,request, expect} from '@playwright/test';

test("verify all parameter from get api", async({request})=>{

    await request.get("https://fake-json-api.mock.beeceptor.com/users",{headers:{"Content-Type":"application/json"}}).then((response)=>{
        expect(response.status()).toBe(200);
        return response.json();
    }).then((data)=>{
        console.log(data);
        expect(data).toBeDefined();
    }).catch((error)=>{
        console.error("Error fetching user details:",error);
    });
})



test("get and verify customer details", async({request})=>{

    await request.get("https://fake-json-api.mock.beeceptor.com/customers",{headers:{"accept":"application/json"}}).then((response)=>{
        const responseJson = response.json();
         return responseJson;
    }).then((data)=>{
        console.log(data);
        data.forEach((customer:any) => {
            expect(customer).toHaveProperty("id");
            expect(customer).toHaveProperty("name");
            expect(customer).toHaveProperty("email");
            console.log(`Customer ID: ${customer.id}, Name: ${customer.name}, Email: ${customer.email}`);
        });
        expect(data).toBeDefined();   
    }).catch((error)=>{
        console.error("Error fetching customer details:",error);
    });
})