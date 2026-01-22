import { test, expect } from '@playwright/test';
import { log } from 'node:console';
import { request } from 'node:http';

const baseURL = 'https://api.restful-api.dev';
var id: string;

test.describe.serial('API test', async () => {
    test('get item details', async ({ request }) => {

        const response = await request.get(`${baseURL}/objects`);

        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(200);

        const body = await response.json();

        // Verify response is array
        expect(Array.isArray(body)).toBeTruthy();

        body.forEach((item: any) => {
            expect(item).toHaveProperty('id');
            expect(item).toHaveProperty('name');
            expect(item).toHaveProperty('data');
        });

    });


    test('List by object id', async ({ request }) => {


        const response = await request.get(`${baseURL}/objects?id=3&id=5&id=10`)

        const jsonres = await response.json()

        expect(response.status()).toBe(200)

        expect(Array.isArray(jsonres)).toBeTruthy()

        jsonres.forEach((item: any) => {

            console.log(item.data)
            expect(item).toHaveProperty('data')

        })

    })


    test('single object', async ({ request }) => {

        const response = await request.get(`${baseURL}/objects/7`)

        const body = await response.json()

        expect(response.status()).toBe(200)

        expect(body.name).toBe('Apple MacBook Pro 16')
    })


    test('Add new item', async ({ request }) => {

        interface Payload {
            name: string;
            data: {
                year: number;
                price: number;
                "CPU model": string;
                "Hard disk size": string;
            };
        }

        const payload: Payload = {
            name: "Apple MacBook Pro 16",
            data: {
                year: 2019,
                price: 1849.99,
                "CPU model": "Intel Core i9",
                "Hard disk size": "1 TB"
            }
        };

        const response = await request.post(`${baseURL}/objects`, {
            data: payload,
        });

        expect(response.ok()).toBeTruthy();
        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('id');
        expect(responseBody.name).toBe(payload.name);

        id = await responseBody.id;
        console.log(responseBody)

    })


    test('Update item value', async ({ request }) => {

        interface Payload {
            name: string,
            data: {
                year: number,
                price: number,
                "CPU model": string,
                "Hard disk size": string,
                "color": string

            }
        }


        const payLoad: Payload = {
            name: " lenevo laptop",
            data: {
                year: 2025,
                price: 24000,
                "CPU model": " Octa core",
                "Hard disk size": "1TB",
                "color": "yellow"
            }

        };


        const response = await request.put(`${baseURL}/objects/${id}`, {
            data: payLoad,
        })

        //   expect(response.status()).toBe(201)



        console.log(await response.json())
        const body = await response.text();
        expect(body).toContain('Octa core');

    })
})

