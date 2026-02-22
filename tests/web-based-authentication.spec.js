import { test } from '@playwright/test';

test('Bypass authentication by embedding the credentials in the URL', async ({ page }) => {

    // https://username:password@practice.cydeo.com/basic_auth
    await page.goto("https://admin:admin@practice.cydeo.com/basic_auth");

    await page.waitForTimeout(3000);

  
});

test('Bypass authentication by encoding the credentials base64 format', async ({ page }) => {
    
    let encodedCredential = Buffer.from("admin:admin").toString("base64");

    await page.setExtraHTTPHeaders({'Authorization': `Basic ${encodedCredential}`});

    page.goto("https://practice.cydeo.com/basic_auth");

    await page.waitForTimeout(3000);

});