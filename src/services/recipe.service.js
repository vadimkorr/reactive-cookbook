const RecipeHelper = {
    waitFriendlyStep: (ind, step) => {// 2
        return `${ind}. Wait ${step.description.timeAmount} ${step.description.timeUnits}(s)`;
    },
    putFriendlyStep: (ind, step) => {// 0
        return `${ind}. Put ${step.description.count} ${step.description.quantityUnits}(s) of ${step.description.ingredient}`;
    },
    makeFriendlyStep: (ind, step) => {// 1
        return `${ind}. ${step.description.processName}`;
    },
}

const RecipeService = {
    getStepFriendlyName: (type) => {
        return type;
    },

    getRecipeAsText: (recipe) => {
        let self = this;
        let friendlySteps = [];
        recipe.map((s, ind) => {
            let step = '';
            switch(s.type) {
                case 0:
                    step = RecipeHelper.putFriendlyStep(ind + 1, s);
                    break;
                case 1:
                    step = RecipeHelper.makeFriendlyStep(ind + 1, s);
                    break;
                case 2:
                    step = RecipeHelper.waitFriendlyStep(ind + 1, s);
                    break;
            }
            friendlySteps.push(step);
        });
        return friendlySteps;
    }
}

export default RecipeService;
