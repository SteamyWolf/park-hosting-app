import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SavedTabPage } from './saved-tab.page';

import { SavedTabPageRoutingModule } from './saved-tab-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SavedTabPageRoutingModule
  ],
  declarations: [SavedTabPage]
})
export class SavedTabPageModule {}
