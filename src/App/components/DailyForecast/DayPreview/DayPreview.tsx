import type { FC } from "react";
import { CloudDrizzleIcon } from "../../Icons/CloudDrizzleIcon";

import styles from './DayPreview.module.css';

interface DayPreviewProps {
    date: string;
    wheaterType: string;
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

    return (
        <div className={styles.container} >
            <div>{formattedDate}</div>
            <div><CloudDrizzleIcon/></div>
            <div>{`${Math.round(temperature)}°`}</div>
        </div>
    )
}
