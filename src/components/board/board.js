import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import './board.css';
import ArrayDropdown from '../array-dropdown/array-dropdown';
import * as valuesActions from '../../store/actions/values.actions';

class Board extends Component {
    constructor({ values, actions, ...rest }) {
        super();
        this.state = {
            ingredients: values.ingredients,
            timeUnits: values.timeUnits,
            quantityUnits:  values.quantityUnits,
            processes: values.processes,
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

const mapStateToProps = (state) => ({
    values: state.values
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(valuesActions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Board);
