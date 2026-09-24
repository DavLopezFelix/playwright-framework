import {test, expect} from '../../fixtures/test';

test.beforeEach(async ({loginPage}) => {
    console.log('1. Ejecutando beforeEach');
    await loginPage.goto();
});

test('login form is ready', async({ loginPage }) => {

    await expect(loginPage.emailInput).toBeVisible();

});

test('email field is ediatbale', async({ loginPage }) => {
    await loginPage.emailInput.fill('fists@example.com');
    await expect(loginPage.emailInput).toHaveValue('fists@example.com');
});

test('email field starts empty', async({ loginPage }) => {
    await expect(loginPage.emailInput).toHaveValue('');
});