import { test, expect } from '@playwright/test';

test('should display weather data correctly on a successful API response', async ({ page }) => {

    await page.route('**/api.tomorrow.io/v4/weather/forecast**', async (route) => {
        await route.fulfill({
            status: 401,
            contentType: 'application/json',
            json: {
                error: 'Error'
            }
        });
    });

    await page.goto('http://localhost:5173/');

    await expect(page.locator('#root')).toHaveText('Oops something went wrong');

});
