import React, { Component } from 'react';
import './left-panel.css';
import RecipeItem from '../recipe-item/recipe-item';

class LeftPanel extends Component {
    render() {
        return (
            <div className="panel-container">
                <div className="recipes-container">
                    <p className="recipes-title">My Recipes</p>
                    <div className="recipes-list-container">
                        <ul className="recipes-list">
                            <RecipeItem className="recipe-item"/>
                        </ul>
                    </div>
                </div>
            </div>
        );
    };
}

export default LeftPanel;
