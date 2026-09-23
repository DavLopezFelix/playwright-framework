import {test, expect} from '../../fixtures/test';

test.describe('Login Page', () => {

    test('login form is ready', async({ loginPage }) => {
        await loginPage.goto();

        await expect(loginPage.emailInput).toBeVisible();
        await expect(loginPage.passwordInput).toBeVisible();
        await expect(loginPage.signInButton).toBeVisible();
    });

    test('user can login with valid credentials', async ({ loginPage }) => {

        await loginPage.goto();
        await loginPage.SignIn('test@example.com', 'password123');

        await expect(loginPage.errorMessage).toContainText('Incorrect email or password');
    });

    // test('user cannot login with invalid credentials', async ({ page }) => {
    //     //preparar
    // });
});
        
