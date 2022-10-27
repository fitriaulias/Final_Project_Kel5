import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import SavedSlice from '../features/SavedSlice';

export const store = configureStore({
    reducer: {
        saved: SavedSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),

  
})

