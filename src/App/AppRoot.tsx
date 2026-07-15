import type { FC } from "react";
import { fetchForecast } from "../api/WeatherFetcher";

import styles from './AppRoot.module.css';
import { DailyForecast } from "./components/DailyForecast";
import { CurrentTimeData } from "./components/CurrentTimeData";

fetchForecast({
    location: 'Amsterdam',
    timesteps: ['daily'],
    units: 'metric',
});

export const AppRoot:FC = () => {
    
    return (
        <div className={ styles.container} >
            <CurrentTimeData />
            <DailyForecast />
        </div>
    );
}
