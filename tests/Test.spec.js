import { test, expect } from '@playwright/test';

test('verify links under ul tag are displayed and enabled', async ({ page }) => {
  // Step 1: Browser is opened via Playwright test runner
  // Step 2: Navigate to the page
  await page.goto('https://practice.cydeo.com/');

  // Step 3: Check the title
  await expect(page).toHaveTitle('Practice');

  // Step 4 & 5: Locate all links under the ul and verify count
  const allLinks = page.locator('//ul[@class="list-group"]//a');

  await expect(allLinks).toHaveCount(50);

  // Step 6: Verify all links are visible and enabled
  const linksCount = await allLinks.count();
  for (let i = 0; i < linksCount; i++) {
    const link = allLinks.nth(i);
    await expect(link).toBeVisible();
    await expect(link).toBeEnabled();
  }
});
