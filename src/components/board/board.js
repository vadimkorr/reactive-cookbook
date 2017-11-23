import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './board.css';
import ArrayDropdown from '../array-dropdown/array-dropdown';

class Board extends Component {
    constructor(props, { store }) {
        super(props);
        this.state = {
            ingredients: store.getState().values.ingredients,
            timeUnits: store.getState().values.timeUnits,
            quantityUnits: store.getState().values.quantityUnits,
            processes: store.getState().values.processes,
        };
    }

    setSelect(arr) {
        return (
            <select>
                {arr.map((item, index) => (
                    <option key={index} value={item}>{item}</option>
                ))}
            </select>
        );
    }

    render() {
        return (
            <div className="board-container">
                <div className="getting-started">
                    <span>What will we cook today?</span>
                    <div className="recipe-name-controls">
                        <input type="text" />
                        <button>Let's start</button>
                    </div>
                </div>
                <div className="recipe-name"></div>
                <div className="recipe-actions">
                    <div className="recipe-action-container">
                        <span>Put</span>
                        <ArrayDropdown arr={this.state.ingredients}/>
                        <input type="text"/>
                        <ArrayDropdown arr={this.state.quantityUnits}/>
                        <button className="actionDone btn btn-info">Done</button>
                    </div>
                    <div className="recipe-action-container">
                        <span>Wait</span>
                        <input type="text"/>
                        <ArrayDropdown arr={this.state.timeUnits}/>
                        <button className="actionDone">Done</button>
                    </div>
                    <div className="recipe-action-container">
                        <span>Do</span>
                        <ArrayDropdown arr={this.state.processes}/>
                        <button className="actionDone">Done</button>
                    </div>
                </div>
            </div>
        );
    };
}
Board.contextTypes = {
    store: PropTypes.object
}
export default Board;
