import { test, expect, request } from '@playwright/test';
let id: string;

test.describe.serial('API Suite', () => {

    test("verify get request", async ({ request }) => {
        const response = await request.get("https://jsonplaceholder.typicode.com/posts/1");
        const data = await response.json();
        console.log(data);
        expect(response.status()).toBe(200);
    })


    test("verift get user details", async ({ request }) => {
        await request.get("https://api.restful-api.dev/objects").then((response) => {
            expect(response.status()).toBe(200);
            return response.json();
        }).then((data) => {
            console.log(data);
            expect(data).toBeDefined();
        }).catch((error) => {
            console.error("Error fetching user details:", error);
        });
    })


    test("verify single user", async ({ request }) => {
        await request.get("https://api.restful-api.dev/objects/7").then((response) => {
            expect(response.status()).toBe(200);
            return response.json();
        }).then((data) => {
            console.log(data);
            expect(data).toBeDefined();
            console.log("name of iteam:" + data.name);
        }).catch((error) => {
            console.error("Error fetching user details:", error);
        });
    })



    test("get by id and verify name", async ({ request }) => {
        await request.get("https://api.restful-api.dev/objects?id=3&id=5&id=10").then((response) => {
            console.log(response.status());
            expect(response.status()).toBe(200);
            return response.json()
        }).then((data) => {
            console.log(data);
        }).catch((error) => {
            console.error("Error fetching data by ID:", error);
        });
    })


    test("post request to create new user", async ({ request }) => {
        await request.post("https://api.restful-api.dev/objects", {
            data: {
                "name": "Apple MacBook Pro 16",
                "data": {
                    "year": 2019,
                    "price": 1849.99,
                    "CPU model": "Intel Core i9",
                    "Hard disk size": "1 TB"
                }
            }
        }).then((response) => {
            expect(response.status()).toBe(200);
            return response.json();
        }).then((data) => {
            console.log(data);
            id = data.id;
            console.log("ID of the created user: " + id);
        });
    })


    test("put request to update user details", async ({ request }) => {
        await request.put(`https://api.restful-api.dev/objects/${id}`, {
            data: {
                "name": "Apple MacBook Pro 16 Updated",
                "data": {
                    "year": 2020,
                    "price": 1999.99,
                    "CPU model": "Intel Core i10",
                    "Hard disk size": "2 TB"
                }
            }
        }).then((response) => {
            // expect(response.status()).toBe(200);
            return response.json();
        }).then((data) => {
            console.log(data);
        }); 
    })

    test("delete request to delete user", async ({ request }) => {
        await request.delete(`https://api.restful-api.dev/objects/${id}`).then((response) => {
            expect(response.status()).toBe(200);
        }).catch((error) => {
            console.error("Error deleting user:", error);
        });
    })
});