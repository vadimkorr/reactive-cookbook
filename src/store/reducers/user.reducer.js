import * as userActions from '../actions/user.actions'

let userInitialState = {
    name: ""
}

export function userReducer(state = userInitialState, action) {
	switch(action.type) {
		case userActions.SET_USER_NAME: {
			return Object.assign({}, state, {
				name: action.payload.name
			})
		}
		default: {
			return state;
		}
	}
	return state;
} 
