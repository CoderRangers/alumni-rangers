/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { take } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/core/services/storage.service';
import { WsChatService } from 'src/app/core/services/ws-chat.service';
import { LoginType } from 'src/app/core/types/login/login-type';
import { TokenType, TokenInfoType } from 'src/app/core/types/login/token-type';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  public form: FormGroup = new FormGroup({});

  constructor(
    private _formBuilder: FormBuilder,
    private _service: LoginService,
    private _toastController: ToastController,
    private _router: Router,
    private _storage: StorageService,
    private _wsService: WsChatService
  ) {}

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      login: [
        '', // Default value for the control
        [Validators.required],
      ],
      password: ['', [Validators.required]],
    });
  }

    onSubmit(): void {
      // console.log(`Bout to send ${JSON.stringify(this.form.value)}`)
      const value: LoginType = { email: this.form.value.login, pwd: this.form.value.password };
      this._service.login(value)
        .pipe(
          take(1)
        )
        .subscribe({
          next: async(response: TokenType) => {
            if (response.access_token) {
              this._storage.store('auth', response.access_token);
              this._router.navigate(['tabs','tab1'])
              .then(() => {
                this._service.tokenInfo().pipe(take(1))
                .subscribe({
                  next: (tokenInfo: TokenInfoType) => {
                    this._storage.store('internId', tokenInfo.internId);
                    this._wsService.connect(tokenInfo.internId);
                    this._wsService.receiveIdentity()
                      .subscribe((identity: any) => {
                      console.log(`got ${identity.socketId} from Socket Server`)
                      const userId: string = tokenInfo.internId;
                      const message: any = {
                        socketId: identity.socketId,
                        id: userId
                      }
                      this._wsService.sendIdentity(message)
                    }
                  )
                  } 
                })
              })
/*                 .then(() => {
                  console.log('Routing complete')
                  this._wsService.connect()
                  this._wsService.receiveIdentity()
                  .subscribe((identity: any) => {
                      console.log(`got ${identity.socketId} from Socket Server`)
                      const userId: string = ((response.body.token) as string).split('.')[0]
                      const message: any = {
                        socketId: identity.socketId,
                        id: userId
                      }
                      this._wsService.sendIdentity(message)
                    }
                  )
                }) */
              this.form.reset()
            }
            else {
              const toast = await this._toastController.create({
                message: "erreur",
                duration: 2000,
                position: 'middle',
                buttons: [
                  {
                    text: 'Réessayer',
                  }
                ]
              })
              /* // equivalent du await au dessus
              let legacyToastPromise
              this._toastController.create({
                message: response.body.message,
                duration: 2000,
                position: 'middle',
                buttons: [
                  {
                    text: 'Réessayer',
                  }
                ]
              }).then((toast) => legacyToastPromise = toast)
              */

              await toast.present()
              toast.onWillDismiss()
                .then(() => this.form.reset())
            }
          },
          error: (error: any) => {
            console.log(`ko, je dois afficher un toast ${JSON.stringify(error)}`)
          }
        })
    }
}
