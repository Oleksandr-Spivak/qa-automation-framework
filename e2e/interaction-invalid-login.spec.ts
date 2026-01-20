import { test, expect } from "@playwright/test";

test("incorrect login test", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/login");

  await page.getByLabel("Username").fill("WrongUser");
  await page.getByLabel("Password").fill("WrongPass");
  await page.getByRole("button", { name: "Login" }).click();

  const alert = page.locator("#flash");
  await expect(alert).toBeVisible();
  await expect(alert).toContainText(/your username is invalid/i);
});

