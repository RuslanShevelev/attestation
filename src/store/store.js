import { configureStore } from '@reduxjs/toolkit'
import tracksReducer from './slices/tracksSlice'
import { authReducer } from './slices/authSlice'
import { usersApi } from '../services/appService'

export const store = configureStore({
  reducer: {
    tracks: tracksReducer,
    auth: authReducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware),
})
