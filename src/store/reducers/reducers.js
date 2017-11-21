import { combineReducers } from 'redux'
import * as recipeReducers from './recipe.reducer'
import * as userReducers from './user.reducer'

export const reducers = combineReducers({
    userReducers: userReducers.userReducer,
    currentRecipeReduce: recipeReducers.currentRecipeReducer,
    recipesReducer: recipeReducers.recipeReducer
})
