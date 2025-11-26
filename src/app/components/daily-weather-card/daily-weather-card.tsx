import "./daily-weather-card.css";
import type { DailyWeatherCardProps } from "./types";

const DailyWeatherCard = (props: DailyWeatherCardProps) => {
    const { day, imageSrc, imageAlt, maxTemperature, minTemperature } = { ...props }

    return (
        <div className="card__daily">
            <span>{day}</span>
            <img
                src={imageSrc} 
                alt={imageAlt} 
                className="daily__icon"
            />
            <div className="daily__temperature">
                <span>{maxTemperature.toFixed(0)+'\u00B0'}</span>
                <span className="daily__min">{minTemperature.toFixed(0)+'\u00B0'}</span>
            </div>
        </div>
    )
}

export default DailyWeatherCard;