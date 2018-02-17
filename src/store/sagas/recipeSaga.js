import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { GET_MY_RECIPES, GET_MY_RECIPES_SUCCESS, CLEAR_RECIPE, SUBMIT_RECIPE, SUBMIT_RECIPE_SUCCESS } from '../actions/recipe.actions';
import RecipeApiService from '../../services/recipe-api.service';
import { selectUserToken, selectCurrentRecipe } from '../selectors';
import {select} from 'redux-saga/effects';

function* getMyRecipes(action) {
  const token = yield select(selectUserToken);
  const result = yield call(RecipeApiService.getRecipes, token);
  yield put.resolve({
    type: GET_MY_RECIPES_SUCCESS,
    payload: {
      recipes: result
    }
  });
}

function* submitRecipe(action) {
  const token = yield select(selectUserToken);
  const currentRecipe = yield select(selectCurrentRecipe);
  const result = yield call(RecipeApiService.submitRecipe, currentRecipe, token);

  yield put({
    type: SUBMIT_RECIPE_SUCCESS,
    payload: {
      id: result,
      name: action.payload.name,
      date: action.payload.date,
      recipe: action.payload.recipe,      
    }
  });
  alert("Your recipe was succesfully saved!");
  yield put({
    type: CLEAR_RECIPE
  });
}

function* recipeSaga() {
  yield takeEvery(GET_MY_RECIPES, getMyRecipes);
  yield takeEvery(SUBMIT_RECIPE, submitRecipe);
}

export default recipeSaga;