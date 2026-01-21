import { test, expect } from "@playwright/test";
import { HomePage } from "./pages/HomePage";

test("Homepage loads and core content is visible", async ({ page }) => {
  const home = new HomePage(page);

  await home.goto();

  await expect(home.content).toBeVisible();
  await expect(home.content).toContainText(/Welcome to the-internet/i);
});
