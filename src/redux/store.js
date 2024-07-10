import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { authReducer } from './auth/authSlice';
import { mealsReducer } from './meals/mealsSlice';
import { recommendedReducer } from './recommended/recommendedSlice';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

export const store = configureStore({
  reducer: {
    auth: persistReducer(
      {
        key: 'auth',
        storage,
      },
      authReducer
    ),
    user: persistReducer(
      {
        key: 'user',
        storage,
      },
      mealsReducer
    ),
    recommended: persistReducer(
      {
        key: 'recommended',
        storage,
      },
      recommendedReducer
    ),
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
