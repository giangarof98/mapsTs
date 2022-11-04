import { User } from "./User";
import { Company } from "./Company";

const map: HTMLElement | null = document.getElementById("map");

//Instructions to every other class
//on how they can be argument
export interface setMap {
    location: {
        lat: number,
        lng: number,

    };
    markerContent(): string;
    //color: string;
}

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

    addMarker(setMap: setMap):void{
        
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: setMap.location.lat,
                lng: setMap.location.lng,
            }
        });

        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: setMap.markerContent()
            });

            infoWindow.open(this.googleMap, marker)
        })
    }

}
