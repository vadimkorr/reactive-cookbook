import React, { Component } from 'react';
import './board.css';
import ingredientsService from '../../services/ingredients.service';
import timeUnitsService from '../../services/timeUnits.service';
import quantityUnitsService from '../../services/quantityUnits.service';
import processesService from '../../services/processes.service';
import ArrayDropdown from '../array-dropdown/array-dropdown';

class Board extends Component {
    constructor() {
        super()
        this.state = {
            ingredients: new ingredientsService().getIngredients(),
            timeUnits: new timeUnitsService().getTimeUnits(),
            quantityUnits: new quantityUnitsService().getQuantityUnits(),
            processes: new processesService().getProcesses(),
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

export default Board;
