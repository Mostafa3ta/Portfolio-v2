import { expect, test } from '@playwright/test'

// Example end-to-end tests: a real browser loads the pages and behaves like a visitor.

test('home page shows the name and the main sections', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('heading', { level: 1, name: 'Mostafa Mahmoud' })).toBeVisible()
  for (const id of ['experience', 'skills', 'work', 'contact']) {
    await expect(page.locator(`section#${id}`)).toBeAttached()
  }
})

test('the hero button opens the Elevent case study', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('link', { name: /Elevent case study/ }).click()
  await expect(page).toHaveURL(/\/work\/elevent$/)
  await expect(page.getByRole('heading', { level: 1, name: 'Elevent' })).toBeVisible()
})

test('no page scrolls sideways', async ({ page }) => {
  for (const path of ['/', '/work/elevent']) {
    await page.goto(path)
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth)
    expect(overflow, `horizontal overflow on ${path}`).toBeLessThanOrEqual(0)
  }
})

test('/cv redirects to the CV on Google Drive', async ({ request }) => {
  const response = await request.get('/cv', { maxRedirects: 0 })
  expect(response.status()).toBe(307)
  expect(response.headers()['location']).toContain('drive.google.com')
})
