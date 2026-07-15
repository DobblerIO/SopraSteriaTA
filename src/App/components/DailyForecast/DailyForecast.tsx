import type { FC } from "react";
import { DayPreview } from "./DayPreview";

import styles from './DailyForecast.module.css';

export const DailyForecast:FC = () => {

    return (
        <div className={styles.container} >
            <DayPreview date={"Mon"} wheaterType={"Rainy"} temperature={31} />
            <DayPreview date={"Mon"} wheaterType={"Rainy"} temperature={31} />
            <DayPreview date={"Mon"} wheaterType={"Rainy"} temperature={31} />
            <DayPreview date={"Mon"} wheaterType={"Rainy"} temperature={31} />
            <DayPreview date={"Mon"} wheaterType={"Rainy"} temperature={31} />
            <DayPreview date={"Mon"} wheaterType={"Rainy"} temperature={31} />
            <DayPreview date={"Mon"} wheaterType={"Rainy"} temperature={31} />
        </div>
    );
}
