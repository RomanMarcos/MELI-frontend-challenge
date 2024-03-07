const request = require('supertest');
const app = require('../app');

describe('API response with signature', () => {

    test('The API response for /api/items path should have an author object in the body with a signature', async() => {
        const { body } = await request(app).get('/api/items?search=pantalones').expect(200);
        expect(body.apiResponse).toBeDefined();
        expect(body.apiResponse.payload.author).toBeDefined();
        expect(body.apiResponse.payload.author.name).toBe('Marcos Esteban');
        expect(body.apiResponse.payload.author.lastname).toBe('Roman');
    });

    test('The API response for /api/items/:id path should have an author object in the body with a signature', async() => {
        const { body } = await request(app).get('/api/items/123').expect(200);
        expect(body.apiResponse).toBeDefined();
        expect(body.apiResponse.payload.author).toBeDefined();
        expect(body.apiResponse.payload.author.name).toBe('Marcos Esteban');
        expect(body.apiResponse.payload.author.lastname).toBe('Roman');
    });
});