import { test } from '@playwright/test';

/*
test('Test Description @Tag', async ({ page }) => {
    page.locator("xpath/CSS");

    page.getByText("text of element");

    page.getByTestId("test-id");

});
*/

test('Press Method', async ({ page }) => {
   
    await page.goto("https://www.google.com/");

    let searchBox = page.locator("//textarea[@id='APjFqb']");

    await searchBox.fill("CYDEO SCHOOL");

    // pause for 3 seconds.
      
    await page.waitForTimeout(3000);

    // await searchBox.press("Control+A");
  //  await searchBox.press("Backspace");
   await searchBox.press("Enter");


    await page.waitForTimeout(3000);

});



test.describe('Test Group', () => {
  test('1', async ({ page }) => {
    // Empty test function
  });

  test('2', async ({ page }) => {
    // Empty test function
  });

  test('3', async ({ page }) => {
    // Empty test function
  });

  test('4', async ({ page }) => {
    // Empty test function
  });

  test('5', async ({ page }) => {
    // Empty test function
  });
});

