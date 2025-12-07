import type { DailyForecastResponse, GetDailyForecastProps } from "./types";

const getDailyForecast = async (props: GetDailyForecastProps): Promise<DailyForecastResponse> => {
    const { latitude, longitude, temperatureUnit } = { ...props }
    
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?models=best_match&latitude=${latitude}&longitude=${longitude}&temperature_unit=${temperatureUnit}&daily=weather_code,temperature_2m_max,temperature_2m_min`);
    const data = await response.json() as DailyForecastResponse;

    return data;
}

export default getDailyForecast;