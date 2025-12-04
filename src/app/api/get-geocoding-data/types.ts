interface GeocodingDataResponse {
    generationtime_ms: number,
    results: {
        id: number,
        name: string,
        latitude: number,
        longitude: number,
        elevation: number,
        country_code: string,
        population: number,
        country_id: number,
        country: string,
        admin1?: string,
        admin1_id?: number,
        admin2?: string,
        admin2_id?: number,
        admin3?: string,
        admin3_id?: number,
        admin4?: string,
        admin4_id?: number,
    }[],
}

interface GetGeocodingDataProps {
    name: string,
}

export type { GetGeocodingDataProps, GeocodingDataResponse }