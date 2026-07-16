import type { FC } from "react";
import { CloudDrizzleIcon } from "../Icons/CloudDrizzleIcon";

import styles from './CurrentTimeData.module.css';

interface CurrentTimeDataProps {
    data: {
        date: string;
        location: string;
        temperature: number;
        wheaterType: string;
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

    return (
        <div className={styles.container}>
            
            <div>{formattedDate}</div>
            <div>{location}</div>

            <div className={styles['wheater-data-container']} >
                <div className={styles['wheater-data-container__temperature']} >
                    {`${Math.round(temperature)}°`}
                </div>
                
                <div className={styles['wheater-data-container__wheater-type']}>
                    Rainy
                </div>

                <div>
                    <CloudDrizzleIcon />
                </div>
            </div>

        </div>
    );
}
