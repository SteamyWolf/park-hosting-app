import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Prediction } from 'src/app/domain/google.place';
import { MapService } from 'src/app/services/map.service';

@Component({
  selector: 'app-explore-tab',
  templateUrl: 'explore-tab.page.html',
  styleUrls: ['explore-tab.page.scss']
})
export class ExploreTabPage implements OnInit {

  coordinates: {lat: number, lng: number} | null = null;

  destination!: Prediction;

  constructor(private navCtrl: NavController,
              private mapService: MapService) {}

  ngOnInit(): void {
      let coordinates = {lat: this.mapService.getLat(), lng: this.mapService.getLng()};
      this.destination = this.mapService.getDestination();
      this.coordinates = coordinates;
  }

  backToDestination(): void {
      this.navCtrl.navigateBack('destination');
  }

}
