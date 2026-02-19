import { test, request, expect } from '@playwright/test';

test("get customer all details", async ({ request }) => {

    await request.get("https://api.restful-api.dev/objects", { headers: { accept: "application/json" } }).then((response) => {
        const responseJson = response.json();
        return responseJson;
    }).then((data) => {
        console.log(data);
    }).catch((error) => {
        console.error("Error fetching customer details:", error);
    });
})


test("verify objects response", async ({ request }) => {

    const response = await request.get(
        "https://api.restful-api.dev/objects"
    );

    expect(response.status()).toBe(200);

    const responsejson = await response.json();

    // Validate it's an array
    expect(Array.isArray(responsejson)).toBeTruthy();

    responsejson.forEach((element: any) => {

        // Validate mandatory properties
        expect(element).toHaveProperty("id");
        expect(element).toHaveProperty("name");
        expect(element).toHaveProperty("data");

        console.log(`ID: ${element.id}, Name: ${element.name}`);

        // Handle cases where data is null
        if (element.data !== null) {
            expect(typeof element.data).toBe("object");
            console.log("Data:", element.data);
        }
    });
});
