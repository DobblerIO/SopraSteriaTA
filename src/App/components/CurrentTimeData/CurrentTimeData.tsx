import type { FC } from "react";

import styles from './CurrentTimeData.module.css';
import type { WeatherType } from "../../../api/DataTransformation/WeatherCodeConversion";
import { weatherTypeIconMap } from "../Icons/WeatherTypeIconMap";

interface CurrentTimeDataProps {
    data: {
        date: string;
        location: string;
        temperature: number;
        wheaterType: WeatherType;
    }
}

export const CurrentTimeData: FC<CurrentTimeDataProps> = props => {

    const {
        data: {
            date,
            location,
            temperature,
            wheaterType,
        }
    } = props;

    const formattedDate = new Intl.DateTimeFormat('en-US', {
        weekday: 'short',
        month: 'short',
        day: '2-digit',
        year: 'numeric'
    }).format(new Date(date));

    const WeatherTypeIcon = weatherTypeIconMap[wheaterType];

    return (
        <div className={styles.container}>
            
            <div data-testid="current-date" >{formattedDate}</div>
            <div data-testid="current-location" >{location}</div>

            <div className={styles['wheater-data-container']} >
                <div
                    className={styles['wheater-data-container__temperature']}
                    data-testid="current-temperature"
                >
                    {`${Math.round(temperature)}°`}
                </div>
                
                <div
                    className={styles['wheater-data-container__wheater-type']}
                    data-testid="current-weather-type"
                >
                    {wheaterType}
                </div>

                <div>
                    <WeatherTypeIcon />
                </div>
            </div>

        </div>
    );
}
