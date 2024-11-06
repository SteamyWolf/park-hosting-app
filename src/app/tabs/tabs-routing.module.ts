import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'explore-tab',
        loadChildren: () => import('../explore-tab/explore-tab.module').then(m => m.ExploreTabPageModule)
      },
      {
        path: 'saved-tab',
        loadChildren: () => import('../saved-tab/saved-tab.module').then(m => m.SavedTabPageModule)
      },
      {
        path: 'trips-tab',
        loadChildren: () => import('../trips-tab/trips-tab.module').then(m => m.TripsTabPageModule)
      },
      {
        path: 'messages-tab',
        loadChildren: () => import('../messages-tab/messages-tab.module').then(m => m.MessagesTabPageModule)
      },
      {
        path: 'profile-tab',
        loadChildren: () => import('../profile-tab/profile-tab.module').then(m => m.ProfileTabPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/explore-tab',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/explore-tab',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
