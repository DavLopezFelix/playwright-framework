import {test, expect} from '../../fixtures/test';

const emailCases = [
    {
        name: 'simple emial',
        email: 'david@example.com'
    },
    {
        name: 'email with a dot',
        email: 'david.qa@example.com',
    },
    {
        name: 'email with a plus sign',
        email: 'david+qa@example.com',
    }
];

test.beforeEach(async ({loginPage}) => {
    await loginPage.goto();
});

for (const emailCase of emailCases) {
    test(`email field accepts ${emailCase.name}`, async({ loginPage }) => {
        await loginPage.emailInput.fill(emailCase.email);
        await expect(loginPage.emailInput).toHaveValue(emailCase.email);
    });
}