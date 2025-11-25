import "./daily-weather-card.css";
import type { DailyWeatherCardProps } from "./types";
import IconSunny from "../../assets/icon-sunny.webp";

const DailyWeatherCard = (props: DailyWeatherCardProps) => {
    const { day, imageSrc, imageAlt, maxTemperature, minTemperature, loading } = { ...props }

    return (
        <div className={`card__daily ${loading ? 'card__daily--loading' : ''}`}>
            <span>{day ?? "-"}</span>
            <img
                src={imageSrc ?? IconSunny} 
                alt={imageAlt ?? "Sunny"} 
                className="daily__icon"
            />
            <div className="daily__temperature">
                <span>{maxTemperature ? maxTemperature+'\u00B0' : "-"}</span>
                <span className="daily__min">{minTemperature ? minTemperature+'\u00B0' : "-"}</span>
            </div>
        </div>
    )
}

export default DailyWeatherCard;