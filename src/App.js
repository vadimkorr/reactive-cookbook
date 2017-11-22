import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LeftPanel from './components/left-panel/left-panel';
import Board from './components/board/board';

class App extends Component {
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

export default App;
