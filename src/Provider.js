import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RecipeService from './services/recipe.service';
import ApiService from './services/api.service';

class Provider extends Component {
    getChildContext() {
        return {
            store: this.props.store,
            recipeService: this.props.recipeService,
            apiService: this.props.apiService
        }
    }

    render() {
        return this.props.children
    }
}
Provider.childContextTypes = {
    store: PropTypes.object,
    recipeService: PropTypes.instanceOf(RecipeService),
    apiService: PropTypes.instanceOf(ApiService)
}

export default Provider;