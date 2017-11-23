import * as valuesActions from '../actions/values.actions'

let valuesInitialState = {
	ingredients: [],
	quantityUnits: [],
	timeUnits: [],
	processes: []	
}

export function valuesReducer(state = valuesInitialState, action) {
	switch(action.type) {
		case valuesActions.SET_INGREDIENTS: {
			return Object.assign({}, state, {
				ingredients: action.payload.ingredients
			})
		}
		case valuesActions.SET_PROCESSES: {
			return Object.assign({}, state, {
				processes: action.payload.processes
			})
		}
		case valuesActions.SET_QUANTITY_UNITS: {
			return Object.assign({}, state, {
				quantityUnits: action.payload.quantityUnits
			})
		}
		case valuesActions.SET_TIME_UNITS: {
			return Object.assign({}, state, {
				timeUnits: action.payload.timeUnits
			})
		}
		default: {
			return state;
		}
	}
	return state;
} 
