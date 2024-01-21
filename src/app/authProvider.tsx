"use client"
import React from 'react'
import { Provider } from "react-redux";
import authStore from '@/tools/store/auth.store';

const AuthProvider = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <>
            <Provider store={authStore}>
                {children}
            </Provider>
        </>
    )
}

export default AuthProvider