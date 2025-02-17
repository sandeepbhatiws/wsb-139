import { configureStore } from '@reduxjs/toolkit'
import userCarts from './cartslice'

export const store = configureStore({
  reducer: {
    cart : userCarts
  },
})