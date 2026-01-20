import { test, expect } from "@playwright/test";

test("Navigation to A/B testing page works", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/");

  await page.getByRole("link", { name: "A/B Testing" }).click();

  const transition = page.locator("#content");
  await expect(transition).toBeVisible();
  await expect(transition).toContainText(/A\/B Test/i);
});
