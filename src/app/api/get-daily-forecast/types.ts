interface DailyForecastResponse {
    latitude: number,
    longitude: number, 
    utc_offset_seconds: number, 
    timezone: string,
    daily_units: {
        time: string,
        weather_code: string,
        temperature_2m_max: string,
        temperature_2m_min: string,
    }
    daily: {
        time: string[],
        weather_code: number[],
        temperature_2m_max: number[],
        temperature_2m_min: number[],
    }
}

interface GetDailyForecastProps {
    latitude: number, 
    longitude: number,
}

export type { DailyForecastResponse, GetDailyForecastProps }