import { test } from "@playwright/test";
import { LoginPage } from "./pages/LoginPage";

test("incorrect login test", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login("WrongUser", "WrongPass");
  await loginPage.expectInvalidUsernameMessage();
});
