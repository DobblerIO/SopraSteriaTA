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

    return (
        <div className={styles.container} >
            <div>{date}</div>
            <div><CloudDrizzleIcon/></div>
            <div>{temperature}</div>
        </div>
    )
}
