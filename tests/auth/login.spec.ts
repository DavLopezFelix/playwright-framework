import {test, expect} from '../../fixtures/test';

test.describe('Login Page', () => {

    test('login form is ready', async({ loginPage }) => {
        await loginPage.goto();

        await expect(loginPage.emailInput).toBeVisible();
        await expect(loginPage.passwordInput).toBeVisible();
        await expect(loginPage.signInButton).toBeVisible();
    });

    test('user can login with valid credentials', async ({ loginPage, page }) => {

        const email = process.env.TEST_EMAIL;
        const password = process.env.TEST_PASSWORD;

        if (!email || !password) {
            throw new Error('TEST_EMAIL and TEST_PASSWORD environment variables must be set.');
        }

        await loginPage.goto();
        await loginPage.SignIn(email, password);
        
        await expect(page).toHaveURL(/#\/dashboard(?:\/|$)/);
    });

    // test('user cannot login with invalid credentials', async ({ page }) => {
    //     //preparar
    // });
});
        
