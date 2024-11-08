import { Component, OnInit } from '@angular/core';
import { GoogleService } from '../services/google.service';
import { PlacesAutocompleteResponse, Prediction } from '../domain/google.place';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.page.html',
  styleUrls: ['./destination.page.scss'],
})
export class DestinationPage implements OnInit {

  predictions: Prediction[] = [];

  constructor(private googleService: GoogleService, 
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
  }

  inputChange(event: any | Event) {
    this.googleService.searchAutocompletePlaces(event.target.value).subscribe((data: PlacesAutocompleteResponse) => {
      this.predictions = data.predictions;
    });
  }

  predictionClick(prediction: Prediction) {
    console.log(prediction);
    this.googleService.findPlaceDetails(prediction.place_id).subscribe(details => {
      console.log(details);
      this.router.navigate(['/tabs/tabs/explore-tab', {lat: details.result.geometry.location.lat, lng: details.result.geometry.location.lng}], {relativeTo: this.route});
    });
  }

}
