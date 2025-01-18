import { firefox, test, webkit } from '@playwright/test';

test('', async () => {
  
     let firefoxBrowser = await firefox.launch(); // browser
     let firefoxContext = await firefoxBrowser.newContext(); // context
     let firefoxPage1 = await firefoxContext.newPage();
     let firefoxPage2 = await firefoxContext.newPage();

     await firefoxPage1.goto("https://www.google.com/");
     await firefoxPage1.waitForTimeout(3000);

     await firefoxPage2.goto("https://www.linkedin.com/");
     await firefoxPage2.waitForTimeout(3000);


});