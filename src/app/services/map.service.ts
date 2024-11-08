import { Injectable } from "@angular/core";
import { Prediction } from "../domain/google.place";

@Injectable({providedIn: 'root'})
export class MapService {
    private lat!: number;
    private lng!: number;
    private destination!: Prediction;

    getLat(): number {
        return this.lat;
    }

    getLng(): number {
        return this.lng;
    }

    getDestination(): Prediction {
        return this.destination;
    }

    setLat(lat: number): void {
        this.lat = lat;
    }

    setLng(lng: number): void {
        this.lng = lng;
    }

    setDestination(destination: Prediction): void {
        this.destination = destination;
    }
}