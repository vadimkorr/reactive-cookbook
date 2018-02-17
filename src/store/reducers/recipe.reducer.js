import * as recipeActions from '../actions/recipe.actions'

let initState = {
    date: null,
    name: null,
    recipeSteps: []
}

export function currentRecipeReducer(state = initState, action) {
	switch(action.type) {
        case recipeActions.START_RECIPE: {
			return {
                ...state,
                name: action.payload.name,
                date: action.payload.date
            }
		}
		case recipeActions.PUT_INGREDIENT: {
			return {
                ...state,
                recipeSteps: state.recipeSteps.concat([{
                        type: action.payload.type,
                        description: {
                            ingredient: action.payload.ingredient,
                            count: action.payload.count,
                            quantityUnits: action.payload.quantityUnits
                        }
                    }
                ])   
            }
		}
		case recipeActions.MAKE_PROCESS: {
			return {
                ...state,
                recipeSteps: state.recipeSteps.concat([{
                        type: action.payload.type,
                        description: {
                            processName: action.payload.processName 
                        }
                    }
                ])
            }
		}
		case recipeActions.WAIT: {
            console.log("=====> currentRecipeReducer", action.payload);
			return {
                ...state,
                recipeSteps: state.recipeSteps.concat([{
                        type: action.payload.type,
                        description: {
                            timeAmount: action.payload.time,
                            timeUnits: action.payload.timeUnits
                        }
                    }
                ])
            }
        }
        case recipeActions.CLEAR_RECIPE: {
			return initState
        }
        default: {
            return state;
        }
	}
}

export function recipeReducer(state = [], action) {
	switch(action.type) {
		case recipeActions.SUBMIT_RECIPE: {
			return [
                ...state
            ]
        }
        case recipeActions.SUBMIT_RECIPE_SUCCESS: {
			return [
                ...state,
                {
                    id: state.length,
                    date: action.payload.recipe.date,
                    name: action.payload.recipe.name,
                    recipeSteps: action.payload.recipe.recipeSteps
                }
            ]
        }
        case recipeActions.GET_MY_RECIPES_SUCCESS: { 
            return [
                ...state,
                ...action.payload.recipes
            ]
        }
        default: {
            return state;
        }
	}
	return state;
}
