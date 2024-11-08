import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SavedTabPage } from './saved-tab.page';

const routes: Routes = [
  {
    path: '',
    component: SavedTabPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SavedTabPageRoutingModule {}
