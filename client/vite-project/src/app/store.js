import { combineReducers, configureStore } from '@reduxjs/toolkit'
import detailsReducers from './details.js'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const reducer=combineReducers({
  detailsData:detailsReducers
})

const persistedReducer=persistReducer(persistConfig,reducer)

export const store = configureStore({
  reducer: persistedReducer
})