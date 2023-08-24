import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { Planetreducer } from "./feature/PlanetSlice";

const rootReducers = combineReducers({
    Planetreducer
})

export const store = configureStore({
    reducer: rootReducers
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
