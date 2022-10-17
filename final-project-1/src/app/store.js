import { configureStore } from '@reduxjs/toolkit';
import indonesiaSlice from '../features/Indonesia/indonesiaSlice';
import logger from 'redux-logger';

export const store = configureStore({
    reducer: {
        indonesia: indonesiaSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),

  
})

