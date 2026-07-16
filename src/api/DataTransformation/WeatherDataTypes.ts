import type { WeatherType } from "./WeatherCodeConversion";

export interface WeatherData {
    currentTimeData: CurrentTimeData;
    dailyForecastData: DailyForecastData[];
    // hourlyForecastData HourlyForecastData: 
}

export interface CurrentTimeData {
    date: string;
    location: string;
    temperature: number;
    wheaterType: WeatherType;
}

export interface DailyForecastData {
    date: string;
    wheaterType: WeatherType;
    temperature: number;
}

// export interface HourlyForecastData {
// 
// }
