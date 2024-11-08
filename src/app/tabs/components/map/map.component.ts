import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {
  @ViewChild('mapContainer') mapContainer!: ElementRef;
  @Input() coordinates: {lat: number, lng: number} | null = null;

  map: google.maps.Map | undefined;

  constructor() { }

  ngAfterViewInit() {
    this.initMap();
  }

  initMap() {
    if (!this.coordinates) {
      console.error('Coordinates are missing');
      return;
    }

    const mapOptions: google.maps.MapOptions = {
      center: this.coordinates,
      zoom: 12
    }

    this.map = new google.maps.Map(this.mapContainer.nativeElement, mapOptions)
  }

}
