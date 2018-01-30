import * as userActions from '../actions/user.actions'

let userInitialState = {
	name: "",
	token: ""
}

export function userReducer(state = userInitialState, action) {
	switch(action.type) {
		case userActions.SET_USER_NAME: {
			return Object.assign({}, state, {
				name: action.payload.name
			})
		}
		case userActions.SET_TOKEN: {
			return Object.assign({}, state, {
				token: action.payload.token
			})
		}
		default: {
			return state;
		}
	}
	return state;
} 
