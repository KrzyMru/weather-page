import type { DailyForecastResponse, GetDailyForecastProps } from "./types";

const getDailyForecast = async (props: GetDailyForecastProps): Promise<DailyForecastResponse> => {
    const { latitude, longitude } = { ...props }
    
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?models=best_match&latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,weather_code,wind_speed_10m,apparent_temperature,precipitation,relative_humidity_2m`);
    const data = await response.json() as DailyForecastResponse;

    return data;
}

export default getDailyForecast;