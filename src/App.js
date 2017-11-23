import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';
import LeftPanel from './components/left-panel/left-panel';
import Board from './components/board/board';

import * as recipeActions from './store/actions/recipe.actions'
import * as userActions from './store/actions/user.actions'

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
    
    console.log(store.getState())
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1> */}
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
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
