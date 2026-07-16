import type { FC } from "react";
import { fetchForecast } from "../api/WeatherFetcher";

import styles from './AppRoot.module.css';
import { DailyForecast } from "./components/DailyForecast";
import { CurrentTimeData } from "./components/CurrentTimeData";
import { mockData } from "../api/MockData";
import { convertWeatherCode } from "../api/DataTransformation/WeatherCodeConversion";
import { transformWeatherData } from "../api/DataTransformation/WeatherDataTransformer";

const data = transformWeatherData(mockData);

export const AppRoot:FC = () => {
    
    return (
        <div className={ styles.container} >
            <CurrentTimeData data={data.currentTimeData} />
            <DailyForecast data={data.dailyForecastData} />
        </div>
    );
}
