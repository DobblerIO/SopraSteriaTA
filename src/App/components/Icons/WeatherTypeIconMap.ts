import type { FC } from "react";
import type { WeatherType } from "../../../api/WeatherCodeConversion";
import { CloudIcon } from "./CloudIcon";
import { CloudDrizzleIcon } from "./CloudDrizzleIcon";
import { CloudFogIcon } from "./CloudFogIcon";
import { CloudHailIcon } from "./CloudHailIcon";
import { CloudMoonIcon } from "./CloudMoonIcon";
import { CloudSnowAltIcon } from "./CloudSnowAltIcon";
import { CloudSunIcon } from "./CloudSunIcon";
import { MoonIcon } from "./MoonIcon";
import { SunIcon } from "./SunIcon";
import { WindIcon } from "./WindIcon";

export const weatherTypeIconMap: Record<WeatherType, FC> = {
    Cloud: CloudIcon,
    CloudDrizzle: CloudDrizzleIcon,
    CloudFog: CloudFogIcon,
    CloudHail: CloudHailIcon,
    CloudMoon: CloudMoonIcon,
    CloudSnow: CloudSnowAltIcon,
    CloudSun: CloudSunIcon,
    Moon: MoonIcon,
    Sun: SunIcon,
    Wind: WindIcon,
}
