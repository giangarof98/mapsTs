import {faker} from '@faker-js/faker';
import { setMap } from './CustomMap';
export class User implements setMap {
    name:string;
    location: {
        lat: number,
        lng: number
    }
    color: string = 'red';

    constructor() {
        this.name= faker.name.firstName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude()),
        }
    }

    markerContent(): string {
        return `User Name: ${this.name}`;
    }
}