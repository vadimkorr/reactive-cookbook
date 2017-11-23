import { combineReducers } from 'redux'
import * as recipeReducers from './recipe.reducer'
import * as userReducers from './user.reducer'
import * as valuesReducers from './values.reducer'

export const reducers = combineReducers({
    user: userReducers.userReducer,
    currentRecipe: recipeReducers.currentRecipeReducer,
    recipes: recipeReducers.recipeReducer,
    values: valuesReducers.valuesReducer
})
