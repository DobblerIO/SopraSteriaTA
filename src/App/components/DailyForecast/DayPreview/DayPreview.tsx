import type { FC } from "react";

import styles from './DayPreview.module.css';
import { weatherTypeIconMap } from "../../Icons/WeatherTypeIconMap";
import type { WeatherType } from "../../../../api/DataTransformation/WeatherCodeConversion";

interface DayPreviewProps {
    date: string;
    wheaterType: WeatherType;
    temperature: number;
}

export const DayPreview: FC<DayPreviewProps> = props => {
    const {
        date,
        wheaterType,
        temperature,
    } = props;

    const formattedDate = new Intl.DateTimeFormat("en-US", {
        weekday: "short"
    }).format(new Date(date));

    const WeatherTypeIcon = weatherTypeIconMap[wheaterType];

    return (
        <div className={styles.container} >
            <div>{formattedDate}</div>
            <div><WeatherTypeIcon/></div>
            <div>{`${Math.round(temperature)}°`}</div>
        </div>
    )
}
