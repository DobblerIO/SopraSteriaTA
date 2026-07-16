import type { FC } from "react";

import styles from './AppRoot.module.css';
import { DailyForecast } from "./components/DailyForecast";
import { CurrentTimeData } from "./components/CurrentTimeData";
import { useQuery } from "@tanstack/react-query";
import { fetchForecast } from "../api/WeatherFetcher";
import { RefetchingStatus } from "./components/RefetchingStatus";

export const AppRoot:FC = () => {

    const { data, isPending, isRefetching } = useQuery({
        queryKey: ['weather-data'],
        queryFn: async () => fetchForecast({
            location: 'Amsterdam',
            timesteps: ['hourly', 'daily'],
            units: 'metric',
        }),
    });

    if (!data || isPending) {
        return 'Loading...';
    }
    
    return (
        <div className={ styles.container} >
            <CurrentTimeData data={data.currentTimeData} />
            <DailyForecast data={data.dailyForecastData} />

            {isRefetching && <RefetchingStatus />}
        </div>
    );
}
