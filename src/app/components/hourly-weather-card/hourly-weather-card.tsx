import "./hourly-weather-card.css";
import type { HourlyWeatherCardProps } from "./types";
import IconSunny from "../../assets/icon-sunny.webp";

const HourlyWeatherCard = (props: HourlyWeatherCardProps) => {
    const { imageSrc, imageAlt, time, temperature, loading } = { ...props }

    return (
        <div className={`card__hourly ${loading ? 'card__hourly--loading' : ''}`}>
            <img
                src={imageSrc ?? IconSunny}
                alt={imageAlt ?? 'Sunny'}
                className="hourly__icon"
            />
            <div className="hourly__data">
                {time ?? '-'}
                <span className="hourly__temperature">{temperature ? temperature+'\u00B0' : '-'}</span>
            </div>
        </div>
    )
}

export default HourlyWeatherCard;