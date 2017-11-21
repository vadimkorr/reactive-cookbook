export const PUT_INGREDIENT = '[RECIPE] PUT_INGREDIENT';
export const MAKE_PROCESS = '[RECIPE] MAKE_PROCESS';
export const WAIT = '[RECIPE] WAIT';
export const SUBMIT_RECIPE = '[RECIPE] SUBMIT_RECIPE';

export function putIngredient(name, count, quantityUnits) {
	return {
		type: PUT_INGREDIENT,
		payload: {
			type: PUT_INGREDIENT,
			ingredient: name,
			quantityUnits: quantityUnits,
			count: count
		}
	}
}

export function makeProcess(processName) {
	return {
		type: MAKE_PROCESS,
		payload: {
			type: MAKE_PROCESS,
			processName: processName
		}
	}
}

export function wait(time, timeUnits) {
	return {
		type: WAIT,
		payload: {
			type: WAIT,
			time: time,
			timeUnits: timeUnits
		}
	}
}

export function submitRecipe() {
	return {
		type: SUBMIT_RECIPE
	}
}
