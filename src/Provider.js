import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RecipeService from './services/recipe.service';

class Provider extends Component {
    getChildContext() {
        return {
            store: this.props.store,
            recipeService: this.props.recipeService
        }
    }

    render() {
        return this.props.children
    }
}
Provider.childContextTypes = {
    store: PropTypes.object,
    recipeService: PropTypes.instanceOf(RecipeService)
}

export default Provider;