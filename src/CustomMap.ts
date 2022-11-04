import { User } from "./User";
import { Company } from "./Company";

const map: HTMLElement | null = document.getElementById("map");

export class CustomMap{
    private googleMap: google.maps.Map;

    constructor(){
        this.googleMap = new google.maps.Map(map!, {
            zoom:1,
            center: {
                lat: 0,
                lng: 0
            }
        })
    }

    addUserMarker(user:User):void{
        new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: user.location.lat,
                lng: user.location.lng,

            }
        })
    }
    
    addCompanyMarker(company: Company):void{
        new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: company.location.lat,
                lng: company.location.lng,

            }
        })
    }

}