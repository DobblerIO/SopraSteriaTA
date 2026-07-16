export interface ForecastDataRoot {
    timelines: ForecastDataTimelines
    location: ForecastDataLocation
}

export interface ForecastDataTimelines {
    daily: ForecastDataDaily[]
}

export interface ForecastDataDaily {
    time: string
    values: Partial<ForecastDataValues>
}

export interface ForecastDataValues {
    altimeterSettingAvg: number
    altimeterSettingMax: number
    altimeterSettingMin: number
    cloudBaseAvg: number
    cloudBaseMax: number
    cloudBaseMin: number
    cloudCeilingAvg: number
    cloudCeilingMax: number
    cloudCeilingMin: number
    cloudCoverAvg: number
    cloudCoverMax: number
    cloudCoverMin: number
    dewPointAvg: number
    dewPointMax: number
    dewPointMin: number
    evapotranspirationAvg: number
    evapotranspirationMax: number
    evapotranspirationMin: number
    evapotranspirationSum: number
    freezingRainIntensityAvg: number
    freezingRainIntensityMax: number
    freezingRainIntensityMin: number
    humidityAvg: number
    humidityMax: number
    humidityMin: number
    iceAccumulationAvg: number
    iceAccumulationLweAvg?: number
    iceAccumulationLweMax?: number
    iceAccumulationLweMin?: number
    iceAccumulationLweSum?: number
    iceAccumulationMax: number
    iceAccumulationMin: number
    iceAccumulationSum: number
    moonriseTime: string
    moonsetTime: string
    precipitationProbabilityAvg: number
    precipitationProbabilityMax: number
    precipitationProbabilityMin: number
    pressureSeaLevelAvg: number
    pressureSeaLevelMax: number
    pressureSeaLevelMin: number
    pressureSurfaceLevelAvg: number
    pressureSurfaceLevelMax: number
    pressureSurfaceLevelMin: number
    rainAccumulationAvg: number
    rainAccumulationMax: number
    rainAccumulationMin: number
    rainAccumulationSum: number
    rainIntensityAvg: number
    rainIntensityMax: number
    rainIntensityMin: number
    sleetAccumulationAvg?: number
    sleetAccumulationLweAvg?: number
    sleetAccumulationLweMax?: number
    sleetAccumulationLweMin?: number
    sleetAccumulationLweSum?: number
    sleetAccumulationMax?: number
    sleetAccumulationMin?: number
    sleetAccumulationSum?: number
    sleetIntensityAvg: number
    sleetIntensityMax: number
    sleetIntensityMin: number
    snowAccumulationAvg: number
    snowAccumulationLweAvg?: number
    snowAccumulationLweMax?: number
    snowAccumulationLweMin?: number
    snowAccumulationLweSum?: number
    snowAccumulationMax: number
    snowAccumulationMin: number
    snowAccumulationSum: number
    snowDepthAvg: number | null
    snowDepthMax: number | null
    snowDepthMin: number | null
    snowDepthSum: number | null
    snowIntensityAvg: number
    snowIntensityMax: number
    snowIntensityMin: number
    sunriseTime: string
    sunsetTime: string
    temperatureApparentAvg: number
    temperatureApparentMax: number
    temperatureApparentMin: number
    temperatureAvg: number
    temperatureMax: number
    temperatureMin: number
    uvHealthConcernAvg?: number
    uvHealthConcernMax?: number
    uvHealthConcernMin?: number
    uvIndexAvg?: number
    uvIndexMax?: number
    uvIndexMin?: number
    visibilityAvg: number
    visibilityMax: number
    visibilityMin: number
    weatherCodeAvg: number
    weatherCodeMax: number
    weatherCodeMin: number
    windDirectionAvg: number
    windDirectionMax: number
    windDirectionMin: number
    windGustAvg: number
    windGustMax: number
    windGustMin: number
    windSpeedAvg: number
    windSpeedMax: number
    windSpeedMin: number
}

export interface ForecastDataLocation {
    lat: number
    lon: number
    name: string
    type: string
}
