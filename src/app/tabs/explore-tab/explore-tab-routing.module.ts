import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExploreTabPage } from './explore-tab.page';

const routes: Routes = [
  {
    path: '',
    component: ExploreTabPage,
  },
  {
    path: 'listing',
    loadChildren: () => import('./listing/listing.module').then( m => m.ListingPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExploreTabPageRoutingModule {}
