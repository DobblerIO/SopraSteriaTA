
export type WeatherType = 'CloudDrizzle' | 'CloudFog' | 'CloudHail' | 'Cloud' | 'CloudMoon' | 'CloudSnow' | 'CloudSun' | 'Moon' | 'Sun' | 'Wind';

/**
 * I used AI to create the below function that maps the codes from the following docs page:
 * https://docs.tomorrow.io/reference/data-layers-weather-codes
 */
export function convertWeatherCode(code: number): WeatherType {
    const codeStr = String(code);

    // Day/night variants are 5 digits and end with:
    // 0 = day
    // 1 = night
    const isVariant = codeStr.length === 5;
    const isNight = isVariant && codeStr.endsWith("1");

    // Strip the day/night suffix so all variants share the same base code.
    const baseCode = isVariant
        ? Math.floor(Number(code) / 10)
        : Number(code);

    switch (Math.floor(baseCode / 1000)) {
        case 1:
            switch (baseCode) {
                case 1000:
                    return isNight ? "Moon" : "Sun";

                case 1100:
                case 1101:
                    return isNight ? "CloudMoon" : "CloudSun";

                case 1102:
                case 1103:
                case 1001:
                    return "Cloud";

                default:
                    return "Cloud";
            }

        case 2:
            return "CloudFog";

        case 4:
        case 6:
            // Rain / drizzle / freezing rain
            return "CloudDrizzle";

        case 5:
            return "CloudSnow";

        case 7:
            return "CloudHail";

        case 8:
            return "Wind"; // Thunderstorm

        default:
            return "Cloud";
    }
}