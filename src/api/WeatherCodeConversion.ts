
export type WeatherType = 'CloudDrizzle' | 'CloudFog' | 'CloudHail' | 'Cloud' | 'CloudMoon' | 'CloudSnow' | 'CloudSun' | 'Moon' | 'Sun' | 'Wind'; 

export function convertWeatherCode(weatherCode: number): WeatherType {
    switch(weatherCode) {
        case 1000:
        case 10000:
            return 'Sun';
        case 10001:
            return 'Moon';
        case 1100:
        case 1101:
        case 1102:
        case 1103:
        case 11000:
        case 11010:
        case 11020:
        case 11030:
            return 'CloudSun';
        case 11001:
        case 11011:
        case 11021:
        case 11031:
            return 'CloudMoon';
        case 1001:
        case 10011:
            return 'Cloud';
        case 2000:
        case 2100:
        case 2101:
        case 20001:
        case 21001:
            return 'CloudFog';
        default:
            // TODO: Implement remaining code conversions
            console.error('Invalid or unsupported weatherCode provided')
            return 'Moon';
            throw new Error('Invalid or unsupported weatherCode provided');
    }
}