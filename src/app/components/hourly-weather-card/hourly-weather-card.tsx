import "./hourly-weather-card.css";
import type { HourlyWeatherCardProps } from "./types";

const HourlyWeatherCard = (props: HourlyWeatherCardProps) => {
    const { imageSrc, imageAlt, time, temperature } = { ...props }

    return (
        <div className="card__hourly">
            <img
                src={imageSrc}
                alt={imageAlt}
                className="hourly__icon"
            />
            <div className="hourly__data">
                {time}
                <span className="hourly__temperature">{temperature.toFixed(0)+'\u00B0'}</span>
            </div>
        </div>
    )
}

export default HourlyWeatherCard;