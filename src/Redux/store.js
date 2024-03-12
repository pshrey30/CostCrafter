import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import user from '../Redux/Slices/user'

export const store = configureStore({
    reducer: {
        user
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        })
})