import {test as base, expect } from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';
import {DashboardPage} from '../pages/DashboardPage';


type AppFixtures = {
    loginPage: LoginPage;
    dashboardPage: DashboardPage;
    authenticatedDashboard: DashboardPage;
}

export const test = base.extend<AppFixtures>({
    loginPage: async ({ page }, use) => {

        const loginPage = new LoginPage(page);
        await use(loginPage);
    },

    dashboardPage: async ({ page }, use) => {
        await use(new DashboardPage(page));
    },

    authenticatedDashboard: async ({ loginPage, dashboardPage }, use) => {
        const email = process.env.TEST_EMAIL;
        const password = process.env.TEST_PASSWORD;

        if (!email || !password) {
            throw new Error('TEST_EMAIL and TEST_PASSWORD environment variables must be set.');
        }

        await loginPage.goto();
        await loginPage.SignIn(email, password);
        
        await expect(dashboardPage.signOutButton).toBeVisible();
        
        await use(dashboardPage);
    },
});

export { expect };