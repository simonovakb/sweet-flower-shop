import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test('loads successfully', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Our Blooms/);
  });

  test('displays header', async ({ page }) => {
    await page.goto('/');
    const header = page.locator('#header');
    await expect(header).toBeVisible();
  });

  test('displays footer with contacts', async ({ page }) => {
    await page.goto('/');
    const footer = page.locator('#footer');
    await expect(footer).toBeVisible();
    await expect(footer.getByText('simonova.kb@mail.ru')).toBeVisible();
  });

  test('displays all sections', async ({ page }) => {
    await page.goto('/');

    // Check main sections
    await expect(page.locator('#about')).toBeVisible();
    await expect(page.locator('#flower-gallery')).toBeVisible();
  });
});
