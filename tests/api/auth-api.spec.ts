import { test, expect } from '@playwright/test';

test('login API returns an authentication token', async ({ request }) => {
    const email = process.env.TEST_EMAIL;
    const password = process.env.TEST_PASSWORD;

    if (!email || !password) {
        throw new Error('TEST_EMAIL and TEST_PASSWORD environment variables must be set.');
    }

    const response = await request.post('/api/ecom/auth/login', {
        data: {
            userEmail:email,
            userPassword: password,
        },
    })

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body).toHaveProperty('token');
    expect(body.token).toBeTruthy();

})