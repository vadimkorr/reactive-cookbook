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
                ...state,
                {
                    //id: state.length,
                    //userId: null,
                    date: action.payload.date,
                    name: action.payload.name,
                    recipeSteps: action.payload.recipe
                }
            ]
        }
        default: {
            return state;
        }
	}
	return state;
}
