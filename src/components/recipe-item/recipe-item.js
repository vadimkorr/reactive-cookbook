import React, { Component } from 'react';
import './recipe-item.css';

class RecipeItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="recipe-item-container" onClick={this.props.onClick ? this.props.onClick : () => {}}>
                {this.props.recipe.name}
            </div>
        );
    };
}

export default RecipeItem;
