import type { GeocodingDataResponse, GetGeocodingDataProps } from "./types";

const getGeocodingData = async (props: GetGeocodingDataProps): Promise<GeocodingDataResponse> => {
    const { name } = { ...props }
    
    const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${name}&count=10&language=en&format=json`);
    const data = await response.json() as GeocodingDataResponse;

    return data;
}

export default getGeocodingData;