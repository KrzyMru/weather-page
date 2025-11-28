import "./current-weather.css";
import type { CurrentWeatherProps } from "./types";

const CurrentWeather = (props: CurrentWeatherProps) => {
    const { place, date, temperature, imageAlt, imageSrc } = { ...props }

    return (
        <div className="current__container">
            <div className="current__location">
                {place}
                <span className="current__date">{date}</span>
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