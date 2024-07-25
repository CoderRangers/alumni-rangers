import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountActivationPageRoutingModule } from './account-activation-routing.module';

import { AccountActivationPage } from './account-activation.page';
import { EmailFormComponent } from './components/email-form.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    AccountActivationPageRoutingModule,
    RouterModule,
    ReactiveFormsModule
  ],
  declarations: [AccountActivationPage, EmailFormComponent]
})
export class AccountActivationPageModule {}
