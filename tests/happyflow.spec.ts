import { test, expect } from '@playwright/test';
import { mockData } from './ForecastResponseDataMock';

test('should display weather data correctly on a successful API response', async ({ page }) => {

    await page.route('**/api.tomorrow.io/v4/weather/forecast*', async (route) => {
        await route.fulfill({
            status: 200,
            contentType: 'application/json',
            json: mockData
        });
    });

    await page.goto('http://localhost:5173/');

    await expect(page.getByTestId('current-location')).toContainText('Amsterdam');
    await expect(page.getByTestId('current-temperature')).toContainText('23°');
    await expect(page.getByTestId('current-date')).toContainText('Wed, Jul 15, 2026');
    await expect(page.getByTestId('current-weather-type')).toContainText('Sun');

});
