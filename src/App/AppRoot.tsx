import type { FC } from "react";

import styles from './AppRoot.module.css';
import { DailyForecast } from "./components/DailyForecast";
import { CurrentTimeData } from "./components/CurrentTimeData";
import { useQuery } from "@tanstack/react-query";
import { fetchForecast } from "../api/WeatherFetcher";
import { RefetchingStatus } from "./components/RefetchingStatus";
import { OptionsMenu } from "./components/OptionsMenu";
import { SettingsMenu } from "./components/SettingsMenu";
import { useViewStore } from "../Stores/ViewStore";
import { useSettingsStore } from "../Stores/SettingsStore";

export const AppRoot:FC = () => {

    const { activeView } = useViewStore();
    const { settingsData: {
        location,
        unitSystem,
    } } = useSettingsStore();

    const { data, isPending, isRefetching } = useQuery({
        queryKey: ['weather-data', location, unitSystem],
        retry: 2,
        throwOnError: true,
        queryFn: async () => fetchForecast({
            timesteps: ['hourly', 'daily'],
            location,
            units: unitSystem,
        }),
    });

    if (!data || isPending) {
        return (
            <div className={ styles.container } >Loading...</div>
        )
    }
    
    return (
        <div className={ styles.container } >
            <CurrentTimeData data={data.currentTimeData} />
            <DailyForecast data={data.dailyForecastData} />

            {isRefetching && <RefetchingStatus />}
            {!isRefetching && <OptionsMenu />}

            {activeView === 'settings' && <SettingsMenu />}
        </div>
    );
}
