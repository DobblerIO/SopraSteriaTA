import type { FC } from "react";
import { fetchForecast } from "../api/WeatherFetcher";

import styles from './AppRoot.module.css';
import { DailyForecast } from "./components/DailyForecast";
import { CurrentTimeData } from "./components/CurrentTimeData";
import { mockData } from "../api/MockData";
import { convertWeatherCode } from "../api/WeatherCodeConversion";

const mockForecastData = mockData.timelines.daily.map(dayData => ({
    date: dayData.time,
    wheaterType: convertWeatherCode(dayData.values.weatherCodeAvg as number),
    temperature: dayData.values.temperatureApparentAvg as number,
}));

const mockCurrentData = {
    location: mockData.location.name,
    date: mockData.timelines.daily[0].time,
    temperature: mockData.timelines.daily[0].values.temperatureAvg as number,
    wheaterType: convertWeatherCode(mockData.timelines.daily[0].values.weatherCodeAvg as number),
};

export const AppRoot:FC = () => {
    
    return (
        <div className={ styles.container} >
            <CurrentTimeData data={mockCurrentData} />
            <DailyForecast data={mockForecastData} />
        </div>
    );
}
