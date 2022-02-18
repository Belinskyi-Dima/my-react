
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import {PersistGate} from 'redux-persist/integration/react'

import store from './store/store';
import App from './components/App/App'; 

import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';



let persistor = persistStore(store); 

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}> 

            <PersistGate loading={null} persistor={persistor}>
                <App />
            </PersistGate> 

        </Provider>
    </React.StrictMode>,     
    document.getElementById('root')
);
