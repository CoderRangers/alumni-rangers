import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { InternHeaderComponent } from './components/intern-header/intern-header.component';
import { ChatComponent } from './components/chat/chat.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    InternHeaderComponent,
    ChatComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [
    InternHeaderComponent
  ]
})
export class SharedModule { }
