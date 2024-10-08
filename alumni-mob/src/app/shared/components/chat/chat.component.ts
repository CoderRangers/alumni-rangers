import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, ModalController } from '@ionic/angular';
import { take } from 'rxjs';

import { WsChatService } from 'src/app/core/services/ws-chat.service';
import { InternService } from 'src/app/core/services/intern.service';
import { InternType } from 'src/app/core/types/intern/intern-type';
import { SocketMessageType } from 'src/app/tab3/dto/socket-message.type';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent  implements OnInit {

  public message: string = ''
  public recievedMessages: Array<SocketMessageType> = []
  public sendedMessages: Array<SocketMessageType> = []
  public value: string = ''

  private _sid: string = ''
  public intern!: InternType
  public messages: Array<any> = []

  constructor(
    private _modalController: ModalController,
    private _wsService: WsChatService,
    private _internService: InternService
  ) { }

  ngOnInit() {
    console.log('init')
    this.intern = this._internService.intern!
    console.log('chat on init : ' + this.intern._id)

    this._wsService.receiveMessage()
      .subscribe((filteredMessages: Array<any>) => {
        this.messages = filteredMessages
      })
  }

  onSend(): void {
    this._wsService.sendMessage(this.message)
      .subscribe((filteredMessages: Array<any>) => {
        this.message = ''
        this.messages = filteredMessages
      })
    
  }

  onCancel(): void {
    this._modalController.dismiss()
    this._wsService.disconnect()
  }

  onIonInfinite(ev: any) {
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }
}