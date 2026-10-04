import { test as setup, expect } from '@playwright/test';

setup('save authentication state', async ({
    loginPage, dashboardPage, page,
}) => {
    const email = process.env.TEST_EMAIL;
    const password = process.env.TEST_PASSWORD;

    if (!email || !password) {
        throw new Error('TEST_EMAIL and TEST_PASSWORD environment variables must be set.');
    }

    await loginPage.goto();
    await loginPage.SignIn(email, password);
    await expect(dashboardPage.signOutButton).toBeVisible();

    await page.context().storageState({ path: 'tests/auth/auth.json' });
})
    