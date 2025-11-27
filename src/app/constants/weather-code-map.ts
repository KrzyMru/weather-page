import IconDrizzle from "../assets/icons/weather/icon-drizzle.webp";
import IconFog from "../assets/icons/weather/icon-fog.webp";
import IconOvercast from "../assets/icons/weather/icon-overcast.webp";
import IconPartlyCloudy from "../assets/icons/weather/icon-partly-cloudy.webp";
import IconRain from "../assets/icons/weather/icon-rain.webp";
import IconSnow from "../assets/icons/weather/icon-snow.webp";
import IconStorm from "../assets/icons/weather/icon-storm.webp";
import IconSunny from "../assets/icons/weather/icon-sunny.webp";
import type { WeatherIcon } from "./types";

export const weatherCodeMap: Record<number, WeatherIcon> = {
    0: {
        alt: "ClearSky",
        src: IconSunny,
    },
    1: {
        alt: "MainlyClear",
        src: IconSunny,
    },
    2: {
        alt: "PartlyCloudy",
        src: IconPartlyCloudy,
    },
    3: {
        alt: "Overcast",
        src: IconOvercast,
    },
    45: {
        alt: "Fog",
        src: IconFog,
    },
    48: {
        alt: "DepositingRimeFog",
        src: IconFog,
    },
    51: {
        alt: "DrizzleLight",
        src: IconDrizzle,
    },
    53: {
        alt: "DrizzleModerate",
        src: IconDrizzle,
    },
    55: {
        alt: "DrizzleDense",
        src: IconDrizzle,
    },
    56: {
        alt: "DrizzleFreezingLight",
        src: IconDrizzle,
    },
    57: {
        alt: "DrizzleFreezingDense",
        src: IconDrizzle,
    },
    61: {
        alt: "RainLight",
        src: IconRain,
    },
    63: {
        alt: "RainModerate",
        src: IconRain,
    },
    65: {
        alt: "RainDense",
        src: IconRain,
    },
    66: {
        alt: "RainFreezingLight",
        src: IconRain,
    },
    67: {
        alt: "RainFreezingDense",
        src: IconRain,
    },
    71: {
        alt: "SnowLight",
        src: IconSnow,
    },
    73: {
        alt: "SnowModerate",
        src: IconSnow,
    },
    75: {
        alt: "SnowDense",
        src: IconSnow,
    },
    77: {
        alt: "SnowGrains",
        src: IconSnow,
    },
    80: {
        alt: "RainShowerLight",
        src: IconRain,
    },
    81: {
        alt: "RainShowerModerate",
        src: IconRain,
    },
    82: {
        alt: "RainShowerDense",
        src: IconRain,
    },
    85: {
        alt: "SnowShowerLight",
        src: IconSnow,
    },
    86: {
        alt: "SnowShowerDense",
        src: IconSnow,
    },
    95: {
        alt: "ThunderstormLightModerate",
        src: IconStorm,
    },
    96: {
        alt: "ThunderstormHailLight",
        src: IconStorm,
    },
    99: {
        alt: "ThunderstormHailDense",
        src: IconStorm,
    },
} as const;