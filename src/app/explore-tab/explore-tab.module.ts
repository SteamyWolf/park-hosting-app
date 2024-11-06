import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExploreTabPage } from './explore-tab.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ExploreTabPageRoutingModule } from './explore-tab-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ExploreTabPageRoutingModule
  ],
  declarations: [ExploreTabPage]
})
export class ExploreTabPageModule {}
