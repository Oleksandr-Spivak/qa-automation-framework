import { Page, Locator, expect } from "@playwright/test";

export class HomePage {
  readonly page: Page;
  readonly content: Locator;
  readonly abTestingLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.content = page.locator("#content");
    this.abTestingLink = page.getByRole("link", { name: "A/B Testing" });
  }

  async goto() {
    await this.page.goto("https://the-internet.herokuapp.com/");
  }

  async goToABTesting() {
    await this.abTestingLink.click();
  }

  async expectOnABTestingPage() {
    await expect(this.content).toBeVisible();
    await expect(this.content).toContainText(/A\/B Test/i);
  }
}
