import type { ForecastDataRoot } from "../ForecastData";
import { convertWeatherCode } from "./WeatherCodeConversion";
import type { WeatherData } from "./WeatherDataTypes";

export function transformWeatherData(responseData: ForecastDataRoot): WeatherData {

    const currentTimeData = {
        location: responseData.location.name,
        date: responseData.timelines.daily[0].time,
        temperature: responseData.timelines.daily[0].values.temperatureAvg as number,
        wheaterType: convertWeatherCode(responseData.timelines.daily[0].values.weatherCodeAvg as number),
    };

    const dailyForecastData = responseData.timelines.daily.map(dayData => ({
        date: dayData.time,
        wheaterType: convertWeatherCode(dayData.values.weatherCodeAvg as number),
        temperature: dayData.values.temperatureApparentAvg as number,
    }))

    return {
        currentTimeData,
        dailyForecastData,
    };
};
