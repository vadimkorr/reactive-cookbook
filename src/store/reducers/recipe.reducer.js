import * as recipeActions from '../actions/recipe.actions'

export function currentRecipeReducer(state = [], action) {
	switch(action.type) {
		case recipeActions.PUT_INGREDIENT: {
			return [
                ...state,
                {
                    type: action.type,
                    description: {
                        ingredient: action.payload.ingredient,
                        count: action.payload.count,
                        quantityUnits: action.payload.quantityUnits
                    }
                }
            ]
		}
		case recipeActions.MAKE_PROCESS: {
			return [
                ...state,
                {
                    type: action.type,
                    description: {
                        processName: action.payload.processName 
                    }
                }
            ]
		}
		case recipeActions.WAIT: {
			return [
                ...state,
                {
                    type: action.type,
                    description: {
                        time: action.payload.time,
                        timeUnits: action.payload.timeUnits
                    }
                }
            ]
        }
        case recipeActions.CLEAR_RECIPE: {
			return []
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
                    id: state.length,
                    date: action.payload.date,
                    name: action.payload.name,
                    recipe: action.payload.recipe
                }
            ]
        }
        default: {
            return state;
        }
	}
	return state;
}
