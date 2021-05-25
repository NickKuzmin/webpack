import { DataProvider } from './DataProvider'

(function init() {
    const dataProvider = new DataProvider();
    const result = dataProvider.getData("Nick");
    alert(`${result.name}: ${result.fullName}`);
})();