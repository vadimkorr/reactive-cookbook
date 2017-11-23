import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import About from './components/about/about';
import Header from './components/header/header';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { reducers } from './store/reducers/reducers';
//import { Router, Route, hashHistory } from 'react-router';
import {
    HashRouter,
    Route,
    Link,
    Switch
  } from 'react-router-dom';

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        
        <HashRouter>
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route path="/about" component={About} />
                </Switch>
            </div>
        </HashRouter>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
