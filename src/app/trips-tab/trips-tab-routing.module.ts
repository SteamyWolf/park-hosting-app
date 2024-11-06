import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TripsTabPage } from './trips-tab.page';

const routes: Routes = [
  {
    path: '',
    component: TripsTabPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TripsTabPageRoutingModule {}
