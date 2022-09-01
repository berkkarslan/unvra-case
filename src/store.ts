import { configureStore } from '@reduxjs/toolkit'
import booksReducer from './features/bookSlice'
import librarySlice from './features/librarySlice'

export const store = configureStore({
  reducer: {
    books: booksReducer,
    borrowings: librarySlice,
  },
})
