interface CurrentForecastResponse {
    latitude: number,
    longitude: number, 
    utc_offset_seconds: number, 
    timezone: string,
    current_units: {
        time: string,
        weather_code: string,
        temperature_2m: string,
        wind_speed_10m: string,
        apparent_temperature: string,
        precipitation: string,
        relative_humidity_2m: string,
    }
    current: {
        time: string,
        weather_code: number,
        temperature_2m: number,
        wind_speed_10m: number,
        apparent_temperature: number,
        precipitation: number,
        relative_humidity_2m: number,
    }
}

interface GetCurrentForecastProps {
    latitude: number, 
    longitude: number,
}

export type { CurrentForecastResponse, GetCurrentForecastProps }