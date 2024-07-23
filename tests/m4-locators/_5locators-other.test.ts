import { test } from "@playwright/test";

test("Fill test by finding checkbox and filling in open end", async ({
  page,
}) => {
  await page.goto("/");

  await page.check("#heard-about"); //here we find and check the ckeckbox directly, as it has an id selector
  await page.fill(
    "#textarea",
    "I heard about it in a discussion at the office."
  ); //here you find the OE by the id and you also filling it
  //this returns a Promise<void>
});
