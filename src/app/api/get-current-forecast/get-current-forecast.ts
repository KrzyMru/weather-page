import type { CurrentForecastResponse, GetCurrentForecastProps } from "./types";

const getCurrentForecast = async (props: GetCurrentForecastProps): Promise<CurrentForecastResponse> => {
    const { latitude, longitude } = { ...props }
    
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?models=best_match&latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code,wind_speed_10m,apparent_temperature,precipitation,relative_humidity_2m`);
    const data = await response.json() as CurrentForecastResponse;

    return data;
}

export default getCurrentForecast;