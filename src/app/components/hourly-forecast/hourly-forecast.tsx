import "./hourly-forecast.css";
import { weatherCodeMap } from "../../constants/weather-code-map";
import HourlyWeatherCard from "../hourly-weather-card/hourly-weather-card";
import HourlyWeatherCardSkeleton from "../hourly-weather-card/skeletons/hourly-weather-card-skeleton";
import type { HourlyForecastProps } from "./types";
import { useState } from "react";

const HourlyForecast = (props: HourlyForecastProps) => {
    const { forecastData, loading } = { ...props }
    const [selectedDay, setSelectedDay] = useState<string|undefined>(forecastData.length > 0 ? forecastData[0].time.slice(0, 10) : undefined);

    const formatter = new Intl.DateTimeFormat("en-US", {
        hour: "numeric",
        hour12: true,
    });

    return (
        <div className="forecast__hourly">
            <div className="hourly__header">
                Hourly forecast
                <select />
            </div>
            <ul className="hourly__list">
                {
                    loading ?
                    Array.from({ length: 12 }, (_, i) => <li key={i}><HourlyWeatherCardSkeleton /></li>)
                    :
                    forecastData
                        .filter(hour => hour.time.slice(0, 10) === selectedDay)
                        .map(hour =>
                        <li key={hour.time}>
                            <HourlyWeatherCard 
                                time={formatter.format(new Date(hour.time))}
                                temperature={hour.temperature_2m}
                                imageAlt={weatherCodeMap[hour.weather_code].alt}
                                imageSrc={weatherCodeMap[hour.weather_code].src}
                            />
                        </li>
                    )
                }
            </ul>
        </div>
    );
}

export default HourlyForecast;