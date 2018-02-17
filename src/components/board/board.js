import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import FormControl  from 'react-bootstrap/lib/FormControl';
import Button  from 'react-bootstrap/lib/Button';
import './board.css';
import ArrayDropdown from '../array-dropdown/array-dropdown';
import * as valuesActions from '../../store/actions/values.actions';
import * as recipeActions from '../../store/actions/recipe.actions';
import dataProvider from '../../services/dataProvider.service';

class Board extends Component {
    constructor({ values, dispatchValueAction, dispatchRecipeAction, getCurrentRecipe, ...rest }) {
        super();

        console.log(rest);
        this.state = {
            ingredients: values.ingredients,
            timeUnits: values.timeUnits,
            quantityUnits:  values.quantityUnits,
            processes: values.processes,
            recipeSteps: "",
            recipeName: undefined,
            isCreatingRecipe: false
        };
    }

    startRecipe = (e) => {
        this.props.dispatchRecipeAction.startRecipe(
            this.state.recipeName,
            new Date().toUTCString()
        );

        this.setState({
            isCreatingRecipe: true
        });
    }

    stopRecipe = (e) => {
        this.setState({
            isCreatingRecipe: false
        });
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

    pushToRecipeSteps(...args) {
        console.log(this.refs.recipeSteps);
        this.setState({
            recipeSteps: this.state.recipeSteps + args + "\n"
        });
    }

    onPutDone = (e) => {
        this.props.dispatchRecipeAction.putIngredient(
            dataProvider.recipeStepType.indexOf('put'),  
            this.refs.ingredientName.state.value,
            this.refs.ingredientCount.value,
            this.refs.ingredientQuantityUnits.state.value
        );
        this.pushToRecipeSteps("put");
    }

    onWaitDone = () => {
        this.props.dispatchRecipeAction.wait(
            dataProvider.recipeStepType.indexOf('wait'), 
            this.waitCount.value,
            this.waitTimeUnits.getSelected()
        );
        this.pushToRecipeSteps("wait");
    }

    onDoDone = (e) => {
        this.props.dispatchRecipeAction.makeProcess(
            dataProvider.recipeStepType.indexOf('make'), 
            this.refs.makeProcess.state.value
        );
        this.pushToRecipeSteps("make");
    }

    onSaveRecipe = (e) => {
        this.props.dispatchRecipeAction.submitRecipe(this.state.recipeName, Date.now(), this.props.getCurrentRecipe());
        this.setState({
            recipeSteps: ""
        })
        this.stopRecipe();
        alert("Your recipe was succesfully saved!");
    }

    render() {
        return (
            <div className="board" >
                {!this.state.isCreatingRecipe ? (
                    <div className="getting-started">
                        <span>What will we cook today?</span>
                        <div className="recipe-name-controls">
                            <FormControl type="text" onChange={ (e) => this.setState({ recipeName: e.target.value })} />
                            <Button onClick={ this.startRecipe }>Let's start</Button>
                        </div>
                    </div>
                ) : (
                    <div className="board-elements">
                        <div className="recipe-name">{this.state.recipeName}</div>
                        <div className="recipe-actions">
                            <div className="recipe-action-container">
                                <span>Put</span>
                                <ArrayDropdown arr={this.state.ingredients} ref="ingredientName"/>
                                <FormControl type="text" ref="ingredientCount"/>
                                <ArrayDropdown arr={this.state.quantityUnits} ref="ingredientQuantityUnits"/>
                                <Button bsStyle="success" className="actionDone" onClick={this.onPutDone}>Done</Button>
                            </div>
                            <div className="recipe-action-container">
                                <span>Wait</span>
                                <FormControl type="text" inputRef={ node => this.waitCount = node }/>
                                <ArrayDropdown arr={this.state.timeUnits} ref={ node => this.waitTimeUnits = node } />
                                <Button bsStyle="success" className="actionDone" onClick={this.onWaitDone}>Done</Button>
                            </div>
                            <div className="recipe-action-container">
                                <span>Do</span>
                                <ArrayDropdown arr={this.state.processes} ref="makeProcess"/>
                                <Button bsStyle="success" className="actionDone" onClick={this.onDoDone}>Done</Button>
                            </div>
                        </div>
                        <Button bsStyle="success" bsSize="large" onClick={this.onSaveRecipe}>Save recipe</Button>
                        <FormControl componentClass="textarea" placeholder="textarea" ref="recipeSteps" value={this.state.recipeSteps} />
                    </div>
                )}
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
