import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PlacesAutocompleteResponse } from "../domain/google.place";
import { PlaceDetailsResponse } from "../domain/google.place-detail";

@Injectable({providedIn: 'root'})
export class GoogleService {
    private url = 'http://localhost:3000/api/places';

    constructor(private http: HttpClient) {}

    searchAutocompletePlaces(query: string): Observable<PlacesAutocompleteResponse> {
        return this.http.get<PlacesAutocompleteResponse>(this.url + '/autocomplete', {params: {query}});
    }

    findPlaceDetails(placeId: string): Observable<PlaceDetailsResponse> {
        return this.http.get<PlaceDetailsResponse>(this.url + '/coordinates', {params: {placeId}});
    }
}