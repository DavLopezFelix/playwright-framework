import {test, expect} from '../../fixtures/test';

test('user can sign out', async ({ loginPage, authenticatedDashboard, }) => {
    await  authenticatedDashboard.signOut();

    await expect(loginPage.emailInput).toBeVisible();
    await expect(loginPage.passwordInput).toBeVisible();
})
