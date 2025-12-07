import type { HourlyForecastResponse, GetHourlyForecastProps } from "./types";

const getHourlyForecast = async (props: GetHourlyForecastProps): Promise<HourlyForecastResponse> => {
    const { latitude, longitude, temperatureUnit } = { ...props }
    
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?models=best_match&latitude=${latitude}&longitude=${longitude}&temperature_unit=${temperatureUnit}&hourly=temperature_2m,weather_code`);
    const data = await response.json() as HourlyForecastResponse;

    return data;
}

export default getHourlyForecast;