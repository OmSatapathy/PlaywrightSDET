import { test, expect, request } from '@playwright/test'


let bookingID: string
let authtoken: string


test.describe.serial('Verify booking api suite', async () => {
    test('create auth token', async ({ request }) => {

        const payload = {
            "username": "admin",
            "password": "password123"
        }

        const response = await request.post('https://restful-booker.herokuapp.com/auth', {
            headers: { "Content-Type": "application/json" },
            data: payload
        });

        const responseJson = await response.json();
        authtoken = responseJson.token;

    })


    test('Fetch booking details', async ({ request }) => {

        const response = await request.get(`https://restful-booker.herokuapp.com/booking`)
        const responsejson = await response.json()

        responsejson.forEach((element: any) => {

            if (element == 1755) {
                console.log(element)
                return;
            }


        });

    })



    test('create a booking', async ({ request }) => {

        const payload = {
            "firstname": "Jim",
            "lastname": "Brown",
            "totalprice": 111,
            "depositpaid": true,
            "bookingdates": {
                "checkin": "2018-01-01",
                "checkout": "2019-01-01"
            },
            "additionalneeds": "Breakfast"
        }
        const createdResponse = await request.post(`https://restful-booker.herokuapp.com/booking`, {
            headers: { "Content-Type": "application/json" },
            data: payload
        })

        const createdResponseJson = await createdResponse.json()
        bookingID = createdResponseJson.bookingid
        console.log(bookingID)

    })


    test('find single booking', async ({ request }) => {

        const response = await request.get('https://restful-booker.herokuapp.com/booking/' + bookingID)
        if (response.ok()) {
            console.log(await response.json())
        } else {
            console.log(`Booking with id ${bookingID} not found. Status: ${response.status()}`)
        }
    })


    test(`delete booking`, async ({ request }) => {

        const deletedrespose = await request.delete(`https://restful-booker.herokuapp.com/booking/` + bookingID, {
            headers: { "Content-Type": "application/json", "Cookie": "token=" + authtoken }
        })

       

        expect(await deletedrespose.status()).toBe(201)

    })
})
