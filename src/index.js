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
import { createStore, applyMiddleware } from 'redux';
import { reducers } from './store/reducers/reducers';
//import { Router, Route, hashHistory } from 'react-router';
import RecipeService from './services/recipe.service';
import ApiService from './services/api.service';

import RecipeApiService from './services/recipe-api.service'
import { SUBMIT_RECIPE } from './store/actions/recipe.actions';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './store/sagas'

import {
    HashRouter,
    Route,
    Link,
    Switch
  } from 'react-router-dom';

const sagaMiddleware = createSagaMiddleware();

const serviceMiddleware = myServiceMiddleware(new RecipeApiService())
function myServiceMiddleware(recipeApiService) {
    console.log("myServiceMiddleware init!");
    return ({ dispatch, getState }) => next => action => {
        if (action.type == SUBMIT_RECIPE) {
            console.log(getState());
            recipeApiService.submitRecipe(getState().currentRecipe, getState().user.token);
        }
        return next(action);
    }
}

const store = createStore(
    reducers,
    applyMiddleware(serviceMiddleware, sagaMiddleware)
)//,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

rootSaga.map(s =>sagaMiddleware.run(s))

ReactDOM.render(
    <Provider 
        store={ store }
        recipeService={new RecipeService()}
        apiService={new ApiService()}>
        
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
