import { test, expect } from "@playwright/test";

test("Fill DOB with date", async ({ page }) => {
  await page.goto("/");
  await page.getByLabel("First name").fill("Andrejs");
  await page.getByLabel("Date of birth").fill("2023-10-10");
});

test("Clicking demo", async ({ page }) => {
  const Rbtn = page.getByRole("button", { name: "Register" }); //loop created to have 5 clicks
  for (let i = 0; i < 5; i++) {
    await Rbtn.click();
  }

  await Rbtn.click({ clickCount: 5 }); //method that does same thing as above loop
  await Rbtn.click({ button: "right" });
  await Rbtn.dblclick();
});
