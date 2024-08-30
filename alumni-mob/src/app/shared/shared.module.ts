import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { InternHeaderComponent } from './components/intern-header/intern-header.component';
import { AvatarWithStatusComponent } from './components/avatar-with-status/avatar-with-status.component';
import { ChatComponent } from './components/chat/chat.component';




@NgModule({
  declarations: [
    InternHeaderComponent,
    ChatComponent,
    AvatarWithStatusComponent
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
