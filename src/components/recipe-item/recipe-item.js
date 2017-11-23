import React, { Component } from 'react';
import './recipe-item.css';
import Panel  from 'react-bootstrap/lib/Panel';


class RecipeItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Panel onClick={this.props.onClick ? this.props.onClick : () => {}}>
                {this.props.recipe.name}
            </Panel>
        );
    };
}

export default RecipeItem;
