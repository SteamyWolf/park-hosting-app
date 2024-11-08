import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Pin } from 'src/app/domain/pin';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {
  @ViewChild('mapContainer') mapContainer!: ElementRef;
  @Input() coordinates: {lat: number, lng: number} | null = null;

  map!: google.maps.Map;
  markers: google.maps.Marker[] = [];
  pinsData: Pin[] = [];

  @Output() emitOpenPinInfoCard: EventEmitter<Pin> = new EventEmitter<Pin>();
  @Output() emitClosePinInfoCard: EventEmitter<null> = new EventEmitter<null>();

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
      zoom: 12,
      mapTypeControl: false,
      streetViewControl: false,
      zoomControl: false,
      fullscreenControl: false,
    }

    this.map = new google.maps.Map(this.mapContainer.nativeElement, mapOptions);

    this.map.addListener('click', () => {
      this.emitClosePinInfoCard.emit();
    })

    this.map.addListener('idle', () => {
      this.onMapIdle();
    })
  }

  onMapIdle(): void {
    const center = this.map.getCenter();

    if (center) {
      const lat = center.lat();
      const lng = center.lng();

      this.fetchPins(lat, lng);
    }
  }

  fetchPins(lat: number, lng: number): void {
    // Call the API here once real data is made
    // Example: fetch data within a certain range around the center
    this.pinsData = this.generateDummyPins(lat, lng);

    // Clear previous markers
    this.clearMarkers();

    // Add new markers based on fetched data
    this.pinsData.forEach((pin: Pin) => {
      const marker = new google.maps.Marker({
        position: { lat: pin.lat, lng: pin.lng },
        map: this.map,
        icon: this.createCustomSquareIcon(pin.price.toString()), // Customize color
        title: `$${pin.price}`
      });

      marker.addListener('click', () => {
        this.emitOpenPinInfoCard.emit(pin);
      })

      this.markers.push(marker);
    })
  }

  // Generate dummy pins for now. (This will be deleted when the database is called).
  generateDummyPins(lat: number, lng: number): Pin[] {
    return [
      { lat: lat + 0.01, lng: lng + 0.01, price: 10, id: 1 },
      { lat: lat - 0.01, lng: lng - 0.01, price: 20, id: 2 },
      { lat: lat + 0.02, lng: lng - 0.01, price: 30, id: 3 },
      { lat: lat - 0.02, lng: lng + 0.02, price: 40, id: 4 },
    ];
  }

  // Clear markers from the map
  clearMarkers(): void {
    this.markers.forEach(marker => marker.setMap(null));
    this.markers = [];
  }

  // Method to create a custom SVG icon with dynamic color and price
  private createCustomSquareIcon(price: string): google.maps.Icon {
    // Calculate width dynamically based on price length
    const baseWidth = 30; // Base width for small prices like $5 or $10
    const extraWidthPerChar = 10; // Extra width per character beyond the base width
    const width = baseWidth + (price.length * extraWidthPerChar);
    const height = 30; // Keep height constant
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
        <rect x="2" y="2" width="${width - 4}" height="${height - 4}" rx="8" ry="8" fill="black" stroke="#ff6a00" stroke-width="2"/>
        <text x="50%" y="50%" text-anchor="middle" fill="white" font-size="14" font-family="Arial" font-weight="bold" dy=".35em">
          $${price}
        </text>
      </svg>`;

    return {
      url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`,
      scaledSize: new google.maps.Size(width, height),
      anchor: new google.maps.Point(width / 2, height)
    };
  }


}
