import { Component, OnInit } from '@angular/core';
import { GoogleService } from '../services/google.service';
import { PlacesAutocompleteResponse, Prediction } from '../domain/google.place';
import { ActivatedRoute, Router } from '@angular/router';
import { MapService } from '../services/map.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.page.html',
  styleUrls: ['./destination.page.scss'],
})
export class DestinationPage implements OnInit {

  predictions: Prediction[] = [];

  constructor(private googleService: GoogleService,
              private mapService: MapService,
              private navCtrl: NavController,
              private route: ActivatedRoute) { }

  ngOnInit() {
  }

  inputChange(event: any | Event) {
    if (event.target.value) {
      this.googleService.searchAutocompletePlaces(event.target.value).subscribe((data: PlacesAutocompleteResponse) => {
        this.predictions = data.predictions;
      });
    }
  }

  predictionClick(prediction: Prediction) {
    this.googleService.findPlaceDetails(prediction.place_id).subscribe(details => {
      this.mapService.setLat(details.result.geometry.location.lat);
      this.mapService.setLng(details.result.geometry.location.lng);
      this.mapService.setDestination(prediction);
      this.navCtrl.navigateForward('/tabs/tabs/explore-tab', {relativeTo: this.route})
    });
  }

}
