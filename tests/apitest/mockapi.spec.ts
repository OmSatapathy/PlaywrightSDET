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