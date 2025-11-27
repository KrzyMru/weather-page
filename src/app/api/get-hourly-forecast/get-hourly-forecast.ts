import type { HourlyForecastResponse, GetHourlyForecastProps } from "./types";

const getHourlyForecast = async (props: GetHourlyForecastProps): Promise<HourlyForecastResponse> => {
    const { latitude, longitude } = { ...props }
    
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?models=best_match&latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,weather_code,wind_speed_10m,apparent_temperature,precipitation,relative_humidity_2m`);
    const data = await response.json() as HourlyForecastResponse;

    return data;
}

export default getHourlyForecast;