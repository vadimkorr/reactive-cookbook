import React, { Component } from 'react';
import './recipe-item.css';

class RecipeItem extends Component {
    constructor(props) {
        super();
    }
    render() {
        return (
            <div className="recipe-item-container">
                {this.props.recipeName}
            </div>
        );
    };
}

export default RecipeItem;
