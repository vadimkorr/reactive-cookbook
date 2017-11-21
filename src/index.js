import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { reducers } from './store/reducers/reducers';
import * as recipeActions from './store/actions/recipe.actions'
import * as userActions from './store/actions/user.actions'

let store = createStore(reducers);
const boundSetUserName = (name) => store.dispatch(userActions.setUserName(name))

const boundPutIngredient = (name, count, quantityUnits) => store.dispatch(recipeActions.putIngredient(name, count, quantityUnits))
const boundMakeProcess = (processName) => store.dispatch(recipeActions.makeProcess(processName))
const boundWait = (time, timeUnits) => store.dispatch(recipeActions.wait(time, timeUnits))
const boundSubmitRecipe = () => store.dispatch(recipeActions.submitRecipe())

boundPutIngredient("Potato", 5, "piece")
boundSetUserName("John")

console.log(store.getState())

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
