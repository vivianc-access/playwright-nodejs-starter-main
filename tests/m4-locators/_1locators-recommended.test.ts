import { test, expect } from "playwright/test";

test("Recommended built-in locators examples", async ({ page }) => {
  await page.goto("");
  const firstname = page.getByLabel("First name"); // saving the selector in a constat if needs to be used multiple times
  await firstname.fill("Sofia");
  await firstname.clear();

  await page.getByLabel("First name").fill("Sofia"); // chaining the user action if the selector is only used once; the await is used for the action 'fill'

  await page.getByRole("button", { name: "Register", exact: true }).click(); // we can make the locator case sensitive and we need the whole string to match so we use 'EXACT'; in this case, make sure string letter are upper if needed

  const warning = page.getByText("Valid last name is required");
  await expect(warning).toBeVisible();
});
