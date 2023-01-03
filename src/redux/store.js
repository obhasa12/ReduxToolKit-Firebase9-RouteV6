import { configureStore } from '@reduxjs/toolkit'
import projectReducer from './ProjectSlice'
import authReducer from './authSlice'

export const store = configureStore({
    reducer: {
        projects: projectReducer,
        auth: authReducer
    }
})

