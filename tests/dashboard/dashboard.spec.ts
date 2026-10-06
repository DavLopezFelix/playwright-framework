import { test, expect} from '../../fixtures/test';

test('authenticated user can access dashboard', async ({
    page,
    dashboardPage,
}) => {
    await page.goto('/client/#/dashboard',{
        waitUntil: 'domcontentloaded',
    });

    await expect(page).toHaveURL(/#\/dashboard(?:\/|$)/);
    await expect( dashboardPage.signOutButton).toBeVisible();
})
