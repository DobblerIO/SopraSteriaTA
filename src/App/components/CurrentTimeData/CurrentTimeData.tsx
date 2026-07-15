import type { FC } from "react";
import { CloudDrizzleIcon } from "../Icons/CloudDrizzleIcon";

import styles from './CurrentTimeData.module.css';

export const CurrentTimeData: FC = () => {

    return (
        <div className={styles.container}>
            
            <div>Thu Jul 15 2026</div>
            <div>Amsterdam</div>

            <div className={styles['wheater-data-container']} >
                <div className={styles['wheater-data-container__temperature']} >
                    33°
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
