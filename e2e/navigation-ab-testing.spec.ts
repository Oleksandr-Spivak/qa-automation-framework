import { test } from "@playwright/test";
import { HomePage } from "./pages/HomePage";

test("Navigation to A/B testing page works", async ({ page }) => {
  const home = new HomePage(page);

  await home.goto();
  await home.goToABTesting();

  await home.expectOnABTestingPage();
});
