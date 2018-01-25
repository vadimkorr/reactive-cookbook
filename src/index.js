import React from 'react';
import ReactDOM from 'react-dom';
//import { Provider } from 'react-redux';
import Provider from './Provider';
import './index.css';
import App from './App';
import About from './components/about/about';
import Login from './components/login/login';
import Signup from './components/signup/signup';
import Header from './components/header/header';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { reducers } from './store/reducers/reducers';
//import { Router, Route, hashHistory } from 'react-router';
import RecipeService from './services/recipe.service';
import {
    HashRouter,
    Route,
    Link,
    Switch
  } from 'react-router-dom';

ReactDOM.render(
    <Provider 
        store={createStore(
            reducers,
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}
        recipeService={new RecipeService()}>
        
        <HashRouter>
            <div className="root-container">
                <Header className="header-container"/>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route path="/about" component={About} />
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={Signup} />                    
                </Switch>
            </div>
        </HashRouter>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
