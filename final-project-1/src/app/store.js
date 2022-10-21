import { configureStore } from '@reduxjs/toolkit';
import indonesiaSlice from '../features/Indonesia/indonesiaSlice';
import logger from 'redux-logger';
import allSlice from '../features/All/allSlice';

export const store = configureStore({
    reducer: {
        indonesia: indonesiaSlice,
        all: allSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),

  
})

