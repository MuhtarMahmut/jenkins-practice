// @ts-check
import { defineConfig, devices } from '@playwright/test';


export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 1,
  workers: 10,
  reporter: 'html',
  use: {
    trace: 'retain-on-failure',
    screenshot: 'on-first-failure',
    video: 'on-first-retry',
  },

  projects: [


    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'],
        viewport: {width: 1900, height: 1080} 
      },
    },

  /*
    
  {
      name: 'Google Chrome',
      use: { 
        ...devices['Desktop Chrome'],
        channel: 'chrome',
        viewport: {width: 1900, height: 1080} 
      },
    },
 
    {
      name: 'firefox',
      use: { 
        ...devices['Desktop Firefox'],
        viewport: {width: 1850, height: 1000} 
       },
    },

    {
      name: 'webkit',
      use: { 
        ...devices['Desktop Safari'],
        viewport: {width: 1850, height: 1000}  
      },
    },
*/
   
    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

  ],

});

