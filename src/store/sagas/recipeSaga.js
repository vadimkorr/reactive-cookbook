import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { GET_MY_RECIPES, GET_MY_RECIPES_SUCCESS } from '../actions/recipe.actions';
import RecipeApiService from '../../services/recipe-api.service';
import { selectUserToken } from '../selectors';
import {select} from 'redux-saga/effects';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* getMyRecipes(action) {
  const token = yield select(selectUserToken);
  const result = yield call(RecipeApiService.getRecipes, token);
  debugger;
  yield put.resolve({
    type: GET_MY_RECIPES_SUCCESS,
    payload: {
      recipes: result
    }
  });
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* recipeSaga() {
  yield takeEvery(GET_MY_RECIPES, getMyRecipes);
}

export default recipeSaga;