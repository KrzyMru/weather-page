interface HourlyForecastProps {
    forecastData: HourlyForecastData[],
    loading?: boolean,
}

interface HourlyForecastData {
    time: string,
    weather_code: number,
    temperature_2m: number,
}

export type { HourlyForecastProps }