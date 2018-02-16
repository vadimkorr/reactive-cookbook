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
import RecipeService from './services/recipe.service';

class App extends Component {
  constructor(props, { store, recipeService, apiService }) {
    super();
    console.log("A P P: ", recipeService)
    this.state = {
      store
    }

    const boundSetUserName = (name) => store.dispatch(userActions.setUserName(name))
    
    const boundPutIngredient = (name, count, quantityUnits) => store.dispatch(recipeActions.putIngredient(name, count, quantityUnits))
    const boundMakeProcess = (processName) => store.dispatch(recipeActions.makeProcess(processName))
    const boundWait = (time, timeUnits) => store.dispatch(recipeActions.wait(time, timeUnits))
    const boundSubmitRecipe = () => store.dispatch(recipeActions.submitRecipe())
    
    boundPutIngredient("Potato", 5, "piece")
    boundSetUserName("John")

    store.dispatch(valuesActions.setIngredients(dataProvider.ingredients))
    store.dispatch(valuesActions.setProcesses(dataProvider.processes))
    store.dispatch(valuesActions.setQuantityUnits(dataProvider.quantityUnits))
    store.dispatch(valuesActions.setTimeUnits(dataProvider.timeUnits))
    
    //create recipe
    for(let i=0; i<1; i++) {
      (() => {
        store.dispatch(recipeActions.putIngredient(dataProvider.recipeStepType[0], 'ing1', 5, 'kg'));
        store.dispatch(recipeActions.putIngredient(dataProvider.recipeStepType[0], 'ing2', 2, 'kg'));
        store.dispatch(recipeActions.putIngredient(dataProvider.recipeStepType[0], 'ing3', 2, 'kg'));
        store.dispatch(recipeActions.putIngredient(dataProvider.recipeStepType[0], 'ing3', 1, 'liter'));
        store.dispatch(recipeActions.makeProcess(dataProvider.recipeStepType[1], "cool"));
        store.dispatch(recipeActions.wait(dataProvider.recipeStepType[2], 1, 'h'));
        let name = i == 0 ? "very very very long name of salad" : "Salad " + i;
        store.dispatch(recipeActions.submitRecipe(name, Date.now(), store.getState().currentRecipe));
        store.dispatch(recipeActions.clearRecipe());
      })();
    }
    
    
    console.log(store.getState())
  }
  render() {
    return (
      <div className="content-container">
        <LeftPanel />
        <Board getCurrentRecipe={() => this.state.store.getState().currentRecipe} />
      </div>
    );
  }
}
App.contextTypes = {
  store: PropTypes.object,
}

export default App;
