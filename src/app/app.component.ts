import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
    function loadGoogleMaps(): Promise<any> {
      return new Promise((resolve, reject) => {
        if (typeof window['google'] !== 'undefined') {
          resolve(window['google']);
        } else {
          const script = document.createElement('script');
          script.src = `https://maps.googleapis.com/maps/api/js?key=${environment.GOOGLE_PLACES_API_KEY}&libraries=places`;
          script.async = true;
          script.defer = true;
          script.onload = () => resolve(window['google']);
          script.onerror = reject;
          document.head.appendChild(script);
        }
      });
    }

    loadGoogleMaps();
  }
}
