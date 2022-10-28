import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import SavedSlice from '../features/SavedSlice'
import searchSlice from '../features/SearchSlice'

export const store = configureStore({
    reducer: {
        search: searchSlice.reducer,
        saved: SavedSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

