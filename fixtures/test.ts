import {test as base } from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';

type AppFixtures = {
    loginPage: LoginPage;
}

export const test = base.extend<AppFixtures>({
    loginPage: async ({ page }, use) => {

        console.log(`SETUP: ${test.info().title}`);

        const loginPage = new LoginPage(page);
        await use(loginPage);

        console.log(`TEARDOWN: ${test.info().title}`);
    },
});

export { expect } from '@playwright/test';