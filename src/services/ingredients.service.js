import dataProvider from './dataProvider.service';

class ingredientsService {
    getIngredients() {
        return (new dataProvider()).ingredients;
    }
}

export default ingredientsService;
