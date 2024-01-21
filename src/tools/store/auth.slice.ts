import { createSlice } from "@reduxjs/toolkit";

type initialStateType = {
    isLogin: boolean;
    user: any;
};

const nameSlice = "auth";

const initialState: initialStateType = {
    isLogin: false,
    user: null,
};

export const authSlice = createSlice({
    name : nameSlice,
    initialState,
    reducers: {
        login: (state) => {
            state.isLogin = true;
        },
        logout: (state) => {
            state.isLogin = false;
            state.user = null;
        },
    },
})

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;