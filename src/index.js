import React from 'react';
import ReactDOM from 'react-dom';
import Provider from './Provider';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { reducers } from './store/reducers/reducers';


ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
