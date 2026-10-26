import { test, expect } from '@playwright/test';

test('login through API and access dashboard', async ({ request, page }) => {
    const email = process.env.TEST_EMAIL;
    const password = process.env.TEST_PASSWORD;

    if(!email || !password) {
            throw new Error('TEST_EMAIL and TEST_PASSWORD environment variables must be set.');
        }

    //1. Authenticate through API
     const response = await request.post('/api/ecom/auth/login', {
        data: {
            userEmail: email,
            userPassword: password,
        },
    });

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body).toHaveProperty('token');
    expect(body.token).toBeTruthy();

    //2. Inject the token before the application loads
    await page.addInitScript((token: string)=> {
        window.localStorage.setItem('token', token);
        }, body.token);

        await page.goto('/client');

        await expect(
            page.getByRole('button', {name: /sign out/i})).toBeVisible();
})