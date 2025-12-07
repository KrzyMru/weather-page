import type { Settings } from "../../redux/slices/types"

interface HourlyForecastResponse {
    latitude: number,
    longitude: number, 
    utc_offset_seconds: number, 
    timezone: string,
    hourly_units: {
        time: string,
        weather_code: string,
        temperature_2m: string,
    }
    hourly: {
        time: string[],
        weather_code: number[],
        temperature_2m: number[],
    }
}

interface GetHourlyForecastProps {
    latitude: number, 
    longitude: number,
    temperatureUnit: Settings['temperature'],
}

export type { HourlyForecastResponse, GetHourlyForecastProps }