/**
 * Relevant api docs: https://docs.tomorrow.io/reference/weather-forecast
 */

import { transformWeatherData } from "./DataTransformation/WeatherDataTransformer";
import type { WeatherData } from "./DataTransformation/WeatherDataTypes";
import type { ForecastDataRoot } from "./ForecastData";

export interface ForecastOptions {

    /**
     * Latitude and Longitude (Decimal degree) `location=42.3478, -71.0466`
     * City name `location=new york`
     * US zip `location=10001 US` (2-letter code based on ISO-3166)
     * UK postcode `location=SW1`
     */
    location: string;

    /**
     * Timesteps includes: hourly: "1h", daily: "1d"
     */
    timesteps: ('hourly' | 'daily')[];

    /**
     * Unit system
     */
    units: 'imperial' | 'metric';
}

export async function fetchForecast(options: ForecastOptions): Promise<WeatherData> {

    // await (new Promise((res) => {
    //     window.setTimeout(res, 1000);
    // }))
    // return transformWeatherData(mockData);

    const {
        location = 'Amsterdam',
        timesteps = ['1h', 'daily'],
        units = 'metric',
    } = options;

    const url = new URL('https://api.tomorrow.io/v4/weather/forecast');

    url.searchParams.append('location', location);
    url.searchParams.append('units', units);
    timesteps.forEach(timestep => {
        url.searchParams.append('timesteps', timestep);
    });

    url.searchParams.append('apikey', import.meta.env.VITE_TOMORROWIO_API_KEY);

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'accept-encoding': 'deflate, gzip, br',
            accept: 'application/json',
        }
    })

    const json = await response.json() as ForecastDataRoot;

    return transformWeatherData(json);

}