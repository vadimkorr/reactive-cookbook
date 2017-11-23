import React, { Component } from 'react';
import './left-panel.css';
import RecipeItem from '../recipe-item/recipe-item';
import * as recipeActions from '../../store/actions/recipe.actions';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class LeftPanel extends Component {
    constructor({ recipes, actions, ...rest }) {
        super();
    }
    render() {
        return (
            <div className="panel-container">
                <div className="recipes-container">
                    <p className="recipes-title">My Recipes</p>
                    <div className="recipes-list-container">
                        <ul className="recipes-list">
                            {this.props.recipes.map((recipe, ind) => (
                                <RecipeItem key={ind} className="recipe-item" recipeName={recipe.name}/>
                            ))}    
                        </ul>
                    </div>
                </div>
            </div>
        );
    };
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
