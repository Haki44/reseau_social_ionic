import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifPasswordPageRoutingModule } from './modif-password-routing.module';

import { ModifPasswordPage } from './modif-password.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifPasswordPageRoutingModule
  ],
  declarations: [ModifPasswordPage]
})
export class ModifPasswordPageModule {}
