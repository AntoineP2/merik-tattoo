import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth.slice";

const recuders = {
    auth: authSlice,
};


const authStore = configureStore({
    reducer: recuders,
});

export default authStore;