interface GeocodingData {
    id: number,
    name: string,
    latitude: number,
    longitude: number,
    country_id: number,
    country: string,
    admin1?: string,
    admin1_id?: number,
}

export type { GeocodingData }