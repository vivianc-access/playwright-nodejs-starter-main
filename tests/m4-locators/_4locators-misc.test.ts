import { test, expect } from "@playwright/test";

test("Multiple matches fails", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("link").click();
});

test("Multiple matches - first, last nth", async ({ page }) => {
  await page.goto("/");

  const buttons = page.getByRole("button");
  console.log(await buttons.first().textContent());
  console.log(await buttons.last().textContent());
  console.log(await buttons.nth(1).textContent());
});

test("Multiple matches test - count or iterate", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Register" }).click();

  const feedback = page.locator(".invalid-feedback");
  await expect(feedback).toHaveCount(3);

  for (const message of await feedback.all()) {
    //for loop where 'all' function converts the singke locator into an array of locators
    //click, other actions
    console.log(`${await message.textContent()}`);
  }
});
