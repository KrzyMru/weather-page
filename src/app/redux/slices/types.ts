interface Settings {
    temperature: 'celsius' | 'fahrenheit',
    windSpeed: 'km/h' | 'mph',
    precipitation: 'millimeters' | 'inches',
}

interface GeolocationSliceProps {
    name: string,
    latitude: number,
    longitude: number,
}

export type { Settings, GeolocationSliceProps }