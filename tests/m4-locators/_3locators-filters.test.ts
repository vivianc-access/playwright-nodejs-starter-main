import { test } from "@playwright/test";

test("Filtering demo", async ({ page }) => {
  await page.goto("/savings.html");

  //count how many rows
  const rows = page.getByRole("row");
  console.log(await rows.count());

  //get row names
  const row = page.getByRole("row").filter({ hasText: "Competition" });
  console.log(await row.textContent());

  //get a specific column from a row
  const cell = page
    .getByRole("row")
    .filter({ hasText: "Competition" })
    .getByRole("cell")
    .nth(1); //nth1 is the first child of element cell

  console.log(await cell.textContent()); //display nth 1
  console.log(await cell.count());

  console.log(
    await page
      .getByRole("row")
      .filter({ hasText: "Competition" })
      .getByRole("cell")
      .count() //count how many cells there are for row = Competition
  );
});
