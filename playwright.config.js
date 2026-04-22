// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { trace } from 'node:console';



/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  testDir: './tests',
  timeout: 40*1000,      // overriding default timeout and this timeout is defined for overall test
  expect : {
    timeout: 5000,  // timeout for every assertion in test is 5 sec
  },
  reporter : 'html',

  use: {
    browserName : 'chromium',
    headless: false,
    screenshot: 'on',
    trace: 'on' //off or retain-on-failure or on
   
  },
});
module.exports = config

