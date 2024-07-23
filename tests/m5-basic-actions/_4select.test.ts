import { test, expect } from "@playwright/test";

test("Select test", async ({ page }) => {
  await page.goto("/savings.html");

  const deposit = page.getByTestId("deposit");
  const period = page.getByTestId("period");
  const result = page.getByTestId("result");
});
