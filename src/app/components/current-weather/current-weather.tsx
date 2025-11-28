import "./current-weather.css";
import type { CurrentWeatherProps } from "./types";

const CurrentWeather = (props: CurrentWeatherProps) => {
    const { place, date, temperature, imageAlt, imageSrc } = { ...props }

    const formatter = new Intl.DateTimeFormat("en-US", {
        weekday: 'long',
        month: 'short',
        day: 'numeric',
        year: 'numeric',
    });

    return (
        <div className="current__container">
            <div className="current__location">
                {place}
                <span className="current__date">{formatter.format(date)}</span>
            </div>
            <div className="current__data">
                <img 
                    src={imageSrc} 
                    alt={imageAlt} 
                    className="current__icon"
                />
                {temperature.toFixed(0)+'\u00B0'}
            </div>
        </div>
    );
}

export default CurrentWeather;