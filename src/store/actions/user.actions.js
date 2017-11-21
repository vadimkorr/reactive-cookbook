export const SET_USER_NAME = 'SET_USER_NAME';

export function setUserName(name) {
    return {
        type: SET_USER_NAME,
        payload: {
            name: name
        }
    }
}
