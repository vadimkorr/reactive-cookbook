export const SET_INGREDIENTS = '[VALUES] SET_INGREDIENTS';
export const SET_PROCESSES = '[VALUES] SET_PROCESSES';
export const SET_QUANTITY_UNITS = '[VALUES] SET_QUANTITY_UNITS';
export const SET_TIME_UNITS = '[VALUES] SET_TIME_UNITS';

export function setIngredients(ingredients) {
    return {
        type: SET_INGREDIENTS,
        payload: {
            ingredients: ingredients
        }
    }
}

export function setProcesses(processes) {
    return {
        type: SET_PROCESSES,
        payload: {
            processes: processes
        }
    }
}

export function setQuantityUnits(quantityUnits) {
    return {
        type: SET_QUANTITY_UNITS,
        payload: {
            quantityUnits: quantityUnits
        }
    }
}

export function setTimeUnits(timeUnits) {
    return {
        type: SET_TIME_UNITS,
        payload: {
            timeUnits: timeUnits
        }
    }
}