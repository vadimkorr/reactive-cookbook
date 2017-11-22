import dataProvider from './dataProvider.service';

class timeUnitsService {
    getTimeUnits() {
        return new dataProvider().timeUnits;
    }
}

export default timeUnitsService
