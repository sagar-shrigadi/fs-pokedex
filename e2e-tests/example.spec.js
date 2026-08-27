// @ts-check
import { test, expect } from '@playwright/test';

test('front page can be opened', async ({page}) => {
  await page.goto('');
  await expect(page.getByText('ivysaur')).toBeVisible();
  await expect(page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')).toBeVisible();
})

test("user can navigate from root page to specific pokemon page", async ({page}) => {
  await page.goto('');
  // the link to charizard is visible
  await expect(page.getByRole("link",{name: "charizard"})).toBeVisible();
  // navigate to charizard's page
  await page.getByRole("link", {name: "charizard"}).click();
  // confirm successful page navigation by checking the hidden ability is present
  await expect(page.getByText("blaze")).toBeVisible();
  await expect(page.getByText("solar power")).toBeVisible()
})