import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { InternHeaderComponent } from './components/intern-header/intern-header.component';




@NgModule({
  declarations: [
    InternHeaderComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    InternHeaderComponent
  ]
})
export class SharedModule { }
