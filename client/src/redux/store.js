import { configureStore } from '@reduxjs/toolkit'
import CountryReducer from '../reducers/CountryReducer'

export const store = configureStore({
   reducer: {
    country:CountryReducer
  },
})