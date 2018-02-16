import { ApiService, BASE_URL, Urls } from './api.service';

const RecipeApiService = {
    submitRecipe: (data, token) => {
        return ApiService.post(
            BASE_URL + Urls.submitRecipe,
            data,
            { "Authorization": "Bearer " + token }
        );
    },
    getRecipes: async (token) => {
        debugger;
        return ApiService.get(
            BASE_URL + Urls.getMyRecipes,
            { 'Authorization': 'Bearer ' + token }
        );
    },
}

export default RecipeApiService;