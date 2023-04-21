import { configureStore } from '@reduxjs/toolkit'
import basketSlice from './slices/basketSlice'
import resturantSlice from './slices/resturantSlice'

export const store = configureStore({
  reducer: {
    basket: basketSlice,
    resturant: resturantSlice
  },
})