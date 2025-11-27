import "./daily-forecast.css";
import DailyWeatherCard from "../daily-weather-card/daily-weather-card";
import type { DailyForecastProps } from "./types";
import { weatherCodeMap } from "../../constants/weather-code-map";
import DailyWeatherCardSkeleton from "../daily-weather-card/skeletons/daily-weather-card-skeleton";

const DailyForecast = (props: DailyForecastProps) => {
    const { forecastData, loading } = { ...props }

    const formatter = new Intl.DateTimeFormat("en-US", {
        weekday: 'short'
    });

    return (
        <div className="forecast__daily">
            Daily forecast
            <ul className="daily__list">
                {
                    loading ?
                    Array.from({ length: 7 }, (_, i) => <li key={i}><DailyWeatherCardSkeleton /></li>)
                    :
                    forecastData.map(day =>
                        <li key={day.time}>
                            <DailyWeatherCard 
                                day={formatter.format(new Date(day.time))}
                                maxTemperature={day.temperature_2m_max}
                                minTemperature={day.temperature_2m_min}
                                imageAlt={weatherCodeMap[day.weather_code].alt}
                                imageSrc={weatherCodeMap[day.weather_code].src}
                            />
                        </li>
                    )
                }
            </ul>
        </div>
    );
}

export default DailyForecast;