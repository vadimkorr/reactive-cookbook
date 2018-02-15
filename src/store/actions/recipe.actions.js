export const PUT_INGREDIENT = '[RECIPE] PUT_INGREDIENT';
export const MAKE_PROCESS = '[RECIPE] MAKE_PROCESS';
export const WAIT = '[RECIPE] WAIT';
export const CLEAR_RECIPE = '[RECIPE] CLEAR_RECIPE';
export const SUBMIT_RECIPE = '[RECIPE] SUBMIT_RECIPE';
export const START_RECIPE = '[RECIPE] START_RECIPE';
export const GET_MY_RECIPES = '[RECIPE] GET_MY_RECIPES';

export const GET_MY_RECIPES_SUCCESS = '[RECIPE] GET_MY_RECIPES_SUCCESS';

export function putIngredient(type, name, count, quantityUnits) {
	return {
		type: PUT_INGREDIENT,
		payload: {
			type: type,
			ingredient: name,
			quantityUnits: quantityUnits,
			count: count
		}
	}
}

export function makeProcess(type, processName) {
	return {
		type: MAKE_PROCESS,
		payload: {
			type: type,
			processName: processName
		}
	}
}

export function wait(type, time, timeUnits) {
	return {
		type: WAIT,
		payload: {
			type: type,
			time: time,
			timeUnits: timeUnits
		}
	}
}

export function startRecipe(name, date) {
	return {
		type: START_RECIPE,
		payload: {
			name,
			date
		}
	}
}

export function clearRecipe() {
	return {
		type: CLEAR_RECIPE
	}
}

export function submitRecipe(recipe) {
	return {
		type: SUBMIT_RECIPE,
		payload: {
			recipe
		}
	}
}

export function getMyRecipes() {
	return {
		type: GET_MY_RECIPES
	}
}

export function getMyRecipesSuccess(recipes) {
	return {
		type: GET_MY_RECIPES_SUCCESS,
		payload: {
			recipes
		}
	}
}
