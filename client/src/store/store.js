
import { configureStore } from '@reduxjs/toolkit'; 
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
 

import thunk from 'redux-thunk'; 

import rootReducer from './rootreducer';





const persistConfig = { 
    key: 'root', 
    version: 1, 
    storage, 
}


const persistedReducer = persistReducer(persistConfig, rootReducer); 


const reduxDevToolsCompose = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']; 


// const preloadedState = {
//     cartReducer: {
//         productsCounter: localStorage.productsCounter || 0, 
//         products: localStorage.cart_products ? JSON.parse(localStorage.cart_products) : [],
//     }, 
// } 


const store = configureStore({
    devTools: reduxDevToolsCompose,
    reducer: persistedReducer, 
    middleware: [thunk], 
    // preloadedState: preloadedState,
});


export default store; 