import { test, expect } from "@playwright/test";
import { homeTitle, savingsTitle } from "../constants";

test("Back, forward, reload (refresh) test", async ({ page }) => {
  await page.goto("/");
  await page.goto("/savings.html");
  await expect(page).toHaveTitle(savingsTitle);

  await page.goBack();
  await expect(page).toHaveTitle(homeTitle);

  await page.goForward();
  await expect(page).toHaveTitle(savingsTitle);

  await page.reload();
  await expect(page).toHaveTitle(savingsTitle);
});

test("Navigation test", async ({ page }) => {
  await page.goto("/", { waitUntil: "load" }); // 'load' means the page is ready to be used. Can be tested to see performance of the page load time
  await expect(page).toHaveTitle(homeTitle);
});

////////////////////////////////////////timeout can be set to affect all tests in a file like so, instead of setting it at line level, e.g. 30, 33
test.use({ navigationTimeout: 8000 });

test("Load speed while navigating", async ({ page }) => {
  await page.goto("/savings.html", { timeout: 5000 }); //setting a timeout time of 5 s
  await expect(page).toHaveTitle(savingsTitle);

  await page.goBack({ timeout: 8000 }); //if time is > than the one set the performance needs optimising
  await expect(page).toHaveTitle(homeTitle);

  await page.goForward();
  await expect(page).toHaveTitle(savingsTitle);

  await page.reload();
  await expect(page).toHaveTitle(savingsTitle);
});
