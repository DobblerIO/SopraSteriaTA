import type { FC } from "react";
import { DayPreview } from "./DayPreview";

import styles from './DailyForecast.module.css';
import type { WeatherType } from "../../../api/DataTransformation/WeatherCodeConversion";

interface DailyForecastProps {
    data: Array<{
        date: string;
        wheaterType: WeatherType;
        temperature: number;
    }>;
}

export const DailyForecast:FC<DailyForecastProps> = props => {
    const { data } = props;

    return (
        <div className={styles.container} >
            {data.map(dayData => (
                <DayPreview
                    key={dayData.date}
                    date={dayData.date}
                    wheaterType={dayData.wheaterType}
                    temperature={dayData.temperature} />
            ))}
        </div>
    );
}
