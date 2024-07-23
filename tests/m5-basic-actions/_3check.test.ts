import { test, expect } from "@playwright/test";

test("Checkbox or radio button test", async ({ page }) => {
  await page.goto("/");
  const checkbox = page.getByRole("checkbox");
  const textbox = page.locator("#textarea");
  const messagetextbox = "From a website";

  await checkbox.check();

  await textbox.fill(messagetextbox);

  await expect(textbox).toHaveValue(messagetextbox);
});
