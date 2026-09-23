import type {Locator, Page} from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly signInButton: Locator;
  readonly errorMessage: Locator;
  
  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.locator('#userEmail');
    this.passwordInput = page.locator('#userPassword');
    this.signInButton = page.locator('input[type="submit"]');
    this.errorMessage = page.locator('#toast-container');
  }

  async goto(): Promise<void> {
    await this.page.goto(
        '/client',
    { waitUntil: 'domcontentloaded' });

    await this.emailInput.waitFor({ state: 'visible' });
  }

  async SignIn(email: string, password: string): Promise<void> {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.signInButton.click();
    }
}