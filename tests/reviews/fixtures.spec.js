import { test } from "@playwright/test";

test("The context fixture", async ({ context }) => {
  // one instance of browser application

  let page1 = await context.newPage();
  let page2 = await context.newPage();
  let page3 = await context.newPage();
  let page4 = await context.newPage();

  await page1.waitForTimeout(3000);

  await page1.bringToFront(); // explicitly switches to the tab1
  await page1.goto("https://www.google.com/");
  await page1.waitForTimeout(3000);

  await page2.bringToFront(); // explicitly switches to the tab2
  await page2.goto("https://www.linkedin.com/");
  await page2.waitForTimeout(3000);

  await page3.bringToFront(); // explicitly switches to the tab3
  await page3.goto("https://www.facebook.com/");
  await page3.waitForTimeout(3000);

  await page4.bringToFront(); // explicitly switches to the tab4
  await page4.goto("https://www.github.com/");
  await page4.waitForTimeout(3000);
});

test("", async ({ browser }) => {
    
  let context1 = await browser.newContext();
  let page1 = await context1.newPage();
  let page2 = await context1.newPage();

  let context2 = await browser.newContext();
  let page3 = await context2.newPage();
  let page4 = await context2.newPage();

  await page1.waitForTimeout(3000);

  await page1.bringToFront();
  await page1.goto("https://www.google.com/");
  await page1.waitForTimeout(3000);

  await page2.bringToFront();
  await page2.goto("https://www.linkedin.com/");
  await page2.waitForTimeout(3000);

  await page3.bringToFront();
  await page3.goto("https://www.facebook.com/");
  await page3.waitForTimeout(3000);

  await page4.bringToFront();
  await page4.goto("https://www.github.com/");
  await page4.waitForTimeout(3000);


});
