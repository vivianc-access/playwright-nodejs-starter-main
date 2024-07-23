import { test, expect } from "@playwright/test";

test("Simple assertions", async () => {
  expect("a").toEqual("a");
  expect(2).toBeLessThan(3);
  expect(null).toBeFalsy();
});

test("Test with simple auto-retrying assertions", async ({ page }) => {
  await page.goto("http://localhost:3000/index.html/");

  await expect(page.getByTestId("location")).toContainText("New York");

  await expect(page).toHaveTitle("Credit Association");
  await expect(page).toHaveURL("http://localhost:3000/index.html/");
});
