import { defineConfig, devices } from '@playwright/test'

// End-to-end tests (npm run test:e2e) drive a real browser against the running site.
// By default they use your dev server on http://localhost:3000 (started for you if it isn't running).
// To test the live site instead: BASE_URL=https://portfolio-v2-7p0.pages.dev npm run test:e2e
const baseURL = process.env.BASE_URL ?? 'http://localhost:3000'

export default defineConfig({
  testDir: './e2e',
  // The dev server compiles each page on its first visit, which can take a while on Windows.
  timeout: 90_000,
  use: { baseURL, navigationTimeout: 60_000 },
  projects: [
    { name: 'desktop', use: { ...devices['Desktop Chrome'] } },
    { name: 'mobile', use: { ...devices['Pixel 7'] } },
  ],
  webServer: process.env.BASE_URL
    ? undefined
    : { command: 'npm run dev', url: baseURL, reuseExistingServer: true, timeout: 120_000 },
})
