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
    this.state = {
      store
    }

    store.dispatch(valuesActions.setIngredients(dataProvider.ingredients))
    store.dispatch(valuesActions.setProcesses(dataProvider.processes))
    store.dispatch(valuesActions.setQuantityUnits(dataProvider.quantityUnits))
    store.dispatch(valuesActions.setTimeUnits(dataProvider.timeUnits))
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
