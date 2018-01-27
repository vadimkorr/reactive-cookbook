import ApiService from './api.service';

class RecipeApiService {
    apiService;
    constructor() {
        this.apiService = new ApiService();
    }

    submitRecipe(data, token) {
        console.log("SUBMIT RECIPE DATA", data)
        return this.apiService.post(
            this.apiService.BASE_URL + this.apiService.apis.submitRecipe,
            data,
            { "Authorization": "Bearer " + token }
        );
    }
}

export default RecipeApiService;