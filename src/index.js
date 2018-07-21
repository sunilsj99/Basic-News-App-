import React from 'react';
import ReactDOM from 'react-dom';
import ReduxPromise from 'redux-promise';
import {createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css'

import reducers from './reducers';

const storeWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
    <Provider store={storeWithMiddleware(reducers)}>
    <App />
    </Provider>
   ,
     document.getElementById('root')
    );
registerServiceWorker();
