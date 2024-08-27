import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import reduxStorage from "./storage";
import {FLUSH, persistReducer,persistStore, REGISTER} from 'redux-persist'
 const config = {
    key:'root',
    storage:reduxStorage,
    whitelist :['game'],
 }

 const PReducer = persistReducer(config,rootReducer);

 export const store = configureStore({
    reducer:PReducer,
    middleware:getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck:{
            ignoreActions:[FLUSH,REGISTER]
        }
    })
 })

 export const persistor = persistStore(store);