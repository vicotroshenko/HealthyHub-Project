import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { authReducer } from './auth/authSlice';
import { mealsReducer } from "./meals/mealsSlice";
import { recommendedReducer } from "./recommended/recommendedSlice";
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
			blacklist: ["token"],
		}, authReducer),
		user: persistReducer({
			key: 'user',
			storage,
		}, mealsReducer),
		recommended: persistReducer({
			key: 'recommended',
			storage,
			// blacklist: ["recommendedFood", "isLoading", "isLoadError"],
		}, recommendedReducer),
	},
	middleware,
	devTools: process.env.NODE_ENV === "development",
})

export const persistor = persistStore(store);