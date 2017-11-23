import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';
import LeftPanel from './components/left-panel/left-panel';
import Board from './components/board/board';
import dataProvider from './services/dataProvider.service';

import * as recipeActions from './store/actions/recipe.actions'
import * as userActions from './store/actions/user.actions'

import * as valuesActions from './store/actions/values.actions'

class App extends Component {
  constructor(props, { store }) {
    super(props);

    const boundSetUserName = (name) => store.dispatch(userActions.setUserName(name))
    
    const boundPutIngredient = (name, count, quantityUnits) => store.dispatch(recipeActions.putIngredient(name, count, quantityUnits))
    const boundMakeProcess = (processName) => store.dispatch(recipeActions.makeProcess(processName))
    const boundWait = (time, timeUnits) => store.dispatch(recipeActions.wait(time, timeUnits))
    const boundSubmitRecipe = () => store.dispatch(recipeActions.submitRecipe())
    
    boundPutIngredient("Potato", 5, "piece")
    boundSetUserName("John")

    store.dispatch(valuesActions.setIngredients(new dataProvider().ingredients))
    store.dispatch(valuesActions.setProcesses(new dataProvider().processes))
    store.dispatch(valuesActions.setQuantityUnits(new dataProvider().quantityUnits))
    store.dispatch(valuesActions.setTimeUnits(new dataProvider().timeUnits))
    
    //create recipe
    store.dispatch(recipeActions.putIngredient('ing1', 5, 'kg'));
    store.dispatch(recipeActions.putIngredient('ing2', 2, 'kg'));
    store.dispatch(recipeActions.putIngredient('ing3', 2, 'kg'));
    store.dispatch(recipeActions.putIngredient('ing3', 1, 'liter'));
    store.dispatch(recipeActions.makeProcess("cool"));
    store.dispatch(recipeActions.wait(1, 'h'));

    store.dispatch(recipeActions.submitRecipe(Date.now(), "Salad", store.getState().currentRecipe));
    store.dispatch(recipeActions.clearRecipe());
    
    
    
    
    
    console.log(store.getState())
  }
  render() {
    return (
      <div className="App">
        <div className="content-container">
          <LeftPanel className="left-container" />
          <Board className="board"/>
        </div>
      </div>
    );
  }
}
App.contextTypes = {
  store: PropTypes.object
}

export default App;
