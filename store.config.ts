import { configureStore, combineReducers } from '@reduxjs/toolkit'
import productsReducer from './store/store.products'
import { productsApi } from './api/productsApi'

//persist storage
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  persistReducer, persistStore, FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, combineReducers({
  products: productsReducer,
  [productsApi.reducerPath]: productsApi.reducer,
}))


export function setupStore(preloadedState = {} as any) {
  return configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(productsApi.middleware),
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState
  })
}

export const store = setupStore({})
export const persistor = persistStore(store)