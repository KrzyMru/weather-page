import "./current-weather-skeleton.css";
import IconLoading from "../../../assets/icons/utility/icon-loading.svg";

const CurrentWeatherSkeleton = () => {
    return (
        <div className="skeleton__current">
            <img 
                src={IconLoading} 
                alt="Loading..." 
                className="current__loading"
            />
        </div>
    )
}

export default CurrentWeatherSkeleton;