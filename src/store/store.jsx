import { configureStore,combineReducers } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'
import {persistReducer,persistStore} from 'redux-persist'
import registrationReducer from './slices/reegitrationSlices'
import paymentDetailsReducer from "./slices/paymentSlice";
const rootReducer=combineReducers({
    registrationDetails:registrationReducer,
    paymentDetails:paymentDetailsReducer
  })
  const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    whitelist: ['registrationDetails','paymentDetails'],
  
  }
  const persistedReducer = persistReducer(persistConfig, rootReducer)

  export const Store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddlware)=> getDefaultMiddlware({
      serializableCheck:false
    }),
  })
  
  
  
  export const persistor=persistStore(Store)
