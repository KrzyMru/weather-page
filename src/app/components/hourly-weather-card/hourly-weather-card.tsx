import "./hourly-weather-card.css";
import type { HourlyWeatherCardProps } from "./types";

const HourlyWeatherCard = (props: HourlyWeatherCardProps) => {
    const { imageSrc, imageAlt, date, temperature } = { ...props }

    const formatter = new Intl.DateTimeFormat("en-US", {
        hour: "numeric",
        hour12: true,
    });

    return (
        <div className="card__hourly">
            <img
                src={imageSrc}
                alt={imageAlt}
                className="hourly__icon"
            />
            <div className="hourly__data">
                {formatter.format(date)}
                <span className="hourly__temperature">{temperature.toFixed(0)+'\u00B0'}</span>
            </div>
        </div>
    )
}

export default HourlyWeatherCard;