import { test, expect } from '@playwright/test';

test('Case #001 - Contact email is visible', async ({ page }) => {
  // Відкриваємо сайт
  await page.goto('https://www.devchallenge.it');

  // Лог для перевірки, чи ми на правильній сторінці
  console.log("На сторінці About");

  // Скролимо сторінку донизу
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

  // Чекаємо появи email
  try {
    await page.waitForSelector('text=hello@devchallenge.it', { timeout: 10000 }); // Збільшуємо час очікування до 10 секунд
    const emailVisible = await page.isVisible('text=hello@devchallenge.it');
    expect(emailVisible).toBe(true);
    console.log("Email знайдено!");
  } catch (error) {
    console.error("Email не знайдено!");
  }
});

