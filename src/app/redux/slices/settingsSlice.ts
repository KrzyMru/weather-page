import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Settings } from './types';
import type { RootState } from '../store';

const initialState: Settings = {
    temperature: 'celsius',
    windSpeed: 'kmh',
    precipitation: 'mm',
}

export const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        changeUnitTemperature: (state, action: PayloadAction<Settings['temperature']>) => {
            state.temperature = action.payload;
        },
        changeUnitWindSpeed: (state, action: PayloadAction<Settings['windSpeed']>) => {
            state.windSpeed = action.payload;
        },
        changeUnitPrecipitation: (state, action: PayloadAction<Settings['precipitation']>) => {
            state.precipitation = action.payload;
        },
    },
});

export const { 
    changeUnitTemperature, 
    changeUnitWindSpeed, 
    changeUnitPrecipitation,
} = settingsSlice.actions;

export const temperatureUnitSelector = (state: RootState) => state.settings.temperature;
export const windSpeedUnitSelector = (state: RootState) => state.settings.windSpeed;
export const precipitationUnitSelector = (state: RootState) => state.settings.precipitation;

export default settingsSlice.reducer;