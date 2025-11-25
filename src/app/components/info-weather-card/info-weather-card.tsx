import "./info-weather-card.css";
import type { InfoWeatherCardProps } from "./types";

const InfoWeatherCard = (props: InfoWeatherCardProps) => {
    const { title, data, loading } = { ...props }

    return (
        <div className={`card__info ${loading ? 'card__info--loading' : ''}`}>
            {title}
            <span className="info__data">{loading || !data ? "-" : data}</span>
        </div>
    )
}

export default InfoWeatherCard;