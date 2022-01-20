import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifPasswordPage } from './modif-password.page';

const routes: Routes = [
  {
    path: '',
    component: ModifPasswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifPasswordPageRoutingModule {}
