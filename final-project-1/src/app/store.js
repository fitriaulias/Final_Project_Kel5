import { configureStore } from '@reduxjs/toolkit';
import indonesiaSlice from '../features/Indonesia/indonesiaSlice';
import logger from 'redux-logger';
import allSlice from '../features/All/allSlice';
import savedSlice from '../features/Saved/savedSlice';

export const store = configureStore({
    reducer: {
        indonesia: indonesiaSlice,
        all: allSlice,
        saved: savedSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),

  
})

