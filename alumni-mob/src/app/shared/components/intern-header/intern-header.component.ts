import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { InternType } from 'src/app/core/types/intern/intern-type';
import { ChatComponent } from '../chat/chat.component';
import { ModalController, PopoverController } from '@ionic/angular';
import { InternService } from 'src/app/core/services/intern.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-intern-header',
  templateUrl: './intern-header.component.html',
  styleUrls: ['./intern-header.component.scss'],
})
export class InternHeaderComponent   {

  @Input()
  intern!: InternType;

  @Input()
  index!: number;

  constructor(
    private _router: Router,
    private _popOverController: PopoverController,
    private _modalController: ModalController,
    private _internService: InternService
  ) { }

  ngOnInnit(): void {
  }

  showDetail(id: string | undefined): void {
    // console.log("click : " + id)
    this._router.navigate(['intern', id])
  }

  async onChatClick(id: string) {
    this._internService.findOne(id).subscribe({
      next: (intern: InternType) => {
        this._internService.intern = intern
        // console.log(`interns : ${JSON.stringify(interns)}`)
      }})
    this._popOverController.dismiss()
    // Let's start with modalController
    const chatModal = await this._modalController.create({
      component: ChatComponent
    })
    chatModal.present()

  }
}
