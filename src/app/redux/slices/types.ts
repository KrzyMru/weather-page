interface Settings {
    temperature: 'celsius' | 'fahrenheit',
    windSpeed: 'kmh' | 'mph',
    precipitation: 'mm' | 'inch',
}

interface GeolocationSliceProps {
    name: string,
    latitude: number,
    longitude: number,
}

export type { Settings, GeolocationSliceProps }