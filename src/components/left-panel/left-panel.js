import React, { Component } from 'react';
import './left-panel.css';
import RecipeItem from '../recipe-item/recipe-item';
import * as recipeActions from '../../store/actions/recipe.actions';
import PropTypes from 'prop-types';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import RecipeService from '../../services/recipe.service';

class LeftPanel extends Component {
    constructor({ recipes, actions, ...restProps }, context) {
        super();
        console.log("RECIPE SERVICE")
    }

    onRecipeClick(recipe) {
        // if (this.restProps.onRecipeClick) {

        // }
        console.log(this.context.recipeService.getRecipeAsText(recipe.recipe));
    }

    render() {
        return (
            <div className="panel-container">
                <div className="recipes-container">
                    <p className="recipes-title">My Recipes</p>
                    <div className="recipes-list-container">
                        <ul className="recipes-list">
                            {this.props.recipes.map((recipe, ind) => (
                                <RecipeItem key={ind} className="recipe-item" onClick={() => { this.onRecipeClick(recipe)}} recipe={recipe}/>
                            ))}    
                        </ul>
                    </div>
                </div>
            </div>
        );
    };
}
LeftPanel.contextTypes = {
    recipeService: PropTypes.instanceOf(RecipeService)
}

const mapStateToProps = (state) => ({
    recipes: state.recipes
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(recipeActions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LeftPanel);
