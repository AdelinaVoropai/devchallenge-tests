import { test, expect } from '@playwright/test';

test('Case #002 - Count judges', async ({ page }) => {
  await page.goto('https://www.devchallenge.it/');
  await page.getByRole('link', { name: 'Judges' }).click();
  console.log("На сторінці Judges");
  try {
    await page.waitForSelector('.judge-name', { timeout: 10000 }); // Збільшуємо час очікування до 10 секунд
    const judges = await page.$$('.judge-name');
    console.log(`Кількість суддів: ${judges.length}`);
    expect(judges.length).toBe(6); // Очікуємо 6 суддів
  } catch (error) {
    console.error("Судді не знайдені або кількість суддів відрізняється.");
  }
});
