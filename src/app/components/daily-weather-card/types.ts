interface DailyWeatherCardProps {
    day: string,
    imageSrc: string,
    imageAlt: string,
    minTemperature: number,
    maxTemperature: number,
    loading?: boolean,
}

export type { DailyWeatherCardProps }