import { configureStore } from '@reduxjs/toolkit'
import projectReducer from './ProjectSlice'
import authReducer from './authSlice'

export const store = configureStore({
    reducer: {
        projects: projectReducer,
        auth: authReducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['your/action/type'],
        // Ignore these field paths in all actions
        ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
        // Ignore these paths in the state
        ignoredPaths: ['items.dates'],
      },
    }),
})

