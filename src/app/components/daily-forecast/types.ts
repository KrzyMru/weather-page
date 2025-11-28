interface DailyForecastProps {
    forecastData: DailyForecastData[],
    loading?: boolean,
}

interface DailyForecastData {
    time: string,
    weather_code: number,
    temperature_2m_max: number,
    temperature_2m_min: number,
}

export type { DailyForecastProps, DailyForecastData }