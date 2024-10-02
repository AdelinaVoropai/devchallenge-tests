import { test, expect, devices } from '@playwright/test';

test.use({
  browserName: 'chromium',
  viewport: devices['Galaxy S5'].viewport, // Використовуємо spread оператор для застосування параметрів пристрою
});

test('Case #003 - No Apple Inc in Partners (Mobile View)', async ({ page }) => {
  await page.goto('https://www.devchallenge.it');

  // Перевіряємо, що "Apple Inc" немає серед партнерів
  const partnerNames = await page.$$eval('.partner-name', partners => partners.map(p => p.innerHTML));
  expect(partnerNames).not.toContain('Apple Inc');
});

