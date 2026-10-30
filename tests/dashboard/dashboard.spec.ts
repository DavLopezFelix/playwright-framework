import { test, expect} from '../../fixtures/test';

test('authenticated user can access dashboard',
    {tag: '@smoke'},
    async ({
    page,
    dashboardPage,
}) => {
    await test.step('Open dashboard', async () => {
        await page.goto('/client/#/dashboard',{
            waitUntil: 'domcontentloaded',
        });
    });

    await test.step('Verify authenticated dashboard', async () => {
        await expect(page).toHaveURL(/#\/dashboard123(?:\/|$)/);
        await expect(dashboardPage.signOutButton,
        'The sign-out button should be visible for an authenticated user'
        ).toBeVisible();
    })

});