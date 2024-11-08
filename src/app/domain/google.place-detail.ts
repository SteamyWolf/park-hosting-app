interface PlaceDetailsResponse {
    html_attributions: any[]; // This is usually empty in Google Places responses.
    result: PlaceResult;
    status: string;
  }
  
  interface PlaceResult {
    address_components: AddressComponent[];
    adr_address: string;
    formatted_address: string;
    geometry: Geometry;
    icon: string;
    icon_background_color: string;
    icon_mask_base_uri: string;
    name: string;
    photos: Photo[];
    place_id: string;
    reference: string;
    types: string[];
    url: string;
    utc_offset: number;
    vicinity: string;
    website?: string;
  }
  
  interface AddressComponent {
    long_name: string;
    short_name: string;
    types: string[];
  }
  
  interface Geometry {
    location: LatLng;
    viewport: Viewport;
  }
  
  interface LatLng {
    lat: number;
    lng: number;
  }
  
  interface Viewport {
    northeast: LatLng;
    southwest: LatLng;
  }
  
  interface Photo {
    height: number;
    width: number;
    html_attributions: string[];
    photo_reference: string;
  }
  