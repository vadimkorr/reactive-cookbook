export const SET_USER_NAME = 'SET_USER_NAME';
export const SET_TOKEN = '[USER] SET_TOKEN';

export function setUserName(name) {
    return {
        type: SET_USER_NAME,
        payload: {
            name: name
        }
    }
}

export function setToken(token) {
    return {
        type: SET_TOKEN,
        payload: {
            token: token
        }
    }
}
