import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import './board.css';
import ArrayDropdown from '../array-dropdown/array-dropdown';
import * as valuesActions from '../../store/actions/values.actions';
import * as recipeActions from '../../store/actions/recipe.actions';


class Board extends Component {
    constructor({ values, dispatchValueAction, dispatchRecipeAction, getCurrentRecipe, ...rest }) {
        super();

        console.log(rest);
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

    onPutDone = (e) => {
        this.props.dispatchRecipeAction.putIngredient(
            this.refs.ingredientName.state.value,
            this.refs.ingredientCount.value,
            this.refs.ingredientQuantityUnits.state.value
        );
    }

    onWaitDone = (e) => {
        this.props.dispatchRecipeAction.wait(
            this.refs.waitCount.value,
            this.refs.waitTimeUnits.state.value
        );
    }

    onDoDone = (e) => {
        this.props.dispatchRecipeAction.makeProcess(
            this.refs.makeProcess.state.value
        );      
    }

    onSaveRecipe = (e) => {
        this.props.dispatchRecipeAction.submitRecipe(Date.now(), this.refs.recipeName.value, this.props.getCurrentRecipe());
        this.props.dispatchRecipeAction.clearRecipe();
        
        //store.dispatch(recipeActions.submitRecipe(Date.now(), "Salad", store.getState().currentRecipe));
        //store.dispatch(recipeActions.clearRecipe());
    }

    render() {
        return (
            <div className="board-container">
                <div className="getting-started">
                    <span>What will we cook today?</span>
                    <div className="recipe-name-controls">
                        <input type="text" ref="recipeName" />
                        <button>Let's start</button>
                    </div>
                </div>
                <div className="recipe-name"></div>
                <div className="recipe-actions">
                    <div className="recipe-action-container">
                        <span>Put</span>
                        <ArrayDropdown arr={this.state.ingredients} ref="ingredientName"/>
                        <input type="text" ref="ingredientCount"/>
                        <ArrayDropdown arr={this.state.quantityUnits} ref="ingredientQuantityUnits"/>
                        <button className="actionDone btn btn-info" onClick={this.onPutDone}>Done</button>
                    </div>
                    <div className="recipe-action-container">
                        <span>Wait</span>
                        <input type="text" ref="waitCount"/>
                        <ArrayDropdown arr={this.state.timeUnits} ref="waitTimeUnits"/>
                        <button className="actionDone" onClick={this.onWaitDone}>Done</button>
                    </div>
                    <div className="recipe-action-container">
                        <span>Do</span>
                        <ArrayDropdown arr={this.state.processes} ref="makeProcess"/>
                        <button className="actionDone" onClick={this.onDoDone}>Done</button>
                    </div>
                </div>
                <div>
                    <button onClick={this.onSaveRecipe}>Save recipe</button>
                </div>
            </div>
        );
    };
}
Board.contextTypes = {
    store: PropTypes.object
}

const mapStateToProps = (state) => ({
    values: state.values,
});

const mapDispatchToProps = (dispatch) => ({
    dispatchValueAction: bindActionCreators(valuesActions, dispatch),
    dispatchRecipeAction: bindActionCreators(recipeActions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Board);
