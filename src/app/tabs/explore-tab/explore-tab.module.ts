import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExploreTabPage } from './explore-tab.page';

import { ExploreTabPageRoutingModule } from './explore-tab-routing.module';
import { MapComponent } from 'src/app/tabs/components/map/map.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreTabPageRoutingModule
  ],
  declarations: [ExploreTabPage, MapComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ExploreTabPageModule {}
