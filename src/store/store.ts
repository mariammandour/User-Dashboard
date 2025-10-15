import { configureStore } from "@reduxjs/toolkit";
import Users from "./Users/UsersSlices";

export const store = configureStore({
    reducer: {
        Users
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store