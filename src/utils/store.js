import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice'
import RecipieSlice from './RecipieSlice'

export const store = configureStore({
    reducer: {
        user: userSlice,
        recipie: RecipieSlice
    },
})