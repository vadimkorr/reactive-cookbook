export default class RecipeService {
    getStepFriendlyName(type) {
        return type;
    }

    getRecipeAsText(recipe) {
        let friendlySteps = [];
        recipe.map((s, ind) => {
            //switch case
            let step = `${ind + 1}. ${this.getStepFriendlyName(s.type)} ${s.description.count} ${s.description.quantityUnits}(s) of ${s.description.ingredient} `;
            friendlySteps.push(step);
        });
        return friendlySteps;
    }

    getRecipeIngredientsAndQuantity() {

    }
}