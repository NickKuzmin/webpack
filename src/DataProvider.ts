import { PersonDataModel } from './PersonDataModel'

export class DataProvider {
    getData(id: string) : PersonDataModel {
        if (id == 'Nick') {
            return new PersonDataModel("Nick", "Kuzmin Nick");
        }

        return new PersonDataModel("Kuzmin", "Kuzmin");
    }
}