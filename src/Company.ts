import {faker} from '@faker-js/faker';
import { setMap } from './CustomMap';

export class Company implements setMap {
    companyName: string;
    catchPhrase: string;
    location:{
        lat: number,
        lng: number
    }

    constructor(){
        this.companyName = faker.company.name();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }

    markerContent(): string{
        return `
        <div>
            <h3>Company Name: ${this.companyName}</h3> <br>
            CatchPhrase: ${this.catchPhrase}
        </div>
        `
    }
}