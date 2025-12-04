import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { GeolocationSliceProps } from './types';
import type { RootState } from '../store';

const initialState: GeolocationSliceProps = {
    name: 'Warsaw, Poland',
    latitude: 52,
    longitude: 21,
}

export const geolocationSlice = createSlice({
    name: 'geolocation',
    initialState,
    reducers: {
        changeGeolocationCoordinates: (state, action: PayloadAction<Pick<GeolocationSliceProps, 'latitude' | 'longitude'>>) => {
            state.latitude = action.payload.latitude;
            state.longitude = action.payload.longitude;
        },
        changeGeolocationName: (state, action: PayloadAction<GeolocationSliceProps['name']>) => {
            state.name = action.payload;
        },
    },
});

export const { 
    changeGeolocationCoordinates,
    changeGeolocationName,
} = geolocationSlice.actions;

export const latitudeGeolocationSelector = (state: RootState) => state.geolocation.latitude;
export const longitudeGeolocationSelector = (state: RootState) => state.geolocation.longitude;
export const NameGeolocationSelector = (state: RootState) => state.geolocation.name;

export default geolocationSlice.reducer;