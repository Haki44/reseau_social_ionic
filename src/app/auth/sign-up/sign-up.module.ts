import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignInPageRoutingModule } from './sign-up-routing.module';

import { SignInPage } from './sign-up.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, SignInPageRoutingModule],
  declarations: [SignInPage],
})
export class SignInPageModule {}
