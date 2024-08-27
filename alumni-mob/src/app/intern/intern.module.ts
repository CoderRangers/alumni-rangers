import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InternPageRoutingModule } from './intern-routing.module';

import { InternPage } from './intern.page';
import { InternInfoComponent } from './components/intern-info.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    InternPageRoutingModule
  ],
  declarations: [InternPage, InternInfoComponent]
})
export class InternPageModule {}
