/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { HttpResponse } from '@angular/common/http';
import { take } from 'rxjs';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/core/services/storage.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent  implements OnInit {

  public form: FormGroup = new FormGroup({})

  constructor(
    private _formBuilder: FormBuilder,
    private _service: LoginService,
    private _toastController: ToastController,
    private _router: Router,
    private _storageService: StorageService
  ) { }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      login: [
        '', // default value for the control
        [ // validation criteria
          Validators.required
        ]
      ],
      password: [
        '', // default value for the control
        [ // validation criteria
          Validators.required
        ]
      ]
    })
  }

  onSubmit(): void {
    console.log(`About to send ${JSON.stringify(this.form.value)}`)
    this._service.doLogin(this.form.value).pipe(take(1))
    .subscribe({
      next: async (response: HttpResponse<any>) => {
        if (response.status === 200) {
          this._storageService.store('auth', response.body.token)
          console.log(`Ok, on peut afficher les posts`)
          this._router.navigate(['tabs', 'tab1'])
            .then(() => console.log('Routing complete'))
        } else {
          console.log(`KO, je dois afficher un toast ${JSON.stringify(response.body.message)}`)
          const toast = await this.createToast('middle', response.body.message)
          await toast.present()
          toast.onWillDismiss()
            .then(() => this.form.reset())
        }
        
      },
      error: (error: any) => {
        // do something
      }
    })
  }

  async createToast(pos: 'top' | 'middle' | 'bottom', msg: string): Promise<HTMLIonToastElement> {
    return await this._toastController.create({
      message: msg,
      duration: 2000,
      position: pos,
      buttons: [
        {
          text: 'Réessayer'
        }
      ]
    })
  }
}
