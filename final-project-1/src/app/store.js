import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import savedSlice from '../features/Saved/savedSlice';

export const store = configureStore({
    reducer: {
        saved: savedSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),

  
})

