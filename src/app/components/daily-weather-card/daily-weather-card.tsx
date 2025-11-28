import "./daily-weather-card.css";
import type { DailyWeatherCardProps } from "./types";

const DailyWeatherCard = (props: DailyWeatherCardProps) => {
    const { date, imageSrc, imageAlt, maxTemperature, minTemperature } = { ...props }

    const formatter = new Intl.DateTimeFormat("en-US", {
        weekday: 'short'
    });

    return (
        <div className="card__daily">
            <span>{formatter.format(date)}</span>
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