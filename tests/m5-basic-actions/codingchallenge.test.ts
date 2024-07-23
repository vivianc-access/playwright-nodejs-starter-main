import { test, expect } from "@playwright/test";
import { register } from "module";
import { homeTitle } from "../constants";

// check form validation reset
// click Register button and check the three validations that appear
// refresh the page
// check all validation messages have disappeared

test.use({ navigationTimeout: 8000 });

test("Check form validations reset after Refresh", async ({ page }) => {
  const RegisterButton = page.locator('//*[@id="register"]');
  const validationMessages = page.locator('//*[@class="invalid-feedback"]');
  const form = page.locator('//*[@class="needs-validation"]');

  await page.goto("/");
  await RegisterButton.click();
  await expect(validationMessages).toHaveCount(3);
  await page.reload();
  await expect(page).toHaveTitle(homeTitle);
  await expect(form).not.toHaveClass("was-validated");
});
