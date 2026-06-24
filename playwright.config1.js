// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { trace } from 'node:console';



/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  testDir: './tests',
  //retries: 1, //retries the failed test or flaky tests
  timeout: 40*1000,      // overriding default timeout and this timeout is defined for overall test
  expect : {
    timeout: 5000,  // timeout for every assertion in test is 5 sec
  },
  reporter : 'html',
  projects: [
    {
      name: "Safari",
      use: {
      browserName : 'webkit',  //firefox webengine
      headless: true,
      screenshot: 'off',
      trace: 'off', //off or retain-on-failure or on
      //### Additional Properties####
      //...devices['iPhone 11 landscape']
      //ignoreHttpsErrors: true,  //this bypass the ssl certificate error if present
      //permissions: ['geolocation'],

   
      },
    },
    
    {
      name: "Chrome",
      use: {
      browserName : 'chromium',  //safari webengine
      headless: false,
      screenshot: 'on',
      video: 'retain-on-failure',
      trace: 'off', //off or retain-on-failure or on // traces are logs
      viewport: {width: 720, height: 720}
   
      },

    }
  ]
     
});
module.exports = config

