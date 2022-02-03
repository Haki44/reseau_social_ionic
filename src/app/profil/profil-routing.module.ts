import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilPage } from './profil.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilPage
  },
  {
    path: 'profil/edit',
    loadChildren: () => import('./edit/edit.module').then( m => m.EditPageModule)
  },
  {
    path: 'profil/modif-password',
    loadChildren: () => import('./modif-password/modif-password.module').then( m => m.ModifPasswordPageModule)
  },
  {
    path: 'profil/subscribers',
    loadChildren: () => import('./subscribers/subscribers.module').then( m => m.SubscribersPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilPageRoutingModule {}
