import { configureStore } from '@reduxjs/toolkit';
import settingsReducer from "./slices/settingsSlice";
import geolocationReducer from "./slices/geolocationSlice";

const store = configureStore({
    reducer: {
        settings: settingsReducer,
        geolocation: geolocationReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;