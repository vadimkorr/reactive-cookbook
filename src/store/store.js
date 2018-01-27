import { reducers } from './reducers/reducers'
import { createStore, applyMiddleware } from 'redux'
import { RecipeApiService } from '../services/recipe-api.service'
import { SUBMIT_RECIPE } from '../store/actions/recipe.actions';

const serviceMiddleware = myServiceMiddleware(new RecipeApiService())
function myServiceMiddleware(recipeApiService) {
    console.log("myServiceMiddleware init!");
    debugger;
    return ({ dispatch, getState }) => next => action => {
        if (action.type == SUBMIT_RECIPE) {
            debugger;
            console.log(getState());
            //recipeApiService.submitRecipe(getState().);
        }
        return next(action);
    }
}

export default store = createStore(reducers, applyMiddleware(myServiceMiddleware(new RecipeApiService())))