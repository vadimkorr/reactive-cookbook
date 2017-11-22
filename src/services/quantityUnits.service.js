import dataProvider from './dataProvider.service';

class quantityUnitsService {
    getQuantityUnits() {
        return new dataProvider().quantityUnits;
    }
}

export default quantityUnitsService;