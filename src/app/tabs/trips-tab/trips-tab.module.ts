import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TripsTabPage } from './trips-tab.page';

import { TripsTabPageRoutingModule } from './trips-tab-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TripsTabPageRoutingModule
  ],
  declarations: [TripsTabPage]
})
export class TripsTabPageModule {}
