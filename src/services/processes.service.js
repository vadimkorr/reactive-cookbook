import dataProvider from './dataProvider.service';

class processesService {
    getProcesses() {
        return new dataProvider().processes;
    }
}

export default processesService;