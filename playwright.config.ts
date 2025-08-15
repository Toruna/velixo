// playwright.config.ts
import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';

// Load environment variables from .env into process.env
dotenv.config();

export default defineConfig({
  testDir: './tests',
  timeout: 120_000,
  expect: { timeout: 10_000 },

  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 2 : undefined,

  reporter: [['html', { outputFolder: 'playwright-report', open: 'never' }]],
  outputDir: 'test-results',

  use: {
    baseURL: 'https://docs.google.com/spreadsheets',
    browserName: 'chromium',
    headless: false,
    viewport: { width: 1366, height: 820 },
    video: 'on',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },

  testMatch: ['**/tests/**/*.spec.ts'],

  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
  ],
});