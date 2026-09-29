import type { Locator, Page } from '@playwright/test';

export class DashboardPage {
    readonly page: Page;
    readonly signOutButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.signOutButton = page.getByRole('button', {name: /Sign Out/i})
    }

    async signOut(): Promise<void> {
        await this.signOutButton.click();
    }
}