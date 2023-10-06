import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { authReducer } from './auth/authSlice';
import { mealsReducer } from "./meals/mealsSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const middleware = [
	...getDefaultMiddleware({
		serializableCheck: {
			ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
		}
	})
];

export const store = configureStore({
	reducer: {
		auth: persistReducer({
			key: 'auth',
			storage,
		}, authReducer),
		user: persistReducer({
			key: 'user',
			storage,
		}, mealsReducer)
	},
	middleware,
	devTools: process.env.NODE_ENV === "development",
})

export const persistor = persistStore(store);