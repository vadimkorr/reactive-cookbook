import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { GET_MY_RECIPES, GET_MY_RECIPES_SUCCESS } from '../actions/recipe.actions';
// import Api from '...'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* getMyRecipes(action) {
    // const user = yield call(Api.fetchUser, action.payload.userId);
    yield put({type: GET_MY_RECIPES_SUCCESS, recipes: [1, 2, 3]});
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* recipeSaga() {
  yield takeEvery(GET_MY_RECIPES, getMyRecipes);
}

export default recipeSaga;